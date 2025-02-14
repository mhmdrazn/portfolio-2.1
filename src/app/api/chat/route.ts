import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { userBio } from "@/lib/data";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

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

        const systemPrompt = `
            You are an AI assistant designed to answer questions specifically about Muhammad Razan Parisya Putra. 
            If a user asks something unrelated to Muhammad Razan, respond with:
            "I am sorry, information about it is not in this biography of Muhammad Razan. So, I cannot answer that question."
            Only provide information that is directly related to Muhammad Razan based on the given context. 
            But, if user greets answer it normallly with a greeting. Say calmly, helpfull, and friendly.
        `;

        const finalPrompt = `${systemPrompt}\n\nBiography:\n${userBio}\n\nUser: ${message}`;

        const model = genAI.getGenerativeModel({ 
            model: "gemini-2.0-flash", 
            generationConfig: {
                temperature: 1,
                maxOutputTokens: 2048,
            }
        });

        const result = await model.generateContentStream(finalPrompt);

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
