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

  .card-container-link {
    text-decoration: none;
    color: inherit;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 6px 1px #ccc;
    border-radius: 8px;
    overflow: hidden;
  }

  .card-container {
    max-width: 200px;
    min-height: 200px;
  }

  .card-image {
    width: 100%;
  }

  .card-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .card-title {
    font-size: 18px;
    margin: 0;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;
