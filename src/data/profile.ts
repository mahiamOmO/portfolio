// Sob info Mahia-r CV theke. Kichu change korte hole shudhu ei file edit korlei hobe.

export const profile = {
  name: 'Mahia Akter Momo',
  shortName: 'Mahia',
  role: 'Machine Learning Engineer',
  tagline: 'AI / ML · Computer Vision · AI Data Annotation',
  location: 'Uttara, Dhaka, Bangladesh',
  email: 'mahiamomo12@gmail.com',
  phone: '+8801850127053',
  website: 'https://mahiamomo-portfolio.vercel.app',
  github: 'https://github.com/mahiamOmO',
  linkedin: 'https://linkedin.com/in/mahiamomo12/',
  summary:
    'Computer Science and Engineering graduate with hands-on experience in Artificial Intelligence, Machine Learning, Computer Vision, and AI Data Annotation. Experienced in data annotation, dataset preparation, quality assurance, model evaluation, and data-centric improvement for AI/ML projects.',
  interest:
    'Interested in building and improving reliable machine learning systems through high-quality data and practical AI solutions.',
  highlights: [
    'Python, PyTorch, TensorFlow, NumPy, Pandas, Scikit-learn, OpenCV, Hugging Face',
    'Dataset preparation, annotation QA, model evaluation',
    'Hackathon finalist: MIST Inventious 4.1, Technovation25 (Top 10)'
  ]
}

export const education = [
  {
    school: 'University of Asia Pacific',
    degree: 'B.Sc in Computer Science and Engineering',
    period: '07/2022 – 07/2026'
  }
]

export const experience = [
  {
    company: 'ELITE Research Lab LLC',
    title: 'Student Researcher',
    period: 'Sept 2026 – Present',
    location: 'Queens, New York, USA',
    points: [
      'Conducting research in Computer Vision, NLP, Deep Learning, LLMs, and Generative AI.',
      'Performing literature reviews and identifying research gaps and potential research directions.',
      'Working on dataset preparation, model development, training, fine-tuning, and evaluation.',
      'Conducting experiments and analyzing results to support research projects and publications.'
    ]
  },
  {
    company: 'Agency Handy',
    title: 'Intern, AI Data Annotation & Quality',
    period: 'Dec 2025 – Mar 2026',
    location: 'Uttara, Dhaka, Bangladesh',
    points: [
      'Supporting AI and Machine Learning projects by accurately annotating and reviewing data.',
      'Ensuring high-quality labeled datasets for model training and improvement.',
      'Maintaining accuracy, consistency, and quality across annotated datasets according to project guidelines.',
      'Preparing and validating annotated datasets to support reliable AI/ML model development and evaluation.'
    ]
  }
]

export const competitions = [
  {
    name: 'Solvio AI Hackathon',
    host: 'Sheba Platform Ltd',
    result: 'Top 394 out of 3,259+ teams',
    date: '11/2025'
  },
  {
    name: 'Technovation25 Hackathon',
    host: 'Josephite IT Club',
    result: 'Top 10 in the Final Round',
    date: '09/2025'
  },
  {
    name: 'INNOVATEX 2025 Hackathon',
    host: 'University of Asia Pacific',
    result: 'Top 20 in the Final Round',
    date: '05/2025'
  },
  {
    name: 'IDEA Season 4.0',
    host: 'Entrepreneurship and Career Development Club of UAP (ECDC)',
    result: 'Participant',
    date: '04/2025'
  },
  {
    name: 'MIST Hackathon – Inventious 4.1',
    host: 'MIST',
    result: 'Finalist round team',
    date: '03/2025'
  },
  {
    name: 'UAP Intra University Collaborative Programming Contest 1.0',
    host: 'University of Asia Pacific',
    result: 'Top 40 out of 70+ teams',
    date: '01/2024'
  }
]

export const skills = [
  {
    group: 'Programming & Data',
    items: ['Python', 'MySQL', 'NumPy', 'Pandas', 'Data Cleaning', 'Data Preprocessing', 'JSON/CSV']
  },
  {
    group: 'Machine Learning',
    items: ['Scikit-learn', 'XGBoost', 'PyTorch', 'TensorFlow', 'Machine Learning', 'Deep Learning', 'Model Evaluation']
  },
  {
    group: 'Computer Vision & AI',
    items: ['Computer Vision', 'OpenCV', 'Object Detection', 'Image Classification', 'Image Processing']
  },
  {
    group: 'Generative AI & LLM',
    items: ['Hugging Face', 'OpenAI API', 'LangChain', 'RAG', 'Prompt Engineering']
  },
  {
    group: 'AI Data Annotation',
    items: [
      'Data Annotation',
      'Image & Video Annotation',
      'Bounding Box & Polygon Annotation',
      'Dataset Preparation',
      'Data Validation',
      'QA'
    ]
  },
  {
    group: 'Annotation Tools',
    items: ['SuperAnnotate', 'Supervisely', 'Superb AI', 'LabelImg', 'Label Studio', 'CVAT']
  },
  {
    group: 'Backend & Deployment',
    items: ['FastAPI', 'Flask', 'REST API', 'Jupyter Notebook']
  }
]

export const projects = [
  {
    slug: 'failure-risk-prediction',
    title: 'Failure Risk Prediction',
    category: 'TPS ML Web App',
    description:
      'A web application that predicts product failure risk using the TPS dataset and an XGBoost model. Built with Flask, it provides a user-friendly interface to input product parameters and get real-time risk predictions.',
    stack: ['Python', 'Flask', 'Flask-CORS', 'XGBoost', 'Scikit-learn', 'Joblib', 'Pandas', 'NumPy', 'HTML', 'JavaScript', 'CSS'],
    link: 'https://github.com/mahiamOmO'
  },
  {
    slug: 'daily-task-prioritization-agent',
    title: 'Daily Task Prioritization Agent',
    category: 'AI Agent',
    description:
      'An intelligent full-stack task management application that uses AI to prioritize and manage daily tasks. It features a modern Next.js frontend and a scalable FastAPI backend, offering smooth task handling and responsive design.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Lucide Icons', 'FastAPI', 'Python', 'Uvicorn', 'Pydantic'],
    link: 'https://github.com/mahiamOmO'
  },
  {
    slug: 'books-vibes',
    title: 'Books Vibes',
    category: 'Full Stack',
    description:
      'A Django-based online bookstore where users can browse books, add them to their cart, and place orders seamlessly.',
    stack: ['Python', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://github.com/mahiamOmO'
  },
  {
    slug: 'uap-alumni-connect',
    title: 'UAP Alumni Connect',
    category: 'Full Stack',
    description:
      'An online platform connecting UAP alumni, students, and faculty through profile browsing, networking, and community engagement.',
    stack: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Firebase Auth', 'Supabase', 'PostgreSQL', 'Node.js', 'Express.js'],
    link: 'https://github.com/mahiamOmO'
  }
]
