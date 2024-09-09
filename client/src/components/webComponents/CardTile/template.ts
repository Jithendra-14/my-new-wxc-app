import { html } from "@microsoft/fast-element";
import { CardTile } from "./index";

export const htmlTemplate = html<CardTile>`
  <!-- <a href="${(x) =>
    x.redirectUrl}" target="_blank" class="card-container-link"> -->
  <article class="card-container ${(x) => (x.isActive ? "active" : "")}">
    <div class="card-image">
      <img src="${(x) => x.image?.url}" alt="${(x) => x.image?.altText}" />
    </div>
    <div class="card-body">
      <h4 class="card-title">${(x) => x.title}</h4>
      <div class="card-content">
        <span>
          <strong>Major Initiative</strong> : ${(x) => x.majorInitiative}
        </span>
        <span> <strong>Area</strong> : ${(x) => x.area} </span>
      </div>
    </div>
    <button class="card-button" @click=${(x) => x.handleClick()}>Submit</button>
  </article>
  <!-- </a> -->
`;
