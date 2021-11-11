declare module 'react-world-flags'

declare module 'gatsby-plugin-mailchimp' {
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