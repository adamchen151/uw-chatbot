# UW Chatbot

A Next.js-based chatbot that provides information about the University of Waterloo. This chatbot uses Google's Gemini AI to answer questions about UW programs, campus life, admissions, and other relevant topics.

## Features

- Interactive chat interface
- Powered by Google's Gemini AI
- Provides accurate information about the University of Waterloo
- Real-time responses to user queries

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Google AI API key

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/uw-chatbot.git
cd uw-chatbot
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your Google AI API key:
```
GOOGLE_AI_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Environment Variables

- `GOOGLE_AI_API_KEY`: Your Google AI API key (required)

## Technologies Used

- Next.js
- TypeScript
- Google Generative AI (Gemini)
- Tailwind CSS

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
