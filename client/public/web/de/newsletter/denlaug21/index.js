// https://az2024htmlpages.blob.core.windows.net/data/web/de/newsletter/denlaug21/img/acc_msb.png

$(document).ready(function() {
  fetchSASTokenAndInit();
});

async function getSASToken() {
  try {
    const response = await fetch("/api/azure/getSAS");
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error("Error fetching SAS token:", error);
    return ""; // Return empty string or handle error accordingly
  }
}

// Function to fetch SAS token and initialize the page
function fetchSASTokenAndInit() {
  getSASToken()
    .then((token) => {
      // Once the SAS token is fetched, call the function to generate the HTML page
      initializePageWithSASToken(token);
    })
    .catch((error) => {
      console.error("Error fetching SAS token:", error);
      initializePageWithSASToken(""); // Call init with an empty token in case of failure
    });
}

// Example function that initializes the page using the SAS token
function initializePageWithSASToken(sasToken) {
  const image_prefix =
    "https://az2024htmlpages.blob.core.windows.net/data/web/de/newsletter/denlaug21/";
  const image_suffix = "?" + sasToken;

  $("img").each(function() {
    // Get the current src of the image
    const currentSrc = $(this).attr("src");

    // Update the src attribute with the new value
    const newSrc = image_prefix + currentSrc + image_suffix;
    console.log(newSrc);
    $(this).attr("src", newSrc);
  });
}
