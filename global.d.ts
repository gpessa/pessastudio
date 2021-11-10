import { Theme } from '@emotion/react';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

declare module 'react-world-flags'

declare module 'gatsby-plugin-mailchimp' {
    import * as React from 'react';

    type MailchimpResult = 'success' | 'error';

    export interface MailchimpResponse {
        result: MailchimpResult;
        msg: string;
    }

    export interface MailchimpFields {
        [key: string]: string
    }

    function addToMailchimp(email: String, listFields?: MailchimpFields): Promise<MailchimpResponse>;

    export default addToMailchimp;
}

type Picture = {
    src: string
    caption?: string | Element | React.ReactElement
}

interface ImagesQuery {
    allFile: {
        edges: {
            node: {
                relativePath: string
                name: string
            }
        }[]
    }
}


declare module "@mui/material/styles/createTypography" {
    interface TypographyOptions {
        small: TypographyStyleOptions
        slim: TypographyStyleOptions
    }
    interface Typography {
        small: TypographyStyleOptions
        slim: TypographyStyleOptions
    }
}

declare module "@mui/material/styles/createPalette" {
    interface Palette {
        warm1: Palette["primary"]
        warm2: Palette["primary"]
    }
    interface PaletteOptions {
        warm1: PaletteOptions["primary"]
        warm2: PaletteOptions["primary"]
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        thin: true
    }
}

declare module "@mui/styles/defaultTheme" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme { }
}

declare module "@mui/styles/defaultTheme" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme { }
}