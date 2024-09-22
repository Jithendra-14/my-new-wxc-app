import React from "react";
import { Constants } from "./constants/Constants";

export const CardLayout = (props: any) => {
  const filteredObj = props.obj;
  const objkey = props.objkey;

  return (
    <a
      href={process.env.PUBLIC_URL + filteredObj.link}
      rel="noreferrer"
      target="_blank"
      className="link-container"
      key={objkey}
    >
      <img src={filteredObj.image} alt={filteredObj.linkLabel} />
      <div className="main-card">
        <div className="card-link-label">
          {filteredObj.linkLabel ? filteredObj.linkLabel : ""}{" "}
        </div>

        <div className="card-initiative-container">
          <div className="card-initiative">
          { Constants.MajorInitiative }
            <span className="card-sub-heading"> {filteredObj.initiative}</span>
          </div>
        </div>
        {/* <div className='dashed-line'></div> */}
        <div className="card-initiative-container">
          <div className="card-initiative">
          { Constants.Area }<span className="card-sub-heading"> {filteredObj.area}</span>
          </div>
        </div>
      </div>
    </a>
  );
};
