import { provideFluentDesignSystem } from "@fluentui/web-components";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import React from "react";
import { AppFooter } from "../webComponents/Footer/index";
import { _AppCardList } from "../webComponents/CardList";
import { CardTile } from "../webComponents/CardTile";
const { wrap } = provideReactWrapper(React, provideFluentDesignSystem());

export const FluentFooter = wrap(AppFooter);
export const CardList = wrap(_AppCardList);
export const CardTileWC = wrap(CardTile);
