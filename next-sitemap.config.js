/** @type {import('next-sitemap').IConfig} */
module.exports = {
    exclude: ['/404', '/500'],
    generateRobotsTxt: true,
    siteUrl: process.env.NEXT_PUBLIC_WEBISTE_URL
}