import { injectIntl } from "react-intl";

declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}