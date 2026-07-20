import { Project } from '../types/project';

export const projectData: Project[] = [
  {
    slug: 'smart-catalog',

    title: 'Smart Catalog',

    executiveSummary:
      'A retail operations system that centralizes inventory enquiries and replaces fragmented WhatsApp-based sales workflows.',

    industry: 'Retail',

    category: 'Operational Systems',

    systemType: 'Retail Operations System',

    status: 'Launched',

    engagementType: 'Studio Experiment',

    featured: true,

    published: true,

    priority: 1,

    year: 2026,

    coverImage: '/images/smart-catalog.png',

    stack: [
      'React',
      'Tailwind CSS',
      'Supabase'
    ],

    focus: [
      'Automation',
      'Inventory',
      'Operations'
    ],

    problem:
      'Local retailers managed product enquiries across WhatsApp, phone calls, and direct messages. Staff repeatedly switched between conversations and inventory records to verify stock before responding, creating unnecessary operational friction.',

    whyFailed:
      'The enquiry process depended on memory, informal communication, and disconnected records. As enquiry volume increased, inconsistent information and delayed responses became part of the daily workflow.',

    approach:
      'Rather than digitizing WhatsApp conversations, I redesigned the enquiry workflow around a single operational source of truth that both staff and customers could rely on.',

    solution:
      'Smart Catalog centralizes inventory into a searchable interface where customers can browse products and submit structured enquiries while staff manage product information from one location.',

    outcome:
      'Creates a standardized retail workflow where inventory information remains centralized, enquiries become structured, and day-to-day operations require significantly less manual coordination.',

    impact: [
      {
        label: 'Workflow',
        value: 'Centralized'
      },
      {
        label: 'Inventory',
        value: 'Single Source of Truth'
      },
      {
        label: 'Operations',
        value: 'Standardized'
      }
    ],

    features: [
      {
        title: 'Centralized Inventory',
        description:
          'Consolidates product information into a searchable operational database.'
      },
      {
        title: 'Structured Enquiries',
        description:
          'Standardizes customer requests before they reach the business.'
      },
      {
        title: 'Stock Validation',
        description:
          'Supports accurate inventory verification during customer enquiries.'
      },
      {
        title: 'Operator Dashboard',
        description:
          'Provides a responsive interface for managing products and enquiries.'
      }
    ]
  },
  {
  slug: 'mindops',
  title: 'MindOps',
  executiveSummary:
    'A knowledge operating system that transforms scattered learning resources into an organized, searchable workspace.',

  industry: 'Operations',
  category: 'Knowledge Systems',
  systemType: 'Knowledge Operating System',

  status: 'Building',
  engagementType: 'Internal Product',

  featured: true,
  published: true,
  priority: 2,
  year: 2026,

  coverImage: '/images/mindops.png',

  stack: [
    'React',
    'TypeScript',
    'Supabase'
  ],

  focus: [
    'Knowledge Management',
    'Operations',
    'AI'
  ],

  problem:
    'As learning resources accumulate, knowledge becomes fragmented across documentation, bookmarks, videos, notes, and conversations. Valuable insights are captured but remain difficult to retrieve when they are needed most.',

  whyFailed:
    'Traditional note-taking applications prioritize information capture but provide little support for connecting ideas, surfacing context, or turning knowledge into repeatable operational workflows.',

  approach:
    'Instead of designing another note application, I approached the problem as an operational architecture challenge. The system is organized around workspaces, relationships between information, and fast retrieval rather than isolated documents.',

  solution:
    'MindOps provides a centralized knowledge operating system where learning paths, AI-assisted synthesis, documentation, and project resources exist inside a unified environment built for long-term knowledge management.',

  outcome:
    'Creates a structured environment where knowledge can be captured, organized, connected, and reused more effectively across ongoing projects and continuous learning.',

  impact: [
    {
      label: 'Knowledge',
      value: 'Centralized'
    },
    {
      label: 'Retrieval',
      value: 'Structured'
    },
    {
      label: 'Learning',
      value: 'Operationalized'
    }
  ],

  features: [
    {
      title: 'Operational Workspaces',
      description:
        'Dedicated environments for projects, research, and ongoing learning.'
    },
    {
      title: 'Knowledge Vault',
      description:
        'A centralized repository for notes, documents, references, and resources.'
    },
    {
      title: 'AI-Assisted Synthesis',
      description:
        'Connect related ideas and accelerate understanding through AI-supported analysis.'
    },
    {
      title: 'Learning Paths',
      description:
        'Organize structured progression across topics instead of disconnected resources.'
    },
    {
      title: 'Progress Tracking',
      description:
        'Monitor growth, documentation, and learning milestones over time.'
    }
  ]
},
{
  slug: 'carousel-architect',
  title: 'Carousel Architect',

  executiveSummary:
    'An AI-assisted content production system that transforms raw ideas into structured, publication-ready educational carousels.',

  industry: 'Marketing & Content',
  category: 'Content Operations',
  systemType: 'Content Production System',

  status: 'Launched',
  engagementType: 'Internal Product',

  featured: true,
  published: true,
  priority: 3,
  year: 2026,

  coverImage: '/images/carousel-architect-ten.vercel.app_.png',

  links: {
    live: 'https://carousel-architect-ten.vercel.app/',
  },

  stack: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Gemini API'
  ],

  focus: [
    'AI',
    'Content Systems',
    'Editorial Workflow'
  ],

  problem:
    'Producing educational carousel content required moving between multiple disconnected tools for research, writing, editing, visual planning, and formatting. Every transition introduced context switching that slowed production and reduced consistency.',

  whyFailed:
    'Conventional content workflows separate writing from design. As ideas move across applications, formatting becomes inconsistent, editorial structure breaks down, and production time increases with every revision.',

  approach:
    'Instead of optimizing individual stages of production, I redesigned the entire content lifecycle as one continuous operational workflow. The objective was to eliminate unnecessary tool switching while preserving editorial quality from idea to publication.',

  solution:
    'Carousel Architect is an AI-assisted production environment that converts a single topic into a complete carousel draft. It combines content generation, editorial sequencing, slide architecture, and export-ready formatting inside one interface.',

  outcome:
    'The system reduces production friction by consolidating multiple creative tasks into one workflow, allowing ideas to move from concept to publication-ready structure with greater speed and consistency.',

  impact: [
    {
      label: 'Workflow',
      value: 'Unified'
    },
    {
      label: 'Production',
      value: 'Streamlined'
    },
    {
      label: 'Editorial',
      value: 'Standardized'
    }
  ],

  features: [
    {
      title: 'AI Content Generation',
      description:
        'Generate structured educational content from a single topic or prompt.'
    },
    {
      title: 'Editorial Slide Architecture',
      description:
        'Automatically organize information into a logical multi-slide narrative.'
    },
    {
      title: 'Brand Consistency',
      description:
        'Maintain repeatable typography, hierarchy, and formatting across every carousel.'
    },
    {
      title: 'Production Workspace',
      description:
        'Keep research, writing, structure, and formatting inside one operational environment.'
    },
    {
      title: 'Export-Ready Output',
      description:
        'Produce publication-ready content without rebuilding layouts manually.'
    }
  ]
},
{
  slug: 'omnipost',
  title: 'OmniPost',

  executiveSummary:
    'A unified content distribution platform that centralizes publishing workflows across multiple digital channels.',

  industry: 'Marketing & Content',
  category: 'Automation',
  systemType: 'Content Distribution Platform',

  status: 'Building',
  engagementType: 'Internal Product',

  featured: false,
  published: true,
  priority: 4,
  year: 2026,

  coverImage: '/images/omnipost.png',

  stack: [
    'React',
    'TypeScript',
    'Node.js'
  ],

  focus: [
    'Automation',
    'Content Operations',
    'Distribution'
  ],

  problem:
    'Publishing content across multiple platforms required repeating the same tasks in separate interfaces. Scheduling, publishing, and tracking each channel independently created unnecessary operational overhead and increased the likelihood of inconsistencies.',

  whyFailed:
    'Traditional publishing workflows treat every platform as an isolated destination. This fragmented approach duplicates effort, introduces synchronization issues, and makes it difficult to maintain a consistent publishing cadence across channels.',

  approach:
    'Rather than optimizing individual publishing tasks, I redesigned distribution as a single orchestration layer. One publishing workflow coordinates every connected channel while maintaining consistency throughout the process.',

  solution:
    'OmniPost is a centralized publishing platform that manages scheduling, distribution, and content synchronization from one operational dashboard. It replaces repetitive manual publishing with a standardized distribution workflow.',

  outcome:
    'Creates a more reliable publishing process by reducing repetitive administrative work and establishing a consistent operational framework for managing content across multiple platforms.',

  impact: [
    {
      label: 'Distribution',
      value: 'Centralized'
    },
    {
      label: 'Workflow',
      value: 'Standardized'
    },
    {
      label: 'Operations',
      value: 'Simplified'
    }
  ],

  features: [
    {
      title: 'Unified Publishing Dashboard',
      description:
        'Manage content distribution across multiple channels from a single interface.'
    },
    {
      title: 'Cross-Platform Synchronization',
      description:
        'Maintain consistent publishing states across connected destinations.'
    },
    {
      title: 'Scheduling Engine',
      description:
        'Coordinate publishing timelines through one standardized workflow.'
    },
    {
      title: 'Content Queue',
      description:
        'Organize upcoming publications using a centralized production pipeline.'
    },
    {
      title: 'Operational Analytics',
      description:
        'Monitor publishing activity and workflow performance from one dashboard.'
    }
  ]
},
];