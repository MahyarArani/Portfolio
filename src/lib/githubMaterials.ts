export type RepoMaterial = {
  name: string;
  href?: string;
  visibility: 'Public' | 'Private';
  category: string;
  summary: string;
  stack: string[];
};

export const repoMaterials: RepoMaterial[] = [
  {
    name: 'Document Intelligence Reporting Workflow',
    href: 'https://github.com/MahyarArani/DocumentIntelligenceSWB',
    visibility: 'Public',
    category: 'AI document processing',
    summary:
      'Repository material supporting the Azure AI Document Intelligence and Power Platform case study, focused on scanned-report extraction, validation, and reporting workflows.',
    stack: ['Azure AI Document Intelligence', 'Python', 'Power BI', 'Power Apps'],
  },
  {
    name: 'Large-Scale Fraud Classification',
    href: 'https://github.com/MahyarArani/IEEE_Fraud_Detection',
    visibility: 'Public',
    category: 'Machine learning',
    summary:
      'Fraud-detection modeling work around tabular transaction data, feature preparation, and classification-oriented experimentation.',
    stack: ['Python', 'Classification', 'Feature Engineering'],
  },
  {
    name: 'House Price Regression Study',
    href: 'https://github.com/MahyarArani/House_Prices',
    visibility: 'Public',
    category: 'Regression modeling',
    summary:
      'Applied regression project for house-price prediction, useful as a compact example of exploratory analysis, modeling, and error evaluation.',
    stack: ['Python', 'Regression', 'EDA'],
  },
  {
    name: 'Diabetes Classification Study',
    href: 'https://github.com/MahyarArani/DiabetesClassification',
    visibility: 'Public',
    category: 'Classification modeling',
    summary:
      'Classification exercise focused on medical-risk style tabular data, model comparison, and practical prediction workflow design.',
    stack: ['Python', 'Classification', 'Model Evaluation'],
  },
  {
    name: 'Data Ingestion Pipeline Exercise',
    href: 'https://github.com/MahyarArani/Data-Ingestion',
    visibility: 'Public',
    category: 'Data engineering',
    summary:
      'Small data-ingestion project that complements the portfolio themes around repeatable data movement, automation, and pipeline setup.',
    stack: ['Python', 'Data Pipelines', 'Automation'],
  },
  {
    name: 'AED Budget and Revenue Dashboard',
    visibility: 'Private',
    category: 'Business intelligence',
    summary:
      'Private Power BI budget-dashboard material. The portfolio references the capability while keeping internal files and repository details unpublished.',
    stack: ['Power BI', 'Budget Reporting', 'Data Modeling'],
  },
  {
    name: 'Stock Time-Series Orchestrator',
    visibility: 'Private',
    category: 'AI-assisted analytics',
    summary:
      'A local multi-agent stock research platform where LLM orchestration is separated from deterministic diagnostics, forecasting, and backtesting.',
    stack: ['Python', 'Gemini', 'Time Series', 'Streamlit'],
  },
  {
    name: 'Research Orchestrator',
    visibility: 'Private',
    category: 'Research automation',
    summary:
      'A CLI-first multi-agent research platform for literature discovery, proposal generation, peer review, and dissertation-aware planning.',
    stack: ['Python', 'Multi-Agent Systems', 'Research Workflows'],
  },
];

export const currentResearchMaterials = [
  {
    title: 'Financial agent replay benchmark',
    summary:
      'Leakage-aware counterfactual replay research for testing how financial AI agents behave when future information is removed.',
  },
  {
    title: 'Mortgage credit-risk forecasting',
    summary:
      'Forecasting work focused on credit-risk signals, portfolio behavior, and reproducible modeling workflows for financial risk analysis.',
  },
];
