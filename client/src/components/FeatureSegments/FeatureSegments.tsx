import "../MainContainer/mainContainer.scss";
import "./featureSegments.scss";

import React, { useEffect, useRef, useState } from "react";

const segments = [
  {
    segmentId: "101",
    segmentName: "MSN Health",
    thumbnailUrl: "/api/img/MSNHealth.png",
    clickUrl: "https://www.msn.com/en-us/health",
  },
  {
    segmentId: "102",
    segmentName: "Bing Travel",
    thumbnailUrl: "/api/img/Travel.png",
    clickUrl: "https://www.bing.com/travel",
  },
  {
    segmentId: "103",
    segmentName: "Bing People Also Ask",
    thumbnailUrl: "/api/img/BingPAA.png",
    clickUrl: "https://www.bing.com/search?q=how+to+prepare+for+surgery",
  },
  {
    segmentId: "104",
    segmentName: "Bing Sports",
    thumbnailUrl: "/api/img/BingSports.png",
    clickUrl: "https://www.bing.com/search?q=EPL",
  },
];

const segmentsMobile = [
  {
    segmentId: "101",
    segmentName: "MSN Health",
    thumbnailUrl: "/api/img/MSNHealthMobile.png",
    clickUrl: "https://www.msn.com/en-us/health",
  },
  {
    segmentId: "102",
    segmentName: "Bing Travel",
    thumbnailUrl: "/api/img/TravelMobile.png",
    clickUrl: "https://www.bing.com/travel",
  },
  {
    segmentId: "103",
    segmentName: "Bing People Also Ask",
    thumbnailUrl: "/api/img/BingPAAMobile.png",
    clickUrl:
      "https://www.bing.com/search?q=how+to+install+windows+power+tools&cvid=89aec39163dd421a891ed2971f64a908&aqs=edge..69i57.19166j0j1&FORM=ANNTA1&PC=U531",
  },
  {
    segmentId: "104",
    segmentName: "Bing Sports",
    thumbnailUrl: "/api/img/BingSportsMobile.png",
    clickUrl: "https://www.bing.com/search?q=EPL",
  },
];
const delay = 5000;
export const FeatureSegments = (props: any) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  let timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    const arrayLen = isMobile ? segmentsMobile.length : segments.length;
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === arrayLen - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, isMobile]);

  useEffect(() => {
    checkCurrentDevice();
  }, []);

  function checkCurrentDevice() {
    if (window.innerWidth <= 480) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {segments.map((item, index) => (
          <a href={item?.clickUrl} target="_blank" rel="noreferrer">
            <div
              className="slide"
              title={item?.segmentName}
              key={index}
              style={{ backgroundImage: `url(${item?.thumbnailUrl})` }}
            ></div>
          </a>
        ))}
      </div>

      <div
        className="slideshowSlider-mobile"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {segmentsMobile.map((item, index) => (
          <a href={item?.clickUrl} target="_blank" rel="noreferrer">
            <div
              className="slide"
              title={item?.segmentName}
              key={index}
              style={{ backgroundImage: `url(${item?.thumbnailUrl})` }}
            ></div>
          </a>
        ))}
      </div>
      {isMobile ? (
        <div className="slideshowDots">
          {segmentsMobile.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      ) : (
        <div className="slideshowDots">
          {segments.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};
