import {
  customElement,
  attr,
  FASTElement,
  ViewTemplate,
} from "@microsoft/fast-element";
import { styles } from "./styles";
import { htmlTemplate } from "./template";

const template: ViewTemplate<AppFooter> = htmlTemplate;

@customElement({
  name: "app-footer",
  template,
  styles,
})
export class AppFooter extends FASTElement {
  @attr company: string = "Microsoft";
}
