// Zet NEXT_PUBLIC_SITE_URL naar het echte domein zodra de site live staat —
// tot die tijd resolven OG-afbeeldingen, canonical urls, sitemap.xml en
// robots.txt naar deze placeholder.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bf-bowl.vercel.app";
export const siteName = "B&F Bowl";
