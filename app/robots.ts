import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(generateRobotsTxt());
}

function generateRobotsTxt() {
  return `
    User-agent: *
    Allow: /
    Sitemap: https://iayvob.vercel.app/sitemap.xml
  `;
}