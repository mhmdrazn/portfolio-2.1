import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message) {
            console.log("Message is required");
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        // Enable streaming response
        const result = await model.generateContentStream(message);

        const stream = new ReadableStream({
            async start(controller) {
                for await (const chunk of result.stream) {
                    if (chunk.text()) {
                        controller.enqueue(chunk.text());
                    }
                }
                controller.close();
            }
        });

        return new Response(stream, {
            headers: {
                "Content-Type": "text/plain",
                "Transfer-Encoding": "chunked"
            }
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
