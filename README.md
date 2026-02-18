📧 AI Email Assistant

An AI-powered Email Reply Generator built using Spring Boot + Spring AI + Ollama + React.
This application generates professional, human-like email replies based on tone and input content.

🚀 Features

✨ Generate professional email replies

🎯 Tone customization (friendly, professional, formal, etc.)

🤖 Powered by local LLM using Ollama

⚡ REST API backend (Spring Boot)

🎨 React frontend (MUI-based UI)

🔄 Clean JSON response structure

🛠 Tech Stack
Backend

Java 17+

Spring Boot

Spring AI

Ollama (Local LLM runtime)

REST APIs

Frontend

React

Material UI (MUI)

Axios

🧠 AI Model

The project uses:

Ollama

Model: phi3:mini (Recommended for 8GB RAM systems)

You can change the model inside:

spring.ai.ollama.chat.options.model=phi3:mini

📂 Project Structure
Ai-Email-Assistant
│
├── backend/      # Spring Boot + Spring AI
├── frontend/     # React + MUI
└── README.md

⚙️ Installation Guide
1️⃣ Install Ollama

Download and install Ollama from:
https://ollama.com

Start Ollama:

ollama serve


Install lightweight model:

ollama pull phi3:mini

2️⃣ Run Backend
cd backend
mvn spring-boot:run


Backend runs at:

http://localhost:8080

3️⃣ Run Frontend
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

📬 API Endpoint
Generate Email Reply

POST

http://localhost:8080/api/email/generate

Request Body
{
  "emailContent": "Hi, we would like to schedule your interview tomorrow.",
  "tone": "professional"
}

Response
{
  "reply": "Dear Sir/Madam, Thank you for reaching out..."
}

🏗 Architecture
React Frontend
        ↓
Spring Boot Controller
        ↓
Spring AI Service
        ↓
Ollama (Local LLM)
        ↓
AI Generated Email

💡 Why Local AI?

No API costs

Fully offline

Privacy-friendly

Good for learning AI integration

🔮 Future Improvements

Email subject generation

Streaming AI responses

Email history database

Authentication system

Cloud deployment

Multi-language support

👨‍💻 Author

Rahul Kumar Sah
Java Developer | Spring Boot | Backend Developer | AI Integration

⭐ If You Like This Project

Give it a star ⭐ on GitHub!
