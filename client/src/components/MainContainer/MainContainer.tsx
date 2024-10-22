import "./mainContainer.scss";

import { BingLogo, WXCLogo } from "../../icons/icons";

import CardsData from "../../jsonData/MainContainerCardData.json";
import { Constants } from "../constants/Constants";
import { FeatureSegments } from "../FeatureSegments/FeatureSegments";
import { FocusCard } from "./FocusCard";
import React from "react";
import { TeamMember } from "./TeamMember";
import teamData from "../../jsonData/MainContainerCardData.json";

/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props
 */
export const MainContainer = (props: any) => {
  const mainContainerCardsData = CardsData.mainContainerCardsData;
  const mainContainerTeamDetails = teamData.maincontainerTeamDetails;

  return (
    <main>
      <section className="banner-section">
        <div className="banner-container">
          <div className="hero-banner-wrapper">
            <div className="hero-content">
              <h1
                dangerouslySetInnerHTML={{ __html: Constants.WebSiteTitle }}
              ></h1>
              <p>{Constants.WebSiteSubText}</p>
            </div>
            <div className="hero-animation">
              <img
                src="/api/img/HeaderAnimation.gif"
                alt="Design Engineering Animation gif"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="quote-section">
        <div className="quote-container">
          <h2>{Constants.KeyFocusText}</h2>
          <div className="quote-wrapper">
            {mainContainerCardsData.cards.length > 0 &&
              mainContainerCardsData.cards.map((card: any, index: number) => {
                return <FocusCard card={card} />;
              })}
          </div>
        </div>
      </section>
      <section className="segments-section">
        <div className="segments-container">
          <h2>{Constants.FeatureSegMentText}</h2>
          <FeatureSegments />
        </div>
      </section>
      <section className="team-section">
        <div className="team-container">
          <h2>{Constants.MeetOurTeamText}</h2>
          <div className="team-wrapper">
            {mainContainerTeamDetails.Details?.length > 0 &&
              mainContainerTeamDetails.Details.map((memeber, index) => {
                return <TeamMember member={memeber} />;
              })}
          </div>
        </div>
      </section>
      <section className="footer-section">
        <div className="footer-container">
          <div className="footer-wrapper">
            <div className="msBingLogo">
              <BingLogo />
            </div>
            <div className="copyRight">
              {Constants.FooterText} &#169; {new Date().getFullYear()}
            </div>
            <div className="wxcLogo">
              <WXCLogo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
