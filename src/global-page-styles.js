import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "background": "--color-light",
        "font": "--headline1",
        "color": ""
    },
    "index": {
        "background": "--color-light",
        "font": "--headline1",
        "color": ""
    },
    "awd": {
        "background": "--color-light",
        "font": "--headline1",
        "color": ""
    },
    "asda": {
        "background": "--color-light",
        "font": "--headline1",
        "color": ""
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
