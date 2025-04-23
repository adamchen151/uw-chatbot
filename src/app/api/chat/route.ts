import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Initialize the Google AI client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.message;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

    // Create a chat context with proper parts format
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: 'You are a helpful assistant that provides information about the University of Waterloo. Please provide accurate and helpful information about UW programs, campus life, admissions, and other relevant topics.' }],
        },
        {
          role: 'model',
          parts: [{ text: 'I understand that I am an AI assistant focused on providing information about the University of Waterloo. I will help answer questions about UW programs, campus life, admissions, and other relevant topics.' }],
        },
      ],
    });

    // Generate response with proper parts format
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
} 