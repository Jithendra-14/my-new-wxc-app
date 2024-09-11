import { neutralForegroundRest } from "@fluentui/web-components";
import { css } from "@microsoft/fast-element";

export const styles = css`
  :host {
    display: block;
    contain: content
    color: ${neutralForegroundRest};
  }

  :host([hidden]) {
    display: none;
  }

  ::slotted(img) {
    height: 2.5rem;
    width: 2.5rem;
  }

  h3 {
    font-weight: bold;
    font-family: "Source Sans Pro";
    letter-spacing: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin: 0;
    padding: 1rem;
  }
`;
