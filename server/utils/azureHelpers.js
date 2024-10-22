const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  ContainerSASPermissions,
  generateBlobSASQueryParameters,
} = require("@azure/storage-blob");
const { createReadStream, unlinkSync } = require("fs");
const path = require("path");
require("dotenv").config(); // Load environment variables
const storageName = process.env.AZURE_STORAGE_NAME;
const storageKey = process.env.AZURE_STORAGE_KEY;

const CONTAINER_NAME = "data";
const NEWSLETTERS_FOLDER = "web/de/newsletter";

const generateSASToken = (containerName = CONTAINER_NAME) => {
  const sharedKeyCredential = new StorageSharedKeyCredential(
    storageName,
    storageKey
  );

  const sasOptions = {
    containerName: containerName, // Container where the blob is stored
    expiresOn: new Date(new Date().valueOf() + 24 * 60 * 60 * 1000), // Expiration time set to 24 hours
    permissions: ContainerSASPermissions.parse("rwl"), // Permissions, e.g., "r" for read, "w" for write, "l" for list
  };

  // Generate the SAS token parameters
  const sasToken = generateBlobSASQueryParameters(
    sasOptions,
    sharedKeyCredential
  ).toString();

  return {
    token: sasToken,
    expiration: sasOptions.expiresOn, // Return expiration time for later checking
  };
};
let currentSASToken = generateSASToken(); // Initial SAS token generation

// Function to continuously refresh the SAS token before it expires
const refreshSASToken = (containerName = CONTAINER_NAME) => {
  const checkInterval = 30 * 60 * 1000; // Check every 30 minutes

  setInterval(() => {
    const now = new Date();
    const timeLeft = currentSASToken.expiration - now;

    // If the token is about to expire within the next 30 minutes, regenerate it
    if (timeLeft <= 30 * 60 * 1000) {
      console.log("SAS Token is about to expire. Regenerating a new one...");
      currentSASToken = generateSASToken(containerName);
      console.log("New SAS Token generated:", currentSASToken.token);
    }
  }, checkInterval);
};

// Start refreshing the SAS token continuously
refreshSASToken();

const blobServiceClient = new BlobServiceClient(
  `https://${storageName}.blob.core.windows.net?${currentSASToken.token}`
);

// Get Blob from Azure
const getBlobFromAzure = async (blobName) => {
  const containerClient = blobServiceClient.getContainerClient(CONTAINER_NAME);
  const blobClient = containerClient.getBlobClient(blobName);

  const downloadBlockBlobResponse = await blobClient.download(0);
  const downloaded = await streamToBuffer(
    downloadBlockBlobResponse.readableStreamBody
  );
  return downloaded;
};

const streamToBuffer = async (readableStream) => {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on("data", (data) => {
      chunks.push(data instanceof Buffer ? data : Buffer.from(data));
    });
    readableStream.on("end", () => {
      resolve(Buffer.concat(chunks));
    });
    readableStream.on("error", reject);
  });
};

// Upload JSON to Azure
const uploadJSONToAzure = async (blobName, jsonData) => {
  const containerClient = blobServiceClient.getContainerClient(CONTAINER_NAME);
  const blobClient = containerClient.getBlockBlobClient(blobName);

  const jsonString = JSON.stringify(jsonData);
  const res = await blobClient.upload(jsonString, jsonString.length);
  return res;
};

// Upload Text file to Azure
const uploadTxtFileToAzure = async (blobName, txtData) => {
  const containerClient = blobServiceClient.getContainerClient(CONTAINER_NAME);
  const blobClient = containerClient.getBlockBlobClient(blobName);

  const res = await blobClient.upload(txtData, txtData.length);
  return res;
};

const uploadHTMLFileToAzure = async (blobName, htmlData) => {
  const containerClient = blobServiceClient.getContainerClient(CONTAINER_NAME);
  const blobClient = containerClient.getBlockBlobClient(blobName);

  const res = await blobClient.upload(htmlData, htmlData.length, {
    blobHTTPHeaders: { blobContentType: "text/html" }, // Set content type to HTML
  });
  return res;
};

// Upload the Image file to Azure Blob Storage
const uploadImageToAzure = async (req, file) => {
  try {
    const blobName = `${NEWSLETTERS_FOLDER}/${req.body.folderName}/${
      req.body[file.fieldname + "Name"]
    }${path.extname(file.originalname)}`;
    const containerClient =
      blobServiceClient.getContainerClient(CONTAINER_NAME);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadStream = createReadStream(file.path);
    await blockBlobClient.uploadStream(uploadStream, file.size);

    // Construct the URL for the uploaded blob
    const blobUrl = new URL(blockBlobClient.url).pathname.replace(
      "data",
      "api"
    );

    // Remove the file from the server's local storage after upload
    unlinkSync(file.path);
    return blobUrl;
  } catch (err) {
    throw new Error("Error uploading to Azure Blob Storage:" + err.message);
  }
};

const uploadAllImages = async (req, imgFiles) => {
  try {
    const uploadedUrls = {};

    // Loop through each file in imgFiles
    for (const [fieldName, file] of Object.entries(imgFiles)) {
      // Call the uploadImageToAzure function for each file
      const blobUrl = await uploadImageToAzure(req, file);

      // Push the blob URL into an array to track uploaded files
      uploadedUrls[fieldName] = blobUrl;
    }

    // Return the list of uploaded URLs after all images are uploaded
    return uploadedUrls;
  } catch (err) {
    console.error("Error uploading images:", err);
    throw err; // Pass the error up to be handled by the calling function
  }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = {
  generateSASToken,
  getBlobFromAzure,
  uploadJSONToAzure,
  uploadImageToAzure,
  uploadTxtFileToAzure,
  uploadHTMLFileToAzure,
  delay,
  currentSASToken,
  NEWSLETTERS_FOLDER,
  uploadAllImages,
};
