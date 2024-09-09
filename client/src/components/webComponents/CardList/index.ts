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
  id?: number;
}

@customElement({
  name: "app-card-list",
  template,
  styles,
})
export class _AppCardList extends FASTElement {
  @observable public cardsList: CardDetails[] = [];
  @observable public activeTileId: number = 1;

  connectedCallback(): void {
    super.connectedCallback();
  }

  public handleParentClick = (idProp: number) => {
    console.log(idProp, this.activeTileId);
    this.activeTileId = idProp;
  };
}
