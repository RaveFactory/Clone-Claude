
# AI Chat Clone

Application full-stack type ChatGPT prête à pousser sur GitHub.

## Stack
- Frontend : Next.js + Tailwind
- Backend : FastAPI
- IA : API OpenAI compatible
- Docker ready

## Lancement

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Variables d'environnement

Backend `.env`
```
OPENAI_API_KEY=your_key
```

## Fonctionnalités
- Interface style ChatGPT
- Historique conversation
- Streaming réponses
- API backend
- Responsive mobile
- Structure scalable
