export const projects = [
  {
    id: 'revuai',
    name: 'RevuAI',
    subtitle: 'Play Store Reviews Intelligence',
    description:
      'An ML-powered application that analyzes Google Play Store reviews to extract sentiment insights and identify user feedback patterns.',
    problem:
      'Large review volumes make it hard to see which sentiments and feedback themes actually matter.',
    contributions: [
      'Google Play Store review collection',
      'Sentiment classification with CardiffNLP RoBERTa',
      'SVM-based classification and topic discovery',
      'FastAPI backend and Chrome extension interface',
      'MLflow experiment tracking with Docker and CI/CD',
    ],
    stack: ['Python', 'RoBERTa', 'SVM', 'FastAPI', 'MLflow', 'Docker'],
    github: 'https://github.com/aniq63/RevuAI',
    demo: null,
    visual: 'reviews',
    featured: true,
  },
  {
    id: 'inteldocs-ai',
    name: 'IntelDocs AI',
    subtitle: 'Document intelligence with RAG',
    description:
      'An AI-powered document intelligence application that uses Retrieval-Augmented Generation to help teams interact with their documents and extract useful information.',
    problem:
      'Teams need grounded answers from their own documents without manually searching every file.',
    contributions: [
      'Document-based question answering',
      'RAG pipeline with pgvector similarity search',
      'Workspace-oriented architecture',
      'Backend API development with FastAPI and SQLAlchemy',
    ],
    stack: ['Python', 'FastAPI', 'LangChain', 'PostgreSQL', 'pgvector', 'Groq'],
    github: 'https://github.com/aniq63/IntelDocs-AI',
    demo: 'https://intel-docs-ai.vercel.app',
    visual: 'documents',
    featured: true,
  },
  {
    id: 'pulsepredict',
    name: 'PulsePredict',
    subtitle: 'Energy demand forecasting',
    description:
      'An energy demand forecasting project developed during my Machine Learning Engineering internship at Pulse.',
    problem:
      'Energy demand shifts across markets, so forecasting needs careful evaluation and accessible inference.',
    contributions: [
      'Forecasting workflows across PJM, MISO, ISNE, NYIS, and SWPP datasets',
      'Held-out performance evaluation',
      'FastAPI inference endpoint',
      'Monitoring regressions after retraining',
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'FastAPI', 'Time-series'],
    github: null,
    demo: null,
    visual: 'forecast',
    featured: false,
  },
  {
    id: 'epl-nexus',
    name: 'EPL Nexus',
    subtitle: 'Football analytics and prediction',
    description:
      'A machine learning football analytics and match prediction project focused on exploring football data and predictive modeling.',
    problem:
      'Match data needs repeatable preprocessing and tracked experiments before it can support prediction.',
    contributions: [
      'Football data processing and feature engineering',
      'Predictive modeling with AdaBoost',
      'Experiment tracking with MLflow',
      'Backend integration with FastAPI and MongoDB',
    ],
    stack: ['Python', 'Scikit-learn', 'AdaBoost', 'DVC', 'MLflow', 'MongoDB'],
    github: 'https://github.com/aniq63/Premier-League-Nexsus',
    demo: null,
    visual: 'analytics',
    featured: false,
  },
  {
    id: 'mavro',
    name: 'Mavro',
    subtitle: 'AI tutor with visual explanations',
    description:
      'An AI-powered educational assistant designed to explain technical and non-technical concepts through conversational interaction and visual whiteboard explanations.',
    problem:
      'Learners often need a conversation and a visual explanation, not another block of text.',
    contributions: [
      'Conversational tutoring powered by an LLM',
      'Interactive whiteboard explanations',
      'Voice interaction with text-to-speech',
      'React interface connected to a Python backend',
    ],
    stack: ['Python', 'React', 'Groq', 'LLM Integration', 'Text-to-Speech'],
    github: 'https://github.com/aniq63/Mavro',
    demo: null,
    visual: 'tutor',
    featured: false,
  },
]
