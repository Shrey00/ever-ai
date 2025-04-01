
import { NextResponse} from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const accessToken = searchParams.get('accessToken')!;
    console.log(accessToken)
    try {
        const response = await fetch('https://api.pinterest.com/v5/boards', {
            method: "GET",
            headers:{
                'Content-Type' : "application/json",
                'Authorization' : `Bearer ${accessToken}`
            },
        });
        const data = await response.json();
        console.log(data)
        return NextResponse.json(data)
    }catch(e) {
        console.log(e);
    }
}