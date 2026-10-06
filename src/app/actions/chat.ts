"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateAIResponse(prompt: string) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return { 
        success: false, 
        message: "API key is not configured. Please add GEMINI_API_KEY to your environment variables." 
      };
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Using gemini-1.5-flash as it's fast and perfect for quick web chat responses
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(`
You are the AI assistant for "MagicBuilds", an elite agency specializing in AI SaaS platforms, Web Development, SEO, and Custom Software.
Keep your answer concise, helpful, and slightly enthusiastic/magical in tone. 

User prompt: ${prompt}
`);
    
    const response = await result.response;
    const text = response.text();
    
    return { success: true, message: text };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { success: false, message: "Sorry, my magic is currently recharging. Please try again later." };
  }
}
