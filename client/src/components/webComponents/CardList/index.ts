import {
  customElement,
  FASTElement,
  ViewTemplate,
  observable,
} from "@microsoft/fast-element";
import { styles } from "./styles";
import { htmlTemplate } from "./template";

const template: ViewTemplate<_AppCardList> = htmlTemplate;

export interface CardImageDetails {
  altText?: string;
  url?: string;
}

export interface CardDetails {
  image?: CardImageDetails;
  title?: string;
  majorInitiative?: string;
  area?: string;
  redirectUrl?: string;
}

@customElement({
  name: "app-card-list",
  template,
  styles,
})
export class _AppCardList extends FASTElement {
  @observable public cardsList: CardDetails[] = [];

  connectedCallback(): void {
    super.connectedCallback();
  }
}
