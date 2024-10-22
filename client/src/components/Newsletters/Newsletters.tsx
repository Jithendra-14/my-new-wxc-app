import "./newsletters.scss";
import "../MainContainer/mainContainer.scss";

import { Label, Pivot, PivotItem } from "@fluentui/react";

import { CardLayout } from "../CardLayout";
import { Constants } from "../constants/Constants";
import newsLetterObject from "../../jsonData/Newsletters.json";

export const Newsletters = () => {
  const [DENewsLetters, HealthNewsLetters, WebXTNewsLetters]: any = [
    [],
    [],
    [],
  ];

  const allNewsLetters = newsLetterObject?.DE?.filter(
    (item) => true
  )?.reverse();

  newsLetterObject.DE.reduce((info, item) => {
    switch (item.category) {
      case "DE":
        DENewsLetters.push(item);
        break;
      case "HEALTH":
        HealthNewsLetters.push(item);
        break;
      case "WXC":
        WebXTNewsLetters.push(item);
    }
    return info;
  }, {});

  return (
    <main>
      <div className="prototype-de-section">
        <h1 className="segments-heading">{Constants.Newsletters}</h1>
        <Pivot
          aria-label="Large Link Size Pivot"
          linkSize="large"
          linkFormat="tabs"
          className="category-pills"
        >
          <PivotItem headerText="All">
            <Label>
              <div className="flex-container">
                {allNewsLetters?.map((obj: any, i: any) => (
                  <CardLayout obj={obj} objkey={i}></CardLayout>
                ))}
              </div>
            </Label>
          </PivotItem>
          <PivotItem headerText="Design Engineering">
            <div className="flex-container">
              {DENewsLetters.reverse().map((obj: any, i: any) => (
                <CardLayout obj={obj} objkey={i}></CardLayout>
              ))}
            </div>
          </PivotItem>
          <PivotItem headerText="WXC">
            <div className="flex-container">
              {WebXTNewsLetters.reverse().map((obj: any, i: any) => (
                <CardLayout obj={obj} objkey={i}></CardLayout>
              ))}
            </div>
          </PivotItem>
          <PivotItem headerText="Health">
            <div className="flex-container">
              {HealthNewsLetters.reverse().map((obj: any, i: any) => (
                <CardLayout obj={obj} objkey={i}></CardLayout>
              ))}
            </div>
          </PivotItem>
        </Pivot>
        {/* <div className='flex-container'>
                    {DENewsLetters.map((obj: any, i: any) => (
                        <CardLayout obj={obj} objkey={i}></CardLayout>
                    ))
                    }
                </div>
                <h3> WebXT Newsletters</h3>
                <div className='flex-container'>
                    {WebXTNewsLetters.map((obj: any, i: any) => (
                        <CardLayout obj={obj} objkey={i}></CardLayout>
                    ))
                    }
                </div>
                <h3> Health Newsletters</h3>
                <div className='flex-container'>
                    {HealthNewsLetters.map((obj: any, i: any) => (
                        <CardLayout obj={obj} objkey={i}></CardLayout>

                    ))
                    }
                </div> */}
      </div>
    </main>
  );
};
