import { techLogos } from '../data/techLogos'

const logoNames = {
  Python: 'python',
  JavaScript: 'javascript',
  'Scikit-learn': 'scikit-learn',
  Pandas: 'pandas',
  NumPy: 'numpy',
  PyTorch: 'pytorch',
  'Hugging Face Transformers': 'huggingface',
  LangChain: 'langchain',
  LangGraph: 'langgraph',
  FastAPI: 'fastapi',
  SQLAlchemy: 'sqlalchemy',
  PostgreSQL: 'postgresql',
  MongoDB: 'mongodb',
  MLflow: 'mlflow',
  Docker: 'docker',
  'GitHub Actions': 'githubactions',
  Vercel: 'vercel',
  React: 'react',
}

export default function TechLogo({ name, size = 16 }) {
  const path = techLogos[logoNames[name]]

  if (!path) return null

  return (
    <svg
      className="tech-logo"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  )
}
