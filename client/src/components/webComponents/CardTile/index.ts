import {
  customElement,
  FASTElement,
  ViewTemplate,
  observable,
} from "@microsoft/fast-element";
import { styles } from "./styles";
import { htmlTemplate } from "./template";

const template: ViewTemplate<CardTile> = htmlTemplate;

export interface CardImageDetails {
  altText?: string;
  url?: string;
}

@customElement({
  name: "card-tile",
  template,
  styles,
})
export class CardTile extends FASTElement {
  @observable public image?: CardImageDetails;
  @observable public titleProp?: string;
  @observable public majorInitiative?: string;
  @observable public area?: string;
  @observable public redirectUrl?: string;
  @observable public idProp?: number;
  @observable public isActive?: boolean;

  connectedCallback(): void {
    super.connectedCallback();
  }
}
