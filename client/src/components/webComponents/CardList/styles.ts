import { neutralForegroundRest } from "@fluentui/web-components";
import { css } from "@microsoft/fast-element";

export const styles = css`
  :host {
    display: block;
    contain: content;
    color: ${neutralForegroundRest};
  }

  .card-list-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    text-align: left;
  }
`;
