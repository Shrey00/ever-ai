import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/index";
import { users } from "@/db/schema/user_schema";
import { cookies } from "next/headers";
interface Auth {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  refresh_token_expires_in: number;
}

interface User extends Auth {
  profileImage: string;
  pinterestId: string;
  username: string;
  businessName: string;
  about: string;
  websiteUrl: string;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code")!;
    // const state = searchParams.get('state');

    const client_id = process.env.PINTEREST_CLIENT_ID!;
    const client_secret = process.env.PINTEREST_CLIENT_SECRET!;
    const authString = Buffer.from(`${client_id}:${client_secret}`).toString(
      "base64"
    );
    const redirect_uri =
      "http://localhost:3000/api/oauth/pinterest/auth-response";
    const grant_type = "authorization_code";
    const payload = {
      code,
      redirect_uri,
      grant_type,
      continuous_refresh: "true",
    };
    const access_token_response = await fetch(
      "https://api.pinterest.com/v5/oauth/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${authString}`,
        },
        body: new URLSearchParams(payload),
      }
    );
    const responseData = await access_token_response.json();
    const user = await getUserInfo(responseData);
    const insertedUser = await insertUser(user);
    console.log("Inserted User", insertedUser);
    // Set the cookie
    const cookie = await cookies();
    cookie.set("accessToken", responseData.access_token, {
      httpOnly: false,
      secure: false,
      path: "/",
      maxAge: 60 * 60 * 24 * 60,
    });
    cookie.set("refreshToken", responseData.refresh_token, {
      httpOnly: false,
      secure: false,
      path: "/",
      maxAge: 60 * 60 * 24 * 60,
    });
    return NextResponse.redirect(
      `http://localhost:3000`
    );
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch data", { status: 500 });
  }
}

async function insertUser(data: User) {
  try {
    const response = await db
      .insert(users)
      .values({
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        expiresIn: data.expires_in,
        refreshTokenExpiresIn: data.refresh_token_expires_in,
        profileImage: data.profileImage,
        pinterestId: data.pinterestId,
        username: data.username,
        businessName: data.businessName,
        about: data.about,
        websiteUrl: data.websiteUrl,
      })
      .returning({
        id: users.id,
      });
    return response;
  } catch (e) {
    console.error(e);
  }
}

async function getUserInfo(data: Auth): Promise<User> {
  const response = await fetch("https://api.pinterest.com/v5/user_account", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.access_token}`,
    },
  });
  const responseData = await response.json();
  return { ...data, ...responseData };
}
