declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}

declare module 'react-sticky'

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

interface Picture {
    src: string
    caption?: string
}

interface ImagesQuery {
    allFile: {
        edges: {
            node: {
                relativePath: string
            }
        }[]
    }
}