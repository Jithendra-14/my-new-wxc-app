import { html } from "@microsoft/fast-element";

export const htmlTemplate = html`
  <h3><slot name="avatar"></slot> ${(x) => x.company} &copy;</h3>
`;
