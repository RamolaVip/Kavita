import { GoogleGenAI } from "@google/genai";

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

const FALLBACK_SHAYARIS: Record<string, any[]> = {
  love: [
    {
      hindi: "हज़ारों उलझनें राहों में और कोशिशें बेहिसाब,\nइसी का नाम है ज़िन्दगी, बस चलते रहिये जनाब।",
      romanized: "Hazaron uljhane rahon mein aur koshishein behisab,\nIsi ka naam hai zindagi, bas chalte rahiye janab.",
      meaning: "Life is a mix of countless complications and endless efforts; just keep moving forward."
    },
    {
      hindi: "तुम्हें देखा तो ये ख्याल आया,\nज़िन्दगी धूप तुम घना साया।",
      romanized: "Tumhein dekha toh yeh khayal aaya,\nZindagi dhoop tum ghana saaya.",
      meaning: "When I saw you, I felt that life is like the scorching sun and you are the dense shade."
    }
  ],
  sad: [
    {
      hindi: "आईना देखोगे तो मेरी याद आएगी,\nसाथ गुज़री वो मुलाकात याद आएगी।",
      romanized: "Aaina dekhoge toh meri yaad aayegi,\nSaath guzri woh mulaqat yaad aayegi.",
      meaning: "When you look in the mirror, you'll remember me and the moments we spent together."
    }
  ],
  motivation: [
    {
      hindi: "मंजिलें उन्हीं को मिलती हैं जिनके सपनों में जान होती है,\nपंखों से कुछ नहीं होता हौसलों से उड़ान होती है।",
      romanized: "Manzilein unhi ko milti hain jinke sapno mein jaan hoti hai,\nPankhon se kuch nahi hota hauslon se udaan hoti hai.",
      meaning: "Success comes to those whose dreams have life; wings alone don't matter, it's the courage that makes you fly."
    }
  ]
};

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
    console.warn("AI Generation failed or API key missing, using fallback:", error);
    const fallbacks = FALLBACK_SHAYARIS[category] || FALLBACK_SHAYARIS.love;
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }
}
