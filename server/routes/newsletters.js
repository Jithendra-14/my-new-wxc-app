const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json([
    {
      image: {
        url: "https://picsum.photos/200",
        altText: "some alt text",
      },
      title: "ABC",
      majorInititative: "sports",
      area: "sports v2",
      redirectUrl: "https://picsum.photos/200",
    },
    {
      image: {
        url: "https://picsum.photos/200",
        altText: "some alt text",
      },
      title: "ABC",
      majorInititative: "sports",
      area: "sports v2",
      redirectUrl: "https://picsum.photos/200",
    },
    {
      image: {
        url: "https://picsum.photos/200",
        altText: "some alt text",
      },
      title: "ABC",
      majorInititative: "sports",
      area: "sports v2",
      redirectUrl: "https://picsum.photos/200",
    },
    {
      image: {
        url: "https://picsum.photos/200",
        altText: "some alt text",
      },
      title: "ABC",
      majorInitiative: "sports",
      area: "sports v2",
      redirectUrl: "https://picsum.photos/200",
    },
  ]);
});

module.exports = router;
