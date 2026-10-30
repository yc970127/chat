# AISOGA Enterprise Knowledge Base

An AI-powered enterprise knowledge base and intelligent assistant built with **Nuxt 4**, **AI SDK**, and **Qdrant**.

AISOGA is designed to help businesses organize internal knowledge, retrieve information efficiently, and build AI-powered knowledge assistants. By combining large language models with Retrieval-Augmented Generation (RAG), AISOGA enables users to interact with company documents and obtain accurate, context-aware answers.

## Features

- ⚡ **AI-powered Conversations** — Streaming AI responses with support for multiple LLM providers through AI SDK.
- 🤖 **Multiple AI Models** — Connect different language models and AI providers through a unified interface.
- 📚 **Enterprise Knowledge Base** — Organize and manage company documents, technical manuals, product specifications, and business information.
- 🔍 **Semantic Search** — Powered by Qdrant vector database for intelligent document retrieval.
- 🧠 **RAG-based Question Answering** — Retrieve relevant knowledge and use it as context to generate more accurate answers.
- 🔐 **User Authentication** — Secure access to conversations and enterprise knowledge.
- 💾 **Chat History** — Persistent conversation storage using SQLite and Drizzle ORM.
- 📎 **File Uploads** — Upload documents to build and expand your knowledge base.
- ✨ **Markdown Rendering** — Rich Markdown rendering with code highlighting.
- 🌐 **Modern Interface** — Responsive design with light and dark modes, collapsible sidebar, keyboard shortcuts, and command palette.

## Tech Stack

| Technology | Purpose |
|---|---|
| Nuxt 4 | Full-stack application framework |
| Vue 3 | Frontend framework |
| AI SDK | AI model integration and streaming |
| Qdrant | Vector database and semantic search |
| Drizzle ORM | Database ORM |
| SQLite | Chat history and application data |
| Bootstrap / UI Components | User interface |
| RAG | Enterprise knowledge retrieval and generation |

## Architecture

AISOGA combines AI conversations, vector search, and enterprise document retrieval into one intelligent assistant.

```text
                 User
                   |
                   v
             AISOGA Chat UI
                   |
                   v
                AI SDK
                   |
          +--------+--------+
          |                 |
          v                 v
      LLM Provider      Knowledge Retrieval
          |                 |
          |                 v
          |              Qdrant
          |                 |
          |                 v
          |          Relevant Documents
          |                 |
          +--------+--------+
                   |
                   v
             AI Response
                   |
                   v
                 User
```

### Knowledge Base Workflow

1. Upload enterprise documents.
2. Extract and process document content.
3. Split documents into smaller text chunks.
4. Generate vector embeddings.
5. Store vectors and metadata in Qdrant.
6. Retrieve relevant content when users ask questions.
7. Pass retrieved context to the LLM to generate answers.

## Quick Start

Clone the repository:

```bash
git clone https://github.com/yc970127/chat.git

cd chat
```

Install dependencies:

```bash
pnpm install
```

Configure environment variables:

Create a `.env` file in the project root.

```env
AI_GATEWAY_API_KEY=your-ai-gateway-api-key
```

Configure your database and other services according to your deployment environment.

Run database migrations:

```bash
pnpm db:migrate
```

Start the development server:

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

## AI Integration

AISOGA uses the Vercel AI SDK to provide a unified interface for integrating different large language models.

Supported integrations depend on the configured AI provider and model adapter.

You can connect AI services such as:

- OpenAI
- Anthropic
- Google Gemini
- DeepSeek
- Other OpenAI-compatible APIs

## Enterprise Knowledge Base

AISOGA uses Qdrant as its vector database to support semantic document retrieval.

The knowledge base is designed for:

- Company profiles and business information
- Product documentation and specifications
- Technical manuals and operating instructions
- Equipment maintenance and troubleshooting
- Sales and customer service knowledge
- Internal procedures and company documentation

### Vector Database

Qdrant provides vector storage and similarity search for enterprise knowledge retrieval.

Key capabilities include:

- Vector embedding storage
- Semantic similarity search
- Metadata filtering
- Document-level organization
- Context retrieval for RAG applications

## Deployment

AISOGA can be deployed on your own server or cloud infrastructure.

Before production deployment, configure:

- AI provider API credentials
- Database connection
- Qdrant connection
- File storage
- Authentication and session security

Build the application:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

For more information, refer to the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## Project Goals

AISOGA aims to provide a flexible and extensible foundation for building enterprise AI assistants.

Future development focuses on:

- Advanced RAG retrieval strategies
- Multi-knowledge-base management
- Document parsing and processing
- Hybrid search and reranking
- Permission-based knowledge access
- Multi-model AI integration
- Enterprise knowledge management

## License

See the repository for license information.

---

**AISOGA — Connecting Enterprise Knowledge with Artificial Intelligence.**