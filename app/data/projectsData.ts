import { Bot, Search, ShieldCheck, Database } from "lucide-react";

export const projectsData = [
  {
    slug: "intelligent-fleet-dispatcher",
    title: "Intelligent Fleet Dispatcher",
    tagline: "Real-time Incident Response System",
    icon: Bot,
    gradient: "from-blue-500/20 to-cyan-500/20",
    textGradient: "from-blue-400 to-cyan-400",
    // UPDATED: Gemini 2.5 Pro
    stack: ["n8n (Docker)", "Gemini 2.5 Pro", "Jira API", "Slack Bot", "Tailwind CSS"],
    summary: "A completely autonomous dispatch system. It intercepts unstructured driver reports, uses Gemini 2.5 Pro to analyze severity, and instantly routes tickets to Jira while alerting Slack channels—reducing response time by 98%.",
    problem: "Logistics operations often suffer from a disconnect between drivers on the road and maintenance teams. Breakdowns were reported via messy phone calls or WhatsApp, leading to critical safety delays, unstructured data that mechanics couldn't prioritize, and siloed communication between Jira and Slack.",
    solution: "I engineered a Full-Stack Intelligent Dispatch System that automates the entire incident lifecycle in under 2 seconds. Instead of just moving data, I integrated Agentic AI to 'read' and understand the driver's complaints, categorize them by severity (e.g., Brake Failure vs. Noise), and dispatch them instantly.",
    features: [
      "Custom Mobile Portal for instant driver reporting.",
      "AI Sentiment & Severity Analysis using Gemini 2.5 Pro.",
      "Automated Jira Ticketing with mapped priority fields.",
      "Real-time Slack Alerts with Deep Links to tickets."
    ]
  },
  {
    slug: "autonomous-lead-qualifier",
    title: "Autonomous AI Lead Qualifier",
    tagline: "The Virtual SDR Agent",
    icon: Search,
    gradient: "from-violet-500/20 to-purple-500/20",
    textGradient: "from-violet-400 to-purple-400",
    stack: ["n8n", "SerpAPI", "Gemini ReAct", "Google Sheets", "React Dashboard"],
    summary: "An intelligent agent that acts as a Virtual SDR. It bypasses LLM knowledge cutoffs by orchestrating live web searches to find up-to-date company info, verifying data integrity, and enriching CRM records without human intervention.",
    problem: "Sales Reps were wasting 40% of their week on 'Manual Research'—Googling companies, switching tabs, and copy-pasting data. This context switching killed productivity, and human error led to messy, subjective data in the CRM.",
    solution: "I built a full-stack, autonomous AI agent that acts as a virtual researcher. It takes a company name, conducts live web research using SerpAPI, reasons through the results to determine industry fit, and logs structured, clean JSON data directly into Google Sheets.",
    features: [
      "Live Web Browsing via SerpAPI (Bypassing LLM cutoffs).",
      "Intelligent Industry Classification using Gemini Reasoning.",
      "Automated Cleaning & JSON Formatting.",
      "Dark-mode React Dashboard for easy user interaction."
    ]
  },
  {
    slug: "email-assistant-hitl",
    title: "AI Powered Email Assistant",
    tagline: "Human-in-the-Loop Architecture",
    icon: ShieldCheck,
    gradient: "from-emerald-500/20 to-green-500/20",
    textGradient: "from-emerald-400 to-green-400",
    stack: ["n8n Cloud", "Llama 3 (Groq)", "Gmail OAuth2", "Custom Dashboard"],
    summary: "Solving the 'AI Trust' problem. This workflow connects Gmail to Llama 3 to draft high-quality contextual replies in milliseconds. However, it uses a 'Draft-First' architecture, requiring a single human click to approve sending, ensuring 100% safety.",
    problem: "Managing an inbox requires constant context switching, destroying focus. Traditional auto-responders are too 'dumb' to handle context, but fully autonomous AI tools are too 'scary'—users don't trust an AI to send emails without supervision.",
    solution: "We engineered a secure 'Human-in-the-Loop' agent. It autonomously monitors the inbox, 'thinks' about the content using Llama 3 for speed, and prepares a draft. It then presents this draft on a custom 'Projector Beast' UI, waiting for a human to review and click 'Send'.",
    features: [
      "Zero-Latency drafting with Groq (Llama 3).",
      "Secure Gmail Integration via OAuth2.",
      "Custom High-Contrast 'Command Center' UI.",
      "Thread-aware replies (Maintains conversation context)."
    ]
  },
  {
    slug: "cisnr-rag-agent",
    title: "CISNR Voice-Activated RAG Agent",
    tagline: "Institutional Knowledge Engine",
    icon: Database,
    gradient: "from-orange-500/20 to-red-500/20",
    textGradient: "from-orange-400 to-red-400",
    stack: ["n8n", "Pinecone", "ElevenLabs", "Gemini 2.5 Pro", "Google Drive API"],
    summary: "A voice-enabled RAG (Retrieval-Augmented Generation) system built for CISNR. It monitors a Google Drive for new PDF research, embeds them into a Vector Database, and allows users to query institutional knowledge via a natural voice interface.",
    problem: "Institutional knowledge at CISNR was trapped in static PDF reports and legacy documents stored in Google Drive. Researchers and staff struggled to find specific information quickly, leading to wasted time and underutilized data assets.",
    solution: "I created an 'Always-On' ingestion engine using n8n. The system watches Google Drive for new files, automatically chunks the text, creates vector embeddings, and stores them in Pinecone. I then built a Voice Agent using ElevenLabs that can query this database, allowing users to 'talk' to the documents.",
    features: [
      "Automated PDF Ingestion & Chunking Pipeline.",
      "Vector Storage in Pinecone for Semantic Search.",
      "Voice-to-Voice Interface using ElevenLabs.",
      "High-speed retrieval using Gemini 2.5 Pro."
    ]
  }
];