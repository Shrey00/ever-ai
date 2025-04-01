import { NextResponse} from "next/server";

export async function GET() {
    const redirect_uri = 'http://localhost:3000/api/oauth/pinterest/auth-response';
    const client_id = process.env.PINTEREST_CLIENT_ID!;
    const scope = "boards:read,boards:write,pins:read,pins:write,catalogs:read,catalogs:write,user_accounts:read";
    const response_type = "code";
    try {
        return NextResponse.redirect(`https://www.pinterest.com/oauth/?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`);
    } catch (error) {
        console.log(error)
        return new Response("Failed", { status: 500 });
    }
}