$(document).ready(function() {
  initializePageWithAPIToBlob();
});

// Example function that initializes the page using the SAS token
function initializePageWithAPIToBlob() {
  const image_prefix = "/api/web/de/newsletter/Monthly/Apr2024/";

  $("img").each(function() {
    // Get the current src of the image
    const currentSrc = $(this).attr("src");

    // Update the src attribute with the new value
    const newSrc = image_prefix + currentSrc;
    $(this).attr("src", newSrc);
  });
}
