// /pages/api/sitemap.ts

import { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_URL;

const sitemap = [
  { url: `${BASE_URL}/`, priority: 1.0 },
  { url: `${BASE_URL}/services`, priority: 0.8 },
  { url: `${BASE_URL}/projects`, priority: 0.8 },
  { url: `${BASE_URL}/testimonials`, priority: 0.8 },
  { url: `${BASE_URL}#contact`, priority: 0.7 },
  { url: `${BASE_URL}#about`, priority: 0.7 },

];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "application/xml");
  const xmlData = generateSitemapXml(sitemap);
  res.status(200).send(xmlData);
}

function generateSitemapXml(pages: { url: string; priority: number }[]) {
  const urls = pages
    .map(({ url, priority }) => `
      <url>
        <loc>${url}</loc>
        <priority>${priority}</priority>
      </url>
    `)
    .join("");
  
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>
  `;
}
