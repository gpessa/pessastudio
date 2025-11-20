import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY!;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID!;

    const DATACENTER = API_KEY.split("-")[1];

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.detail }, { status: 400 });
    }

    return NextResponse.json({ message: "Subscribed!" });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
