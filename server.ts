import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent header for telemetry
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("WARNUNG: GEMINI_API_KEY ist nicht in den Umgebungsvariablen definiert. KI-Funktionalität nutzt Fallbacks.");
}

// API endpoint for smart translation and tips for older learners
app.post("/api/translate", async (req, res) => {
  try {
    const { question, correctAnswer } = req.body;
    if (!question) {
      return res.status(400).json({ error: "Fehlender Satz für die Übersetzung" });
    }

    if (!ai) {
      // Return a structured error when no key is set so the client does an immediate offline fallback
      return res.status(503).json({ error: "Gemini client not initialized" });
    }

    // Replace the blanks to give Gemini complete context
    const filledSentence = question.replace("___", `${correctAnswer || ""}`);

    const prompt = `Du bist ein hochpräziser Übersetzer. Übersetze diesen italienischen Satz, bei dem die Lücke bereits korrekt ausgefüllt wurde, direkt, verständlich und elegant ins Deutsche ohne zusätzliche Grammatikelemente oder lange Kommentare. Mach die Übersetzung kurz, natürlich und absolut präzise.

Kompletter italienischer Satz: "${filledSentence}"

Liefer Deine Antwort ausschließlich als gültiges JSON-Objekt im folgenden Format:
{
  "translation": "Die genaue deutsche Übersetzung des Satzes",
  "tip": ""
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const textOutput = response.text || "{}";
    const data = JSON.parse(textOutput.trim());
    return res.json(data);
  } catch (err: any) {
    console.error("Gemini Translation Endpoint Error:", err);
    return res.status(500).json({ error: "Fehler bei der KI-Generierung", details: err?.message });
  }
});

// Configure Vite or Static Asset delivery
async function setupRouting() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Italiano-Syllabus Server läuft auf http://localhost:${PORT} [Mode: ${process.env.NODE_ENV || 'development'}]`);
  });
}

setupRouting().catch((err) => {
  console.error("Fehler beim Starten des Express/Vite Servers:", err);
});
