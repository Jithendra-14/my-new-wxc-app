$(document).ready(function () {
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
  const url_prefix = "https://wxci.azurewebsites.net/web/Nov23/";
  const image_prefix =
    "https://az2024htmlpages.blob.core.windows.net/data/newsletters/Monthly/Nov23/";
  const image_suffix = "?" + sasToken;
  const defaultColor = {
    headingColor: "#000",
    bgColor: "#fff",
    color: "#4D4D4D",
    statusColor: "#575757",
    segmentColor: "#D4644A",
    flightColor: "#106ebe",
    shippedColor: "#7fba02",
  };
  const edge = {
    ...defaultColor,
    segmentColor: "#0078D4",
    // headingColor: "#041834",
    // bgColor: "#60F0FE",
    // color: "#041834",
  };
  // bgColor: "#69C4FD", color: "#000"
  const bing = {
    ...defaultColor,
    // headingColor: "#000F91",
    // color: "#000F91",
    segmentColor: "#4A52E8",
  };

  const sports = {
    ...defaultColor,
    segmentColor: "#34AA75",
  };

  const travel = {
    ...defaultColor,
    segmentColor: "#4f6bed",
  };

  const start = {
    ...defaultColor,
    segmentColor: "#005699",
    alternateSegmentColor: "rgb(131, 29, 120)",
    // bgColor: "#005699",
    // color: "#fff",
    // headingColor: "#fff",
  };

  const relevance = {
    ...defaultColor,
    segmentColor: "#106ebe",
  };

  const layoutType = {
    imageBanner: "IMAGE_BANNER",
    logoImage: "LOGO_IMAGE",
    textPassage: "TEXT_PASSAGE",
    SBSImage: "SBS_IMAGE",
    MultiColumnTextPassage: "Multi_Column_Text_Passage",
    textAndImageSideSide: "TEXT_AND_IMAGE_SIDE_BY_SIDE",
    introHeaderSideBySide: "INTRO_HEADER_SIDE_BY_SIDE",
    introHeaderTopAndBottom: "INTRO_HEADER_TOP_AND_BOTTOM",
  };
  const banner = {
    type: layoutType.imageBanner,
    path: image_prefix + "tmp/images/NovHeader.png" + image_suffix,
    alt: "DE updates October 2023",
    width: 900,
    url: url_prefix + "index.html",
  };

  const r1_intro = {
    type: layoutType.introHeaderSideBySide,
    headingColor: "#111",
    bodyColor: "#444",
    heading: "Hola! 👋",
    desc: `Welcome to the FY '24 Q1 edition of the DE Newsletter showcasing initiatives and projects across Sports, Travel, Relevance, Edge, and Health.
`,
    statusColor: "#D4644A",
    width: 410,
    padding: "",
    desc1: `As we united disjointed experiences, we delved deeper and immersed ourselves in learning, building, and crafting experiences that we're proud to present.`,
    desc2: `Hope you enjoy reading it!`,
  };

  // const r1_intro = {
  //   type: layoutType.introHeaderTopAndBottom,
  //   headingColor: "#111",
  //   bodyColor: "#444",
  //   heading: "Welcome to the FY '24 Q1 edition of Newsletter",
  //   statusColor: "#D4644A",
  //   width: 410,
  //   padding: "",
  //   description: `We're showcasing initiatives and projects across Sports, Travel, Relevance, Edge, and Health. As we united disjointed experiences, we delved deeper and immersed ourselves in learning, building, and crafting experiences that we're proud to present. Hope you enjoy reading it!`,
  // };

  {
    /* <span style="font-weight: 600;color: #3D8A1C">prominence styles, dark mode support, mobile responsiveness </span>  */
  }
  const renderMetricText = (text, color = "#3D8A1C") => {
    return `<span style="font-weight: 600;color: ${color}">${text}</span>`;
  };

  const health_text = {
    type: layoutType.textPassage,
    headingColor: bing.headingColor,
    bodyColor: bing.color,
    segment: { color: start.alternateSegmentColor, title: "Health" },
    heading: "Onboarding Health Experts",
    // and profile page V0
    content: `We have worked on Health expert onboarding experience for health experts. Using this feature they can enter their basic information through simple set of fields with required information . After onboarding, they access personalized profile page marked "Profile Under Verification," ensuring accuracy.
  Once verified, experts can answer top user asked questions on various health topics. Our V0 release invites experts to test this enhanced experience, and we're already working on V1. It will introduce more features, including answering top user asked questions and custom questions, with a focus as a DE on accessibility and dark mode.
  Stay tuned for our feature-rich V1 release!`,
    status: "- Shipped",
    statusColor: bing.shippedColor,
    background: bing.bgColor,
  };

  const health_image = {
    type: layoutType.imageBanner,
    path: image_prefix + "tmp/images/HealthExpertPlatform.gif" + image_suffix,
    alt: "Gif Onboarding Health Experts",
    width: 820,
    padding: "0px 40px;",
    background: bing.bgColor,
    url: "https://www.msn.com/en-in/health/expert-profile/start-health-creator/hp-myprofile",
  };

  const travel_text = {
    type: layoutType.textPassage,
    headingColor: bing.headingColor,
    bodyColor: bing.color,
    segment: { color: travel.segmentColor, title: "Travel" },
    heading: "Attractions Overlay with Ads",
    content: `We've launched the Rich attractions overlay feature for destinations, 
  leading to a significant boost in user engagement. Building on this success, 
  we've introduced text ads and Tour ads at the attractions level to capitalize on this engaging experience.
   This initiative is anticipated to generate around ${renderMetricText(
     "$47k in Annual Recurring Revenue (ARR)"
   )}, 
   while also enriching the user experience by providing more content and options regarding the attractions they're interested in.`,
    status: "- Shipped",
    statusColor: bing.shippedColor,
    background: bing.bgColor,
  };

  const travel_image = {
    type: layoutType.imageBanner,
    path:
      image_prefix + "tmp/images/travel-destination-overlay.gif" + image_suffix,
    alt: "Bing Travel Destination Overlay Image",
    width: 820,
    padding: "0px 40px;",
    background: bing.bgColor,
    url: "https://www.bing.com/travel/place-information?q=paris+france&SID=85584d24-2116-5b98-89f9-5714db931ac6&itemId=YN2000x18174703802019270958&scenario=SeeAndDo&form=PLACAB&entrypoint=PLACAB&cc=us&setlang=en",
  };

  const travel_text1 = {
    type: layoutType.textPassage,
    headingColor: bing.headingColor,
    bodyColor: bing.color,
    segment: { color: travel.segmentColor, title: "Travel" },
    heading: "Travel Assistant",
    content: `The Travel Assistant is a step towards having a guided experience to meet the user’s travel inspiration, curation and booking needs. The hero scenario to kick it off is the ability to ${renderMetricText(
      "compare hotels",
      "#000"
    )} based on relevant factors such as nearby attractions, prices, distance from airport etc. We included ${renderMetricText(
      "slide-in animations and appearance transitions",
      "#000"
    )} to make sure the assistant seamlessly comes to the view of the user. A dev driven effort to integrate bing chat into travel hub, now the travel assistant is going through various iterations and treatments.`,
    status: "- Flighted",
    statusColor: bing.flightColor,
    background: bing.bgColor,
  };

  const travel_image1 = {
    type: layoutType.imageBanner,
    path: image_prefix + "tmp/images/travel-assistant-1.gif" + image_suffix,
    alt: "Bing Travel Assistant Page",
    width: 820,
    padding: "0px 40px;",
    background: bing.bgColor,
    url: "https://www.bing.com/travel/hotel-search?q=hotels+in+new+york%2C+united+states&cin=2023-11-15&cout=2023-11-16&guests=2A0C&age=&rooms=1&displaytext=New+York%2C+United+States&loc=New+York%2C+United+States&lat=40.71455001831055&lon=-74.00711822509766&form=HOTHTL&entrypoint=UNKHUB&sf=trvlrrcmp&cc=us&setlang=en",
  };

  const travel_text2 = {
    type: layoutType.textPassage,
    headingColor: bing.headingColor,
    bodyColor: bing.color,
    segment: { color: travel.segmentColor, title: "Travel" },
    heading: "Attractions in China Go Big Answer",
    content: `In our Current City Go Big Experience, we lack access to attractions data for China, even though attractions are highly popular within our City Go Big feature. To address this limitation, we've implemented an enhancement: the introduction of a 'See and Do' button within City Go Big. When users click on this button, they are redirected to a search engine results page (SERP) with a re-query based on the attractions in the specified city.
   Additionally, we've made design improvements to the icons for booking flights and hotels in our Go Big answer. As a result, we've observed a ${renderMetricText(
     "1.5% increase in APSAT"
   )} during flight for this experience`,
    status: "- Shipped",
    statusColor: bing.shippedColor,
    background: bing.bgColor,
  };

  const travel_image2 = {
    type: layoutType.imageBanner,
    path: image_prefix + "tmp/images/city-go-big-seeando.png" + image_suffix,
    alt: "Travel China City Go Big Answer Page",
    width: 820,
    padding: "0px 40px;",
    background: bing.bgColor,
    url: "https://www.bing.com/search?q=seattle&cc=cn&setlang=zh-hans",
  };

  const relevance_text = {
    type: layoutType.textPassage,
    headingColor: bing.headingColor,
    bodyColor: bing.color,
    segment: { color: relevance.segmentColor, title: "Relevance" },
    heading: "PAA Chat Coherence Updates",
    content: `This flight incorporates modifications aimed at enhancing the user experience, as suggested by the WP Coherence team, to ensure the People Also Ask section with Sydney experience  is seamlessly coherent with the Whole Page.`,
    status: "- Flighted",
    statusColor: bing.flightColor,
    background: bing.bgColor,
  };

  const relevance_image = {
    type: layoutType.imageBanner,
    path: image_prefix + "tmp/images/chat-coherence.png" + image_suffix,
    alt: "SERP page with chat coherence changes",
    width: 820,
    padding: "0px 40px;",
    background: bing.bgColor,
    url: "https://www.bing.com/search?q=mexico+news&form=QBLH&sp=-1&ghc=1&lq=0&pq=mexico+new&sc=6-10&qs=n&sk=&cvid=8F0BCE8D3F6F44D18F3CBCC57BEE2559&ghsh=0&ghacc=0&ghpl=&setflight=paasepaftrqt&cc=us&setlang=en",
  };

  const relevance_text2 = {
    type: layoutType.textPassage,
    headingColor: bing.headingColor,
    bodyColor: bing.color,
    segment: { color: relevance.segmentColor, title: "Relevance" },
    heading: "Waterfall PAA Mainline",
    content: `We have worked on a new user experience known as the "Waterfall PAA." This experience showcases waterfall arrangement of question and answer cards in People Also Ask section, providing users with a visually engaging and interactive way to explore content.
  `,
    status: "- Flighted",
    statusColor: bing.flightColor,
    background: bing.bgColor,
  };

  const relevance_image2 = {
    type: layoutType.imageBanner,
    path: image_prefix + "tmp/images/waterfall.png" + image_suffix,
    alt: "Bing Waterfall PAA Page",
    width: 820,
    padding: "0px 40px;",
    background: bing.bgColor,
    url: "https://www.bing.com/search?q=figma&FORM=AWRE&setmkt=en-US&setflight=enblmlwtrflt&cc=us&setlang=en",
  };

  const sports_text1 = {
    type: layoutType.textPassage,
    headingColor: bing.headingColor,
    bodyColor: bing.color,
    segment: { color: sports.segmentColor, title: "Sports" },
    heading: "Motorsports",
    content: `
  We are excited to introduce the revamped version of F1 sports answers on Bing. 
  ${renderMetricText(
    "This enhanced version has injected life into the F1 race tracks, offering meticulously curated high-definition track images that vividly capture the essence of the sport.",
    "#000"
  )} 
  
  Furthermore, users can now conveniently access comprehensive race information, including upcoming schedules, all in one place. 
  This streamlined approach ensures that F1 enthusiasts have quick and easy access to the details they crave.`,
    status: "- Flighted",
    statusColor: bing.flightColor,
    background: bing.bgColor,
  };

  const sports_text2 = {
    type: layoutType.textPassage,
    bodyColor: bing.color,
    heading: "",
    content: `In addition to the overall F1 sports experience, we have also introduced F1 Driver answers, providing users with an in-depth look at their favourite drivers.
  This feature enables users to explore a driver's  race history, and current standings, all seamlessly integrated into the Search Engine Results Page (SERP).
  
  The results of our recent deployment are impressive.
   We have observed a remarkable ${renderMetricText(
     "38% reduction in client-side errors"
   )}, resulting in a smoother and more reliable user experience. Additionally, HTML embedded images now load a remarkable ${renderMetricText(
      "37 % faster"
    )}, further enhancing the overall speed and efficiency of the F1 sports answers on Bing. We are committed to continuously improving the user experience.
  `,
    background: bing.bgColor,
  };

  const sports_image1 = {
    type: layoutType.SBSImage,
    statusColor: edge.statusColor,
    background: edge.bgColor,
    image1: {
      path: image_prefix + "tmp/images/f1-gif 1.gif" + image_suffix,
      alt: "F1 search image",
      width: 460,
      padding: "0 0 0 0;",
    },
    image2: {
      path: image_prefix + "tmp/images/mob-f1-gif.gif" + image_suffix,
      alt: "F1 search image",
      width: 220,
      padding: "0 0 6px 0;",
    },
    image1desc: {
      color: edge.color,
      content: "Desktop",
      padding: "20px 0 0px 0;",
    },
    image2desc: {
      color: edge.color,
      content: "Mobile",
      padding: "20px 0 0px 0;",
    },
    url: "https://www.bing.com/search?q=f1&qs=n&features=sportsarena,sportsarenaall,sportsarenaind",
  };

  const sports_image2 = {
    type: layoutType.SBSImage,
    statusColor: edge.statusColor,
    background: edge.bgColor,
    image1: {
      path: image_prefix + "tmp/images/dF1-gif.gif" + image_suffix,
      alt: "Driver f1 search image",
      width: 460,
      padding: "0 0 0 0;",
    },
    image2: {
      path: image_prefix + "tmp/images/mob-d-gif.gif" + image_suffix,
      alt: "Driver f1 search image",
      width: 220,
      padding: "0 0 6px 0;",
    },
    image1desc: {
      color: edge.color,
      content: "Desktop",
      padding: "20px 0 0px 0;",
    },
    image2desc: {
      color: edge.color,
      content: "Mobile",
      padding: "20px 0 0px 0;",
    },
    url: "https://www.bing.com/search?q=Max+Verstappen&go=Search&qs=ds&form=QBRE&features=sportsarena,sportsarenaall,sportsarenaind",
  };

  const edge_text = {
    type: layoutType.textPassage,
    headingColor: edge.headingColor,
    bodyColor: edge.color,
    heading: "Phoenix WebUI",
    segment: { color: edge.segmentColor, title: "Edge" },
    status: "- Experimentation",
    content: `As a part of Project Phoenix effort to modernize the look and feel of the Edge Browser, we have investigated WebUIs that require updates. We have identified and prioritized over 100 WebUIs. To transition them to newer, refined appearance, we’ll need to incorporate new Fluent v3 components along with Phoenix Token library. As an initial step in this process, Phoenix tokens have been integrated into Browser Essentials, which already utilises Fluent v3 web components. We have explored various ways to incorporate the token library into Edge, and scheduled performance runs to assess the potential impact.`,
    statusColor: edge.statusColor,
    background: edge.bgColor,
  };

  const edge_image = {
    type: layoutType.imageBanner,
    path: image_prefix + "tmp/images/phoenix.gif" + image_suffix,
    alt: "Edge Settings Page",
    width: 820,
    // padding: "0px 40px;",
    padding: "0px 40px 40px;",
    background: bing.bgColor,
    url: "",
  };

  let nGenJSON = [
    banner,
    sports_text1,
    sports_image1,
    sports_text2,
    sports_image2,
    travel_text1,
    travel_image1,
    travel_text,
    travel_image,
    travel_text2,
    travel_image2,
    health_text,
    health_image,
    relevance_text,
    relevance_image,
    relevance_text2,
    relevance_image2,
    edge_text,
    edge_image,
    // hack0,
    // hack1,
    // hack2,
    // hack3,
    // hack4,
    // section4_hackathon_footer,
    {
      type: layoutType.imageBanner,
      path: image_prefix + "tmp/images/NovFooter.png" + image_suffix,
      alt: "footer",
      width: 900,
      background: defaultColor.bgColor,
      url: url_prefix + "index.html",
    },
  ];

  // Now call your nGen_init or any other initialization logic
  nGen_init(nGenJSON, layoutType); // Call nGen_init only after the SAS token is ready
}
