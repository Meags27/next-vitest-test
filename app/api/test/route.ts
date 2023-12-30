import "server-only";

import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
    try {
        return NextResponse.json({ goodResponse: true }, { status: 200 });
    } catch (error) {
        
        return NextResponse.json(
            {message: "An error occured" },
            { status: 500 },
        );
    }
}
