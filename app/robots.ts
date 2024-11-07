import { NextResponse } from "next/server";

export default async function GET() {
  const robotsTxt = `
    User-agent: *
    Allow: /
    Sitemap: ${process.env.NEXT_PUBLIC_URL}/sitemap.xml
  `;
  
  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
