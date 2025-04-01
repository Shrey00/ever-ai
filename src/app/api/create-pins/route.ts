
import { NextResponse} from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const { searchParams } = new URL(request.url);
    const accessToken = searchParams.get('accessToken')!;
    console.log("ACCESS", accessToken);
    console.log("BODY", body)
    try {
        const response = await fetch('https://api.pinterest.com/v5/pins', {
            method: "POST",
            headers:{
                'Content-Type' : "application/json",
                'Authorization' : `Bearer ${accessToken}`
            },
            body: JSON.stringify(body)
        });
        const responseData = await response.json();
        console.log(responseData);
        return NextResponse.json({response})
    }catch(e) {
        console.log(e);
    }
}