import { GoogleGenAI } from "@google/genai";
import { SHAYARI_DATA, ShayariEntry } from "../data/shayariData";

let aiClient: GoogleGenAI | null = null;

function getAI() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured in the environment.");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

export function getRandomFromDataset(category?: string): ShayariEntry {
  const filtered = category && category !== 'all'
    ? SHAYARI_DATA.filter(s => s.category === category)
    : SHAYARI_DATA;
  
  const source = filtered.length > 0 ? filtered : SHAYARI_DATA;
  return source[Math.floor(Math.random() * source.length)];
}

export async function generateShayari(theme: string, category: string) {
  try {
    const ai = getAI();
    const prompt = `Generate a beautiful Hindi Shayari (poetry) on the theme: "${theme}" in the category: "${category}". 
    The Shayari should be written in Hindi script (Devanagari) and also provide a Romanized version (Hinglish).
    Format the output as JSON with the following structure:
    {
      "hindi": "The shayari in Hindi script",
      "romanized": "The shayari in Hinglish",
      "meaning": "A brief meaning in English"
    }`;

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
    console.warn("AI Generation failed or API key missing, using dataset fallback:", error);
    return getRandomFromDataset(category);
  }
}
