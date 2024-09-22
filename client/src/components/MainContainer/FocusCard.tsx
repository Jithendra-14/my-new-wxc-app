import "./mainContainer.scss";

import * as React from "react";

export const FocusCard = (props: { card: any }) => {
  const { card } = props;
  return (
    <div className="key-focus-card delightful">
      <div className="card-icon">
        <img src={card.imgSrc} alt={card.imgAltTxt} />
      </div>
      <div className="bottom-content-container">
        <h4>{card.cardTitle}​</h4>
        <p>{card.cardSubText}</p>
      </div>
    </div>
  );
};

export default FocusCard;
