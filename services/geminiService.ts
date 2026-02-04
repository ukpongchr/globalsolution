import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from "../types";

const API_KEY = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Volt," an expert AI Engineering Consultant for Global Power Solutions. 
Your expertise covers:
1. Power Generation (Turbines, Solar, Wind, Diesel Generators).
2. Electrical Engineering (High Voltage Systems, Grid Stability, Transformers).
3. Machinery Maintenance (Predictive Maintenance, Vibration Analysis, Lubrication).

Your Tone: Professional, authoritative, yet helpful and concise. 
Format: Use Markdown for lists or technical steps.
Constraints: 
- Do not make up facts. If you don't know specific proprietary specs not provided, admit it generally.
- Be safety-conscious. Always advise following local safety regulations (OSHA, ISO, etc.).
- If the user asks about booking services, direct them to the Contact page.
`;

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageStream = async (chat: Chat, message: string) => {
  return await chat.sendMessageStream({ message });
};
