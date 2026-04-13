import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateShayari(theme: string, category: string) {
  const prompt = `Generate a beautiful Hindi Shayari (poetry) on the theme: "${theme}" in the category: "${category}". 
  The Shayari should be written in Hindi script (Devanagari) and also provide a Romanized version (Hinglish).
  Format the output as JSON with the following structure:
  {
    "hindi": "The shayari in Hindi script",
    "romanized": "The shayari in Hinglish",
    "meaning": "A brief meaning in English"
  }`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating Shayari:", error);
    throw error;
  }
}
