/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import "../MainContainer/mainContainer.scss";
import "../Newsletters/newsletters.scss";

import { Label, Pivot, PivotItem } from "@fluentui/react";

import { CardLayout } from "../CardLayout";
import React from "react";
import prototypeObject from "../../jsonData/ProtoType.json";
import { Constants } from "../constants/Constants";

/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props
 */
export const Prototypes = (props: any) => {
  const data = prototypeObject.protoTypeData
  const [
    healthItems,
    retailItems,
    sportsItems,
    travelItems,
    aieItems,
    newsItems,
    localItems,
    techAnswerItems,
    triviaItems,
  ]: any = [[], [], [], [], [], [], [], [], []];
  // let activePill:any = "All";
  data.Bing.reduce((info, item) => {
    switch (item.initiative) {
      case "Health":
        healthItems.push(item);
        break;
      case "Retail":
        retailItems.push(item);
        break;
      case "Sports":
        sportsItems.push(item);
        break;
      case "Travel":
        travelItems.push(item);
        break;
      case "AIE":
        aieItems.push(item);
        break;
      case "News":
        newsItems.push(item);
        break;
      case "Local":
        localItems.push(item);
        break;
      case "Tech Answer":
        techAnswerItems.push(item);
        break;
      case "Trivia":
        triviaItems.push(item);
        break;
    }
    return info;
  }, {});

  return (
    <main>
      <div className="prototypes-main-section">
        <h1 className="segments-heading"> {Constants.Segments}</h1>
        <Pivot
          aria-label="Large Link Size Pivot"
          linkSize="large"
          linkFormat="tabs"
          className="category-pills"
        >
          <PivotItem headerText="All">
            <Label>
              <div className="flex-container">
                {data.Bing.map((obj: any, i: any) => (
                  <CardLayout obj={obj} objkey={i} key={obj.id}></CardLayout>
                ))}
              </div>
            </Label>
          </PivotItem>
          <PivotItem headerText="Retail">
            <div className="flex-container">
              {retailItems.map((obj: any, i: any) => (
                <CardLayout obj={obj} objkey={i} key={obj.id}></CardLayout>
              ))}
            </div>
          </PivotItem>
          <PivotItem headerText="Sports">
            <div className="flex-container">
              {sportsItems.map((obj: any, i: any) => (
                <CardLayout obj={obj} objkey={i} key={obj.id}></CardLayout>
              ))}
            </div>
          </PivotItem>
          <PivotItem headerText="Travel">
            <div className="flex-container">
              {travelItems.map((obj: any, i: any) => (
                <CardLayout obj={obj} objkey={i} key={obj.id}></CardLayout>
              ))}
            </div>
          </PivotItem>
          <PivotItem headerText="AIE">
            <div className="flex-container">
              {aieItems.map((obj: any, i: any) => (
                <CardLayout obj={obj} objkey={i} key={obj.id}></CardLayout>
              ))}
            </div>
          </PivotItem>
          <PivotItem headerText="News">
            <div className="flex-container">
              {newsItems.map((obj: any, i: any) => (
                <CardLayout obj={obj} objkey={i} key={obj.id}></CardLayout>
              ))}
            </div>
          </PivotItem>
          <PivotItem headerText="Local">
            <div className="flex-container">
              {localItems.map((obj: any, i: any) => (
                <CardLayout obj={obj} objkey={i} key={obj.id}></CardLayout>
              ))}
            </div>
          </PivotItem>
          <PivotItem headerText="TechAnswer">
            <div className="flex-container">
              {techAnswerItems.map((obj: any, i: any) => (
                <CardLayout obj={obj} objkey={i} key={obj.id}></CardLayout>
              ))}
            </div>
          </PivotItem>
          <PivotItem headerText="Trivia">
            <div className="flex-container">
              {triviaItems.map((obj: any, i: any) => (
                <CardLayout obj={obj} objkey={i} key={obj.id}></CardLayout>
              ))}
            </div>
          </PivotItem>
        </Pivot>
      </div>
    </main>
  );
};
