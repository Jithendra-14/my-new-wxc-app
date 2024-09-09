import { html, repeat } from "@microsoft/fast-element";
import { _AppCardList, CardDetails } from "./index";

export const cardTemplate = html<CardDetails>`
  <card-tile
    :image=${(x) => x.image}
    :titleProp=${(x) => x.title}
    :majorInitiative=${(x) => x.majorInitiative}
    :area=${(x) => x.area}
    :redirectUrl=${(x) => x.redirectUrl}
    :idProp=${(x) => x.id}
    :isActive=${(x, c) => c.parent.activeTileId === x.id}
    :handleParentClick=${(x, c) => c.parent.handleParentClick}
  >
  </card-tile>
`;

export const htmlTemplate = html<_AppCardList>`
  <section class="card-list-container">
    <edge-ob-container></edge-ob-container>
    ${repeat((x) => x?.cardsList, cardTemplate)}
  </section>
`;
