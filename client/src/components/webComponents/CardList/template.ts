import { html, repeat } from "@microsoft/fast-element";
import { _AppCardList, CardDetails } from "./index";

export const cardTemplate = html<CardDetails>`
  <a href="${(x) => x.redirectUrl}" target="_blank" class="card-container-link">
    <article class="card-container">
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
    </article>
  </a>
`;

export const htmlTemplate = html<_AppCardList>`
  <section class="card-list-container">
    ${repeat((x) => x?.cardsList, cardTemplate)}
  </section>
`;
