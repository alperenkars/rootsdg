import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateFortune = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Aslıhan adında maymunları çok seven bir arkadaşım var. Onun için önümüzdeki bir ay içinde başına gelecek ilginç, komik ama güzel ve tatlı bir olay uydur. Bir falcı gibi mistik ama eğlenceli konuş. Gelecekten haber veriyormuşsun gibi olsun. Türkçe cevap ver. Kısa olsun (maksimum 2 cümle).",
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text || "Yıldızlar diyor ki: Önümüzdeki hafta karşına çıkan bir maymun peluşu sana büyük şans getirecek, sakın onu almadan geçme!";
  } catch (error) {
    console.error("Error generating fortune:", error);
    return "Fal küresi biraz buğulu... Ama önümüzdeki ayın harika geçeceği kesin!";
  }
};
