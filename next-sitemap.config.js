/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_WEBISTE_URL,
    generateRobotsTxt: true,
    exclude: ['/404', '/500', '/admin']
}