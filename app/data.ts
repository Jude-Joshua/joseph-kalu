export type Part = { label?: string; text: string }

export type MetricItem = { value: string; label: string }

export type CaseSection = {
  title: string
  type?: 'default' | 'pullQuote' | 'metricCallout' | 'fullBleed' | 'roleCard'
  desc?: string
  parts?: Part[]
  close?: string
  images?: string[]
  bullets?: string[]
  // pullQuote fields
  quote?: string
  attribution?: string
  // metricCallout fields
  metrics?: MetricItem[]
  // roleCard fields
  role?: {
    what: string
    team: string
    timeline: string
    tools?: string
  }
}

export type CaseStudy = {
  intro: string[]
  link?: { title: string; href: string }
  sections: CaseSection[]
}

export type Project = {
  id: string
  slug: string
  category: string
  year: string
  name: string
  // Homepage
  homepageMetric: string
  metricValue: string
  metricLabel: string
  decision: string
  tension: string
  videoSrc?: string
  // Case study (short)
  tensionLines: readonly string[]
  constraint: string
  leverage: {
    headline: readonly [string, string]
    body: string
  }
  result: {
    metric: string
    descriptor: string
    timeframe: string
    mechanism: string
  }
  nextTeaser: string | null
  // Case study (long-form, from live portfolio)
  caseStudy?: CaseStudy
  password?: string
}

export const projects: readonly Project[] = [
  {
    id: '01',
    slug: 'inktrail',
    category: 'AI · SaaS · Productivity',
    year: '2025',
    name: 'Inktrail',
    homepageMetric: '0 → 1 shipped in 4 months',
    metricValue: '0 → 1',
    metricLabel: 'shipped in 4 months',
    decision: 'One workspace. Docs, canvas, AI, and publishing — no more tab switching.',
    tension: 'AI workspaces were either powerful or usable. Never both.',
    tensionLines: [
      'Teams were switching between 5+ tools for docs, design, meetings, and publishing.',
      'Every tool switch broke context and killed momentum.',
      'AI features existed everywhere — but they generated chat messages, not real deliverables.',
    ],
    constraint:
      'Building a multi-surface workspace (docs, canvas, transcription, publishing) without creating a Frankenstein product.',
    leverage: {
      headline: [
        'One continuous surface.',
        'AI outputs that are real, editable files — not chat.',
      ],
      body: 'The tool disappears. The work stays.',
    },
    result: {
      metric: '0 → 1',
      descriptor: 'from concept to live product',
      timeframe: 'in 4 months.',
      mechanism:
        'Designed the AI document editor, visual canvas, meeting transcription, and one-click publishing — then collaborated with engineers to ship it on a single surface.',
    },
    nextTeaser: 'what infrastructure-level trust looks like in crypto.',
    caseStudy: {
      intro: [
        'Every knowledge worker I spoke to had the same problem: their work lived in five different tools. Docs in Notion. Designs in Canva. Meetings in Otter. Whiteboards in Miro. Publishing through WordPress. They didn\'t need another tool — they needed to stop switching between them.',
        'I designed Inktrail from zero — an AI-native workspace where documents, canvas, transcription, and publishing live on one continuous surface. AI doesn\'t chat at you — it generates real, editable files. I collaborated closely with engineers to bring it to life, and we shipped in 4 months.',
      ],
      link: { title: 'View the product', href: 'https://inktrail.ai/' },
      sections: [
        {
          title: 'My Role',
          type: 'roleCard' as const,
          role: {
            what: 'Founding Product Designer. I owned the entire design surface — from the information architecture and interaction patterns to the visual language, design system, and end-to-end prototyping. I worked directly with the founder and engineering team to bring a 0→1 product to life.',
            team: '1 designer, 1 founder, 3 engineers',
            timeline: '4 months (ongoing)',
            tools: 'Figma, Excalidraw, Linear, Vercel',
          },
        },
        {
          title: 'The Problem',
          desc: 'I started by mapping the daily workflow of product managers, startup founders, and content teams. The pattern was consistent across every interview:\n\n1. Draft in Google Docs or Notion\n2. Design visuals in Canva or Figma\n3. Brainstorm on Miro or FigJam\n4. Record meetings in Otter or Fireflies\n5. Publish via WordPress or custom CMS\n\nFive tools. Five logins. Five different mental models. Every switch cost 10–15 minutes of context recovery. And when AI entered the picture, it made things worse — ChatGPT generated text in a chat window that then had to be copy-pasted and reformatted elsewhere.',
          images: ['workflow-mapping.png'],
        },
        {
          title: 'The Insight',
          type: 'pullQuote' as const,
          quote: 'The problem wasn\'t that tools lacked features. It was that every tool switch destroyed context. The real cost of fragmentation isn\'t money — it\'s the 15 minutes you spend remembering where you were.',
        },
        {
          title: 'Research: Group Interviews',
          desc: 'I ran 12 group interview sessions across three segments — product managers, startup founders, and content teams. Each session focused on mapping their daily tool usage, identifying pain points around context-switching, and understanding how AI was (or wasn\'t) fitting into their workflows.\n\nThe patterns were remarkably consistent: every participant used 4+ tools daily, 83% were copy-pasting AI output into other apps, and 75% wanted one-click publishing but didn\'t have it.',
          images: ['interview-insights.png'],
        },
        {
          title: 'Competitive Landscape',
          desc: 'I mapped every major player against two axes: surface breadth (how many creation modes?) and AI depth (how useful is AI output?).',
          parts: [
            {
              label: 'Notion',
              text: 'Strong docs, but no canvas, no design, no transcription. AI generates text in-line but can\'t create visual artifacts.',
            },
            {
              label: 'Miro',
              text: 'Great canvas, but documents are an afterthought. No AI design. No publishing.',
            },
            {
              label: 'Canva',
              text: 'Design-first, but not a workspace. No docs, no collaboration depth, no transcription.',
            },
            {
              label: 'ChatGPT / Claude',
              text: 'Powerful AI, but output is trapped in chat. You generate, then copy-paste into the real tool. AI as a sidecar, not a surface.',
            },
          ],
          close: 'The gap was clear: nobody had built a single surface where AI outputs were native, editable files across docs, canvas, and audio — all publishable in one click.',
          images: ['competitive-audit.png'],
        },
        {
          title: 'The Architecture Decision',
          type: 'pullQuote' as const,
          quote: 'I chose to design one continuous surface with multiple modes — not multiple tools bolted together. The difference sounds semantic. It changes everything about navigation, state, and mental model.',
        },
        {
          title: 'Design Principles I Set',
          desc: 'Before touching any screen, I established four principles that governed every decision:',
          parts: [
            {
              label: 'AI outputs are real files',
              text: 'When AI generates a document, it\'s a real document — not a chat message. When it generates a design, it\'s editable vector elements on canvas. No copy-paste intermediary.',
            },
            {
              label: 'One surface, multiple modes',
              text: 'Docs, canvas, audio, and published pages all live in the same project space. Switching between them is a mode change, not an app change.',
            },
            {
              label: 'Progressive complexity',
              text: 'A new user should be productive in 30 seconds. Power features reveal themselves through use, not through onboarding wizards.',
            },
            {
              label: 'Publish is a button, not a process',
              text: 'Any document becomes a live webpage with one click. No CMS. No deploy pipeline. No waiting.',
            },
          ],
        },
        {
          title: 'What I Tried and Killed',
          desc: 'My first information architecture treated docs, canvas, and audio as separate "apps" with a sidebar switcher — basically tabs. It tested poorly because users kept asking "where did my document go?" when they switched to canvas mode.\n\nI killed the tab model and redesigned it as a project-centric workspace: everything lives inside a project, and you create different artifacts (doc, canvas, recording) within it. The mental model shifted from "which app am I in?" to "which project am I working on?" Context-switching anxiety disappeared in testing.',
          images: ['killed-ia.png'],
        },
        {
          title: 'Usability Testing',
          desc: 'I ran two rounds of usability testing with 8 participants — the first round on the killed tab-based IA, the second on the project-centric architecture that shipped.\n\nThe results were dramatic: task completion went from 40% to 100%, average task time dropped from 30.6 seconds to 7.6 seconds, and context-loss incidents dropped from 62% to zero. The project-centric model eliminated the "where am I?" anxiety entirely.',
          images: ['user-testing.png'],
        },
        {
          title: 'Information Architecture — Shipped',
          desc: 'The shipped IA centres everything around the project. Sidebar navigation gives access to projects, search, templates, and shared content. Inside each project, users create documents, canvases, recordings, and published pages as artifacts — not separate apps. The AI layer runs across all surfaces with a model chooser, inline commands, and context pulled from connected apps.',
          images: ['information-architecture.png'],
        },
        {
          title: 'Core User Flows',
          desc: 'I mapped four primary paths through the workspace — AI document creation, canvas diagramming, template quick-start, and meeting-to-document conversion. Each flow was designed to be completable in under 60 seconds with minimal navigation. The AI model chooser appears at decision points, not as a persistent distraction.',
          images: ['user-flows.png'],
        },
        {
          title: 'Home & Templates',
          desc: 'The home screen had to answer one question instantly: "What are we creating?" I designed it as a launchpad — an AI prompt bar at the top, creation mode switcher (Document, Canvas, Design) in the middle, and a template gallery below. The prompt bar accepts natural language and routes to the right surface automatically.\n\nThe template system was a key adoption driver. I designed 100+ AI-native templates across PRDs, pitch decks, strategy docs, go-to-market plans, and more — each one pre-wired with AI actions so users could generate a complete first draft in seconds.',
          images: ['template.png'],
        },
        {
          title: 'Project Workspace',
          desc: 'Everything in Inktrail lives inside a project. Documents, canvases, and recordings are artifacts within that project — not separate apps. The sidebar shows your project tree, and switching between artifacts is instant. No page reload, no context loss.\n\nI designed the workspace with an AI prompt bar that persists across every view. Describe what you want to create, and the AI drafts it directly into the right surface. The project becomes the unit of work, not the tool.',
          images: ['project-folder.png'],
        },
        {
          title: 'The AI Integration Challenge',
          desc: 'The hardest design problem wasn\'t the workspace structure — it was making AI feel native without feeling intrusive. I explored three models:',
          parts: [
            {
              label: 'Model 1: AI sidebar (killed)',
              text: 'A persistent chat panel next to the editor. Users ignored it — it felt like a separate tool bolted on. Exactly the problem we were solving.',
            },
            {
              label: 'Model 2: Inline AI commands (kept)',
              text: 'Type a slash command or highlight text and AI acts directly on the content. Output appears in-place as real, editable content. This felt magical — AI as a collaborator, not a chatbot.',
            },
            {
              label: 'Model 3: AI model chooser (kept)',
              text: 'Users pick Claude, GPT-4o, or Gemini per generation. No lock-in. The AI is the engine, not the brand. This became a key differentiator — power users loved the control.',
            },
          ],
          images: ['multi-model.png'],
        },
        {
          title: 'Document Editor — AI Drafting',
          desc: 'The document editor is where AI and manual creation merge seamlessly. Users can write manually with a full rich-text toolbar — formatting, tables, code blocks, callouts, embeds — or prompt AI to draft entire sections.\n\nWhat makes it different: AI doesn\'t generate text in a chat window. It writes directly into the document as real, editable content with proper formatting, headings, bullet points, and even inline charts. The AI thinks through steps visibly (thinking, working, writing to document) so users understand what\'s happening and can intervene at any point.',
          images: ['document-ai.png'],
        },
        {
          title: 'Document Editor — Manual Creation',
          desc: 'Not everything needs AI. The editor is a full-featured writing environment on its own — rich formatting, slash commands, drag-and-drop blocks, and real-time collaboration. I designed it so AI and manual creation are interchangeable at any point in the workflow. Start with AI, refine manually. Start manually, ask AI to expand a section. No mode switching required.',
          images: ['manual-document.png'],
        },
        {
          title: 'Visual Canvas',
          desc: 'The canvas surface handles diagrams, flowcharts, wireframes, mind maps, and data visualisation on an infinite zoomable surface. I designed the toolbar to surface quick actions — shapes, connectors, charts, and AI generation — without overwhelming the space.\n\nThe AI can generate charts (bar, radar, line) and diagrams from natural language prompts. Outputs are fully editable vector elements, not static images. I designed the interaction model for this; engineering built the rendering engine. This was the breakthrough that set Inktrail apart from tools like Canva where AI outputs are flat images.',
          images: ['canvas.png'],
        },
        {
          title: 'Third-Party Integrations',
          desc: 'I designed the integrations panel to connect external tools — Google Drive, Gmail, Google Calendar, Slack, GitHub, Jira — directly into the workspace. Connected apps feed context to the AI, so when a user asks "draft a status update," the AI can pull from their calendar, Slack threads, and Jira tickets automatically.\n\nThe integration flow is one-click OAuth per service. I kept the UI minimal: a modal with clear connect/disconnect states. No configuration pages, no setup wizards.',
          images: ['connectors.png'],
        },
        {
          title: 'Design System',
          desc: 'I built the design system in parallel with the product — not after. Every component was designed to work across all four surfaces.\n\nThe system used Geist as the UI font and Playfair Display for published content. Dark mode was built from day one (not retrofitted) because the canvas surface demanded it. Every component had three states: resting, AI-active (subtle pulse animation), and collaborative (showing live cursors).',
          images: ['design-system.png'],
        },
        {
          title: 'Pricing & Conversion Design',
          desc: 'I designed the pricing architecture to align with how users actually adopt tools:\n\nFree tier is genuinely useful — unlimited docs and canvas, 300 AI credits/month. No artificial walls. The upgrade trigger is volume (more AI credits, more transcription hours, more collaborators), not locked features. This was a deliberate choice against the "crippled free tier" pattern that erodes trust.',
          images: ['pricing.png'],
        },
        {
          title: 'Impact',
          type: 'metricCallout' as const,
          metrics: [
            { value: '0 → 1', label: 'From concept to live product in 4 months' },
            { value: '5 surfaces', label: 'Docs, canvas, transcription, publishing, collaboration — one workspace' },
            { value: '100+', label: 'Templates shipped at launch across PRDs, decks, SOPs, and more' },
            { value: '3 AI models', label: 'Claude, GPT-4o, Gemini — user chooses per generation' },
          ],
        },
        {
          title: 'Reflection',
          desc: 'The biggest lesson: in a multi-surface product, consistency of interaction patterns matters more than consistency of visual style. A canvas and a document look fundamentally different — but if selection, AI invocation, and collaboration feel the same, users never feel lost.\n\nWhat I\'d do differently: I\'d invest earlier in cross-surface linking. The ability to embed a canvas element inside a document (or vice versa) was deprioritised for launch, but it\'s the feature that will make the "one surface" promise feel complete.',
        },
      ],
    },
  },
  {
    id: '02',
    slug: 'pay-io',
    category: 'Crypto · Fintech · Web & Mobile',
    year: '2025',
    name: 'Pay.io',
    homepageMetric: '$100B+ market opportunity',
    metricValue: '$100B+',
    metricLabel: 'market opportunity',
    decision: 'Designed the infrastructure layer for crypto payments.',
    tension: 'Crypto wallets were built for traders, not businesses managing real money.',
    tensionLines: [
      'Businesses needed to move crypto like fiat — deposits, withdrawals, sweeps — at scale.',
      'Existing dashboards buried critical actions behind complexity.',
      'One wrong transaction could mean six figures lost.',
    ],
    constraint:
      'This was a financial product where accuracy, trust, and clarity were critical.',
    leverage: {
      headline: [
        'Built clarity into every transaction layer.',
        'Designed for operators, not speculators.',
      ],
      body: 'When the money is real, the interface has to be invisible.',
    },
    result: {
      metric: '$100B+',
      descriptor: 'iGaming market tapped',
      timeframe: 'with crypto as the fastest-growing vertical.',
      mechanism:
        'End-to-end UX redesign of core financial workflows — giving operators full visibility over hot wallets, sweep logic, and merchant settlements.',
    },
    nextTeaser: null,
    caseStudy: {
      intro: [
        'Pay.io is a multi-currency business payments platform. As the Product Designer, I worked with a team of Product Manager, Engineers, QA and Compliance to deliver an end-to-end UX redesign of core financial workflows.',
        '"This was a financial product where accuracy, trust, and clarity were critical."',
      ],
      link: { title: 'View the product', href: 'https://pay.io/' },
      sections: [
        {
          title: 'The Business Opportunity: Tapping into a Billion Dollar Market',
          desc: 'The global iGaming market sits around $100–103 billion in 2025–2026 and is heading toward $133–169 billion by 2029–2030. Crypto is the fastest-growing slice inside it.',
          parts: [
            {
              label: 'Crypto Gambling Revenue',
              text: 'Crypto gambling gross gaming revenue (GGR) hit roughly $81 billion in 2025, with Q1 2025 alone seeing $26 billion in crypto bets. Some forecasts put the crypto-specific gambling vertical above $150 billion by the end of 2025/early 2026.',
            },
            {
              label: 'Explosive Growth',
              text: 'Crypto iGaming grew at 38% CAGR from 2019–2024 and continues to outpace fiat-only operators.',
            },
            {
              label: 'Market Leaders',
              text: 'A single crypto-first operator (Stake.com) reported $4.7 billion GGR in 2024 — bigger than many Vegas casino giants.',
            },
          ],
          close: 'Crypto users already account for 20–30%+ of transactions on many platforms, and that share is rising fast because crypto players bet more, stay longer, and churn less.',
        },
        {
          title: 'Understanding the Problem',
          desc: 'Crypto payment is new and business operators could not clearly manage, track, or reconcile financial actions across deposits, withdrawals, and multi-currency balances — leading to transaction errors, delayed reconciliation, and eroding trust in the platform.',
          parts: [
            {
              label: 'Compliance Requirements (KYC/AML)',
              text: 'Mandatory identity verification flows for every business operator account. Anti-money laundering screening on all transactions above defined thresholds. Full audit trail requirements for regulatory reporting across jurisdictions.',
            },
            {
              label: 'Technical API Limitations',
              text: 'Real-time balance updates constrained by asynchronous blockchain confirmations. Multi-provider crypto payment routing introduced latency in transaction state syncing. Legacy reconciliation logic created discrepancies between displayed and actual balances.',
            },
            {
              label: 'Security Expectations',
              text: 'Operators expected visible confirmation of every fund movement with no silent failures. Strict access controls required for multi-user merchant console environments. PCI DSS compliance mandated specific data handling and display restrictions.',
            },
            {
              label: 'Timeline & Scope Pressure',
              text: '12-week delivery window to ship redesigned core transaction flows. Parallel workstreams with engineering on API v2 migration limited design iteration cycles. Phased rollout required backward compatibility with existing merchant integrations.',
            },
          ],
        },
        {
          title: 'What Are the Competition Doing?',
          desc: 'Providers focus on high-risk tolerance, fast settlements, broad coin support (especially stablecoins like USDT/USDC on TRON/Solana), low fees, non-custodial options, and compliance tools (AML/KYC where required). The market favors gateways that handle volatility hedging, instant payouts, and integration with casino platforms.',
          parts: [
            {
              label: 'Trends Driving Competition',
              text: 'Non-custodial + stablecoin/TRON/Solana focus (near-zero fees), instant fiat off-ramps. AML tools without blocking high-risk, and seamless casino integrations (e.g., one-click deposits).',
            },
            {
              label: 'Threats',
              text: 'Tightening regulations (MiCA EU, Curaçao updates) favor licensed players like CoinsPaid/BitPay. Volatility and chain congestion remain issues — top providers hedge/auto-convert.',
            },
            {
              label: 'Opportunity Zones',
              text: 'There\'s a window in non-custodial, stablecoin-optimized, or self-hosted models.',
            },
            {
              label: 'In-house Advantage',
              text: 'Hub88 — We have a network of traditional providers and suppliers to leverage and onboard into crypto.',
            },
          ],
          images: ['competitive.png'],
        },
        {
          title: 'Research: Insights from the Field',
          desc: "Core research finding: Fintech users don't want more features; they want fewer steps, clearer feedback, and absolute confidence in every financial action they take.",
          parts: [
            {
              label: 'Phase 1 — Research Methods',
              text: 'Conducted 6 semi-structured interviews with business operators and finance managers using Loop11.com. Focused on daily workflows: payments, transaction management, balance monitoring, and reporting. Identified recurring pain points around transaction visibility and multi-step actions.',
            },
            {
              label: 'Phase 2 — Key Insights',
              text: '"Execute, don\'t explore": users arrive with a specific task and want the shortest path to completion. 78% of sessions focused on just 4 core actions: check balance, send & receive payment, manage assets, review transactions. Users rarely navigated to secondary features unless prompted by a specific business need.',
            },
            {
              label: 'Phase 3 — Design Strategy',
              text: 'Precision-first UI: surface exact balances, clear transaction states, and unambiguous status labels. Task-oriented architecture: restructure navigation around the 3 core actions users perform daily. Immediate feedback loops: every action triggers a visible confirmation or status update.',
            },
            {
              label: 'Behavioral Analytics',
              text: 'Analyzed session recordings and heatmaps across core financial flows. Tracked task completion rates, drop-off points, and navigation patterns. Mapped feature usage frequency to identify underused vs. critical paths.',
            },
            {
              label: 'Clarity Signals',
              text: 'Users abandoned flows when transaction states were ambiguous (pending, processing, failed). Trust eroded when numerical formatting was inconsistent across currencies. Operators expected real-time feedback on every financial action taken.',
            },
            {
              label: 'Design Principles',
              text: 'Reduce cognitive load by eliminating unnecessary feature exposure on primary screens. Prioritize numerical legibility with consistent formatting, hierarchy, and spacing. Design for trust through transparency: no hidden states, no silent failures.',
            },
          ],
          images: ['research.png'],
        },
        {
          title: 'User Types',
          desc: 'The platform serves three core user types: Casino & iGaming operators, Business operators, and Merchants managing crypto deposits, withdrawals, and multi-currency fund movements through the Pay.io Merchant Console.',
        },
        {
          title: 'Mapping a New Information Architecture',
          desc: 'The platform is split into two main interfaces: Merchant Console (asset control, transaction management, reports) and Cashier UI (withdrawals, transaction history, deposits). Navigation was restructured around how business operators actually think and work.',
          parts: [
            {
              label: 'Surface Critical Actions First',
              text: 'Balances and pending transactions are visible immediately upon login, eliminating the need to navigate deeper.',
            },
            {
              label: 'Group by Intent, Not Feature',
              text: '"Managing" covers oversight and configuration; "Executing" covers active financial operations, matching how business operators think.',
            },
            {
              label: 'Clarify Transaction States',
              text: 'Every transaction displays a clear, real-time status (Pending, Processing, Completed, Failed) to eliminate ambiguity.',
            },
            {
              label: 'Reduce Cognitive Load',
              text: 'Flattened hierarchy from 4 navigation levels to 2, ensuring any action is reachable within two taps.',
            },
          ],
          images: ['ia.png', 'ia-2.png', 'ia-3.png'],
        },
        {
          title: 'A Scalable Design System',
          desc: "Unified system powering Pay.io's Cashier, Dashboard, and API interfaces. Built from Design Tokens (color & typography, spacing & dimensions, effects) → Core Components (actions, forms & selection, content display, indicators & status, containers, feedback & navigation) → Component Variants (state patterns, currency formats, headers, navigation bars, pagination, steppers, cards, etc.).",
          parts: [
            {
              label: 'Reusable Components',
              text: 'Standardized across Cashier, Dashboard, and management interfaces.',
            },
            {
              label: 'Token-Driven Theming',
              text: 'Ensures consistent color, typography (optimized for numerical legibility), and spacing across all product surfaces.',
            },
            {
              label: 'Multi-Currency Formatting',
              text: 'Variants handle symbol placement, decimal precision, and locale-specific display patterns.',
            },
            {
              label: 'State-Specific Variants',
              text: 'For every interactive element: default, hover, active, disabled, error, and loading states.',
            },
            {
              label: 'Compliance-Ready Patterns',
              text: 'Embed KYC and AML visual cues directly into component behavior, not as afterthoughts.',
            },
          ],
          images: ['design-system.png'],
        },
        {
          title: 'High Fidelity Design — Onboarding',
          desc: 'A simple onboarding process to get users to experience the platform. Enable assets: Merchants get to experience firsthand the multi-currency crypto enablement. Assets that they want their users to transact with are added and relevant networks are enabled.',
          images: ['final-onboarding.png'],
        },
        {
          title: 'High Fidelity Design — Homepage',
          desc: 'Merchants can see their wallet balance, wallet activity and recent transactions.',
          parts: [
            {
              label: 'Hot Wallet Balance',
              text: 'Merchants can view their direct user deposits, transfer it to custodial wallet and deposit into it.',
            },
            {
              label: 'Hot Wallet Activity',
              text: 'Merchants will be able to monitor wallet activity across various timeframes.',
            },
            {
              label: 'Asset Holdings',
              text: 'A simple view for merchants to see their enabled assets allocation. Here they can see how much each asset holds as against the total amount in their wallet.',
            },
            {
              label: 'Recent Transactions',
              text: 'Merchants can track user transactions across assets.',
            },
          ],
          images: ['final-homepage.png'],
        },
        {
          title: 'High Fidelity Design — Report',
          desc: 'Merchants will be able to view user activity, financial report, payment performance and wallet.',
          images: ['final-report.png'],
        },
        {
          title: 'High Fidelity Design — Transaction Management',
          desc: 'Merchants can manage the transaction of cashier users, admins and withdrawal requests.',
          parts: [
            {
              label: 'Withdrawal Request',
              text: 'Merchants should have the control to manage withdrawal manually within a certain threshold.',
            },
            {
              label: 'User Transaction',
              text: 'Here, merchant can manually retry failed transactions and monitor user transactions.',
            },
          ],
          images: ['final-transactions.png'],
        },
        {
          title: 'High Fidelity Design — Asset Management',
          desc: 'Merchants will be able to enable/disable assets, deposit and transfer to treasury wallet, set up treasury wallet and withdraw from the platform. They can also set withdrawal limits.',
          images: ['final-assets.png'],
        },
        {
          title: 'High Fidelity Design — Cashier UI',
          desc: 'This is the interface that the end user can use to deposit and withdraw crypto from their account.',
          images: ['final-cashier1.png', 'final-cashier2.png'],
        },
        {
          title: 'Collaborating with Engineering',
          desc: 'Collaborating with engineering to bridge the gap between design vision and technical constraints. A continuous iteration cycle for financial precision.',
          parts: [
            {
              label: 'Design Proposal',
              text: 'Translated research insights into detailed interaction specs for each financial flow. Created annotated prototypes covering transaction states, error handling, and edge cases. Documented expected responses and data dependencies for every screen.',
            },
            {
              label: 'Engineering Review',
              text: 'Engineers assessed feasibility against real-time constraints and database architecture. Flagged latency risks for live balance fetching across multi-currency accounts.',
            },
            {
              label: 'Constraint Resolution',
              text: 'Redesigned the funds transfer flow to use optimistic UI updates with background validation. Replaced synchronous balance checks with manual refresh trigger.',
            },
            {
              label: 'Validated Handoff',
              text: 'Delivered production-ready specs. Conducted joint QA walkthroughs to verify every state matched the design intent. Maintained a shared decision log documenting each trade-off and its rationale.',
            },
          ],
        },
        {
          title: 'Impact',
          desc: 'As the product gets accepted by merchants outside our target group, we are iterating the product to meet more needs and become the go-to payment gateway for merchants.',
          bullets: [
            'First week of launch saw 5 merchants waiting to be onboarded.',
            'Average time to complete core transactions (send funds, issue cards) reduced from 4.2 to 3.3 minutes.',
            'Users reached critical actions 40% faster due to resurfaced navigation hierarchy.',
          ],
        },
        {
          title: 'Reflection',
          parts: [
            {
              label: 'What Initially Failed',
              text: 'Over-designed the transaction detail view with too many data fields visible at once, overwhelming operators who needed quick status checks. Underestimated multi-currency edge cases where simultaneous balance updates across wallets caused UI state conflicts and displayed stale data. Initial confirmation patterns were too subtle for high-stakes actions like fund transfers, leading users to repeat actions due to uncertainty about completion.',
            },
            {
              label: 'What I Learned',
              text: 'Currency rounding errors, pending transaction states, and failed payment retries are not exceptions but core scenarios that must be designed for upfront. Users equate visual precision (correct decimal places, explicit state labels) with platform reliability. Backend constraints shape UX — real-time balance APIs had latency; designing "optimistic UI" with clear loading and reconciliation states was essential. Operators think in workflows, not screens.',
            },
            {
              label: 'Future Opportunities',
              text: 'Enable scheduled exports and dashboards so operators can monitor cash flow without manual tracking. Provide compliance teams with searchable, time-stamped records of every financial action and approval chain. Proactive notifications for anomalous patterns, failed payments, or balance thresholds to reduce reactive troubleshooting. Tailor default views for different operator roles (finance manager vs. account admin) to surface the most relevant data immediately.',
            },
          ],
        },
      ],
    },
  },
  {
    id: '03',
    slug: 'humanmanager',
    category: 'Enterprise · B2B SaaS',
    year: '2023',
    name: 'HumanManager',
    homepageMetric: '+23 enterprise clients (90 days)',
    metricValue: '+23',
    metricLabel: 'enterprise clients (90 days)',
    decision: 'Replaced full redesign with a system-first rollout.',
    tension: 'The client expected new screens. The blocker was inconsistent components.',
    tensionLines: [
      'HumanManager was losing enterprise deals before a single demo.',
      'The product worked.',
      "It just looked like it didn't.",
    ],
    constraint:
      'Redesigning inside live enterprise workflows — zero tolerance for disruption.',
    leverage: {
      headline: [
        'Built the design system first.',
        'Applied it to the product second.',
      ],
      body: 'The team needed language before they needed screens.',
    },
    result: {
      metric: '+23',
      descriptor: 'enterprise clients',
      timeframe: 'signed within 90 days of launch.',
      mechanism:
        'The design system became the standard for every product touchpoint they ship. No more per-feature decisions. One source.',
    },
    nextTeaser: "what happens when a market doesn't trust you yet.",
    caseStudy: {
      intro: [
        'HumanManager was losing enterprise deals before a single demo loaded. The product worked — payroll, leave, expenses, recruiting, onboarding — all functional. But it looked like it was built in 2014 because it was. Banks, telecoms, and oil companies were choosing competitors purely on first impressions.',
        'I was brought in as Lead UX Designer to fix this. Not with a cosmetic refresh, but with a system-level rebuild that could scale across 40+ industries, support white-labeling for enterprise clients, and simultaneously launch a new product tier for small businesses.',
      ],
      link: { title: 'View the website', href: 'https://humanmanager.net/' },
      sections: [
        {
          title: 'My Role',
          type: 'roleCard' as const,
          role: {
            what: 'Lead UX Designer responsible for the full redesign of the HumanManager platform. I owned research, interaction design, the design system, white-label architecture, the small-business product, and the iOS/Android mobile apps. I worked with 3 engineers, 1 PM, and reported to the VP of Product.',
            team: '1 lead designer, 3 engineers, 1 PM',
            timeline: '8 months',
            tools: 'Figma, Maze, Hotjar, Jira',
          },
        },
        {
          title: 'The Problem I Diagnosed',
          desc: 'The stakeholders asked for "new screens." But after auditing the product and talking to users, I realised screens weren\'t the problem — the lack of a system was.\n\nEvery feature had been designed in isolation over years. Buttons looked different on every page. Navigation patterns changed between modules. Enterprise clients couldn\'t customise branding. And the mobile experience didn\'t exist.',
          images: ['challenge.png'],
          parts: [
            {
              label: 'What I pushed back on',
              text: 'The initial brief was to redesign the top 5 screens. I argued this would create an even more inconsistent product. Instead, I proposed building a design system first and rolling it across the entire platform — a harder sell, but the right one.',
            },
            {
              label: 'What I discovered',
              text: '50 interviews with HR managers, employees, and small business owners revealed the real pain: not missing features, but inconsistent workflows that destroyed confidence. HR teams were spending 2+ hours training new staff on navigation alone.',
            },
          ],
        },
        {
          title: 'The Tension',
          type: 'pullQuote' as const,
          quote: 'The client expected new screens. The real blocker was inconsistent components. I had to convince them that building a design system first wasn\'t a delay — it was the shortcut.',
        },
        {
          title: 'Research: 50 Interviews, 3 User Types',
          desc: 'I segmented research into three audiences with fundamentally different needs:',
          parts: [
            {
              label: 'Enterprise HR Teams',
              text: 'Needed white-labeling, configurable workflows, and audit trails. Their biggest frustration: every module felt like a different product.',
            },
            {
              label: 'Small Business Owners',
              text: 'Wanted payroll and leave management — nothing more. Existing tools were overwhelming. They needed a stripped-down version, not a dumbed-down one.',
            },
            {
              label: 'Employees (End Users)',
              text: 'Wanted mobile access to check pay slips, request leave, and submit expenses. They had zero interest in learning a desktop platform.',
            },
          ],
        },
        {
          title: 'From Insights to Architecture',
          desc: 'I crafted user stories for each segment and used them to drive a three-tier product architecture:',
          images: ['goals.png'],
          parts: [
            {
              label: 'Enterprise tier',
              text: 'Full platform with white-label theming engine. Every client\'s instance looked like their own product — their logo, their colours, their domain.',
            },
            {
              label: 'Small business tier',
              text: 'A lightweight standalone product with only payroll, leave, and expense management. Onboarding took under 5 minutes.',
            },
            {
              label: 'Mobile tier',
              text: 'Native iOS and Android apps for employees: check pay, request leave, submit expenses — three taps for any action.',
            },
          ],
          close: 'This wasn\'t three separate products. It was one design system with three deployment configurations. That distinction saved months of engineering time.',
        },
        {
          title: 'Feature Prioritization',
          images: ['feature.png'],
        },
        {
          title: 'What I Tried and Changed',
          desc: 'My initial approach was to redesign module by module — start with payroll, then leave, then expenses. After shipping the payroll redesign, I realised the inconsistency problem was getting worse, not better. The new payroll module looked modern while everything else looked legacy.\n\nI stopped the module-by-module approach and spent three weeks building the design system instead. Tokens, components, patterns — documented and handed off. Then I reskinned the entire product in a single sprint using the system. The result was visually consistent from day one of the full rollout.',
        },
        {
          title: 'The Before',
          desc: 'Legacy interfaces that were functional but visually inconsistent, with no shared design language across modules.',
          images: ['map.png', 'slim.png'],
        },
        {
          title: 'The After',
          images: ['final-1.png', 'final-2.png', 'final-3.png'],
        },
        {
          title: 'Impact',
          type: 'metricCallout' as const,
          metrics: [
            { value: '$15M', label: 'Annual revenue — surpassed the $10M target by 50%' },
            { value: '10,000', label: 'Small businesses onboarded in Year 1 of the new tier' },
            { value: '2.5×', label: 'Increase in enterprise clients from white-label flexibility' },
            { value: '4.5★', label: 'App store rating for the new iOS and Android apps' },
          ],
        },
        {
          title: 'Reflection',
          desc: 'The biggest lesson: when stakeholders ask for screens, they usually mean confidence. The design system gave everyone — product, engineering, sales — a shared language. It turned "make it look better" into a measurable, repeatable process.\n\nWhat I\'d do differently: I\'d build the theming engine into the design system from week one instead of retrofitting it. The white-label architecture was the feature that closed enterprise deals, and having it earlier would have accelerated sales conversations.',
        },
      ],
    },
  },
  {
    id: '04',
    slug: 'quit-app',
    category: 'Consumer Health · Mobile',
    year: '2023',
    name: 'Quit App',
    password: 'sinisterSix',
    homepageMetric: '+65% onboarding completion',
    metricValue: '+65%',
    metricLabel: 'onboarding completion',
    decision: 'Forced a commitment before access.',
    tension: "You don't get a second first session.",
    tensionLines: [
      "You're designing for someone mid-craving.",
      'The first 48 hours determine everything.',
      'iOS and Android. No second chance at the first session.',
    ],
    constraint:
      "The critical moment is the one the user doesn't want to open the app.",
    leverage: {
      headline: [
        'Redesigned onboarding as a commitment device,',
        'not a tutorial.',
      ],
      body: 'The first 48 hours: high support, zero friction.',
    },
    result: {
      metric: '+65%',
      descriptor: 'onboarding success.',
      timeframe: 'Measured within 30 days of launch.',
      mechanism:
        '+20% in-app purchase. +10% community engagement. All from the same first-session redesign.',
    },
    nextTeaser: null,
    caseStudy: {
      intro: [
        'I joined a health-tech company that had just acquired a smoking cessation product and needed it completely redesigned for three European markets — the UK, Germany, and France. The app had to integrate with a physical CO2 measurement device, comply with EU health regulations, and use behavioral science to actually change habits.',
        'This wasn\'t a typical app redesign. I was designing for someone mid-craving, at their weakest moment, deciding whether to open the app or light a cigarette. Every screen had to earn that decision.',
      ],
      sections: [
        {
          title: 'My Role',
          type: 'roleCard' as const,
          role: {
            what: 'Sole product designer on a multidisciplinary team. I owned the end-to-end redesign: research synthesis, interaction design, the design system, and usability testing. I worked alongside behavioral scientists, regulatory experts, and developers to ship across iOS and Android.',
            team: '1 designer, 2 PMs, 4 engineers, 2 behavioral scientists',
            timeline: '6 months',
            tools: 'Figma, Maze, Miro, COM-B Framework',
          },
        },
        {
          title: 'The Stakes',
          desc: 'The global smoking cessation market was valued at $21B in 2023, projected to reach $45B by 2030. We focused on the UK, Germany, and France — 30% of the EU market. The company was targeting IPO readiness, and this redesign was the product that needed to get them there.',
          images: ['project.png'],
        },
        {
          title: 'The Core Tension',
          type: 'pullQuote' as const,
          quote: 'You don\'t get a second first session. I was designing for someone mid-craving, at their most vulnerable. The first 48 hours determine everything — if the app doesn\'t hold them there, they\'re gone.',
        },
        {
          title: 'The Challenge I Inherited',
          desc: 'The existing app was functional but designed without behavioral science. It treated quitting like a to-do list — log your cigarettes, check your stats. But addiction doesn\'t work that way. Users need support at the moment of weakness, not a dashboard to review after the fact.',
          images: ['challenge.png'],
          parts: [
            {
              label: 'What was broken',
              text: 'No onboarding commitment mechanism. Users could skip setup and land on an empty home screen. Community features were buried. The CO2 device integration was an afterthought, not a core experience.',
            },
            {
              label: 'The regulatory layer',
              text: 'EU health regulations in three countries meant every piece of health advice, NRT recommendation, and data collection needed legal review. This wasn\'t a constraint I could design around — it had to be designed into every flow.',
            },
          ],
        },
        {
          title: 'Research: Behavioral Science Meets Design',
          desc: 'I worked with the behavioral science team to apply the COM-B framework — Capability, Opportunity, Motivation, Behaviour — to every design decision. I didn\'t just read their research; I co-designed the intervention logic with them.',
          images: ['process.webp'],
          parts: [
            {
              label: 'What the data showed',
              text: 'Users at the "preparation" stage needed commitment devices, not information. Users in "action" needed real-time support and community. Users in "maintenance" needed progress visibility and relapse prevention.',
            },
            {
              label: 'My design decision',
              text: 'I redesigned onboarding as a commitment device, not a tutorial. Users set a quit date, chose their support method, and made a public commitment to the community — all before seeing the home screen. This was controversial internally, but the data backed it up.',
            },
          ],
        },
        {
          title: 'What I Tried and Changed',
          desc: 'My first onboarding design was a guided 8-step wizard that collected smoking history, health goals, preferred NRT, and community preferences. It was thorough and it was terrible — 40% abandoned by step 4.\n\nI stripped it to 4 screens: quit date, commitment level, CO2 device pairing, and community intro. The rest was collected progressively over the first week. Completion jumped to 65%.\n\nThe key insight: at the moment someone decides to quit, you don\'t ask them to fill out forms. You ask them to commit.',
        },
        {
          title: 'Key Findings',
          images: ['findings.png'],
        },
        {
          title: 'Feature Prioritization',
          desc: 'I used a 2×2 impact vs. effort matrix. "Do Now": onboarding redesign, CO2 integration, community hub, daily check-in. "Do Next": gamification, NRT marketplace. "Do Later": corporate wellness integrations. "Don\'t Do": social sharing to external platforms (users wanted privacy, not broadcast).',
          images: ['feature.png'],
        },
        {
          title: 'Information Architecture',
          images: ['IA.webp'],
        },
        {
          title: 'The Old Design',
          desc: 'The app I inherited — functional but not designed for behavior change.',
          images: ['old-app.webp'],
        },
        {
          title: 'The Redesign',
          desc: 'Every screen designed around the COM-B framework. The home screen surfaces the user\'s commitment, today\'s progress, and community activity — the three things that matter at the moment of craving.',
          images: ['final-1.png', 'final-2.png', 'final-3.png', 'final-4.png'],
        },
        {
          title: 'Validation',
          desc: '15 participants across all three markets. Semi-structured usability testing with think-aloud protocol.',
          parts: [
            { label: 'Navigation', text: 'Intuitive across all user segments. Zero confusion on core flows.' },
            { label: 'Interactive tools', text: 'Games and breathing exercises were the surprise hit — users said they helped during cravings more than expected.' },
            { label: 'Progress tracking', text: 'CO2 measurement integration gave users tangible proof of improvement. This was the single most motivating feature.' },
            { label: 'What I added post-testing', text: 'A quick-log feature for daily smoking activity. Users wanted to track without opening the full app.' },
          ],
        },
        {
          title: 'Impact',
          type: 'metricCallout' as const,
          metrics: [
            { value: '+65%', label: 'Onboarding completion — up from 40% with the original design' },
            { value: '30K', label: 'Downloads in the first month across iOS and Android' },
            { value: '70%', label: 'Community engagement rate in the new hub' },
            { value: '+15%', label: 'Revenue increase from in-app NRT purchases' },
          ],
        },
        {
          title: 'Navigating Constraints',
          parts: [
            {
              label: 'Regulatory',
              text: 'I built a review workflow into the design process itself — every screen that touched health advice went through legal before development. This front-loaded compliance and eliminated post-build rework.',
            },
            {
              label: 'Technical',
              text: 'The CO2 device had Bluetooth pairing issues on older Android devices. I designed a fallback manual-entry flow so users were never blocked from logging progress.',
            },
            {
              label: 'Timeline',
              text: 'I adapted existing design system components instead of building from scratch. This cut design-to-dev handoff time by 40% and kept us on schedule for the UK launch.',
            },
          ],
        },
        {
          title: 'Reflection',
          desc: 'The biggest thing I learned: designing for behavior change is fundamentally different from designing for task completion. You\'re not optimising a funnel — you\'re designing for a moment of human weakness. Every pixel has to earn the user\'s trust at their lowest point.\n\nWhat I\'d do differently: I\'d push harder for longitudinal user testing. We validated usability but didn\'t measure 30-day retention. The onboarding was strong, but I want data on whether the first-week experience holds people through the hardest phase.',
        },
      ],
    },
  },
  {
    id: '05',
    slug: 'fintech-merchants',
    category: 'Financial Services · Mobile',
    year: '2022',
    name: 'Accorn',
    homepageMetric: '35% of unreachable merchants, reached',
    metricValue: '35%',
    metricLabel: 'of unreachable merchants, reached',
    decision: 'Reduced the core flow to 3 taps. Trust over usability.',
    tension: "A failed transaction wasn't an inconvenience. It was a livelihood problem.",
    tensionLines: [
      'Merchants in underserved markets. Low literacy, inconsistent connectivity.',
      'One shot to get it right.',
      "A failed transaction wasn't an inconvenience. It was a livelihood problem.",
    ],
    constraint:
      'Designed for the moment connectivity drops, not the moment it works.',
    leverage: {
      headline: [
        'Reduced the core flow to 3 taps.',
        'Designed for trust before usability.',
      ],
      body: "In this market, they're the same thing.",
    },
    result: {
      metric: '35%',
      descriptor: 'of previously unreachable merchants',
      timeframe: 'gained financial access.',
      mechanism:
        'The 3-tap flow removed every point of failure between a merchant and their money.',
    },
    nextTeaser: 'what design looks like when the habit is the enemy.',
    caseStudy: {
      intro: [
        'Over 106 million Nigerians — 36% of the adult population — have no access to formal banking. I spent three months embedded in rural communities to understand why, then designed the agent banking app that would become their first point of financial access.',
        'The insight that changed everything: you don\'t design for the end user. You design for the trusted person in the village who already handles their money.',
      ],
      link: {
        title: 'View clickable prototype',
        href: 'https://www.figma.com/proto/twS0yqVI3GrvyhR2eaUwGD/accorn-(Digital-Product)?node-id=9-5317',
      },
      sections: [
        {
          title: 'My Role',
          type: 'roleCard' as const,
          role: {
            what: 'UX Designer and Product Researcher. I conducted three months of immersive fieldwork in rural Nigeria, led the ideation and design process, and created the agent-centric model. I was the sole designer, working with 1 PM and 3 engineers.',
            team: '1 designer, 1 PM, 3 engineers',
            timeline: '5 months (3 months research, 2 months design)',
            tools: 'Figma, pen & paper, field interviews',
          },
        },
        {
          title: 'The Problem on the Ground',
          desc: 'I didn\'t start with desk research. I went to rural communities across eight states and spent three months living alongside the people we were designing for. What I found was more nuanced than any brief could capture:',
          parts: [
            {
              label: 'No infrastructure',
              text: 'No banks, no ATMs, no reliable internet. People traveled hours to access basic financial services.',
            },
            {
              label: 'Trust was local, not institutional',
              text: 'Villagers trusted the person who ran the local cooperative, not a bank logo on a screen. Past experiences with hidden fees and poor service had destroyed institutional trust.',
            },
            {
              label: 'Literacy was a real barrier',
              text: 'Many users couldn\'t read English or even their local language in written form. Icons, colors, and spatial patterns had to carry the entire interface.',
            },
            {
              label: 'Informal economies were sophisticated',
              text: 'The "unbanked" weren\'t financially inactive — they saved, lent, and transacted billions annually through informal cooperatives. They didn\'t need to learn banking. Banking needed to learn them.',
            },
          ],
        },
        {
          title: 'The Design Decision',
          type: 'pullQuote' as const,
          quote: 'I stopped designing for 106 million unbanked Nigerians and started designing for the one trusted person in each village who could be their bridge to formal finance.',
        },
        {
          title: 'The Business Case',
          desc: 'Nigeria\'s informal economy represented billions in untapped financial services revenue. With 772 local government areas, even modest penetration meant massive scale.',
          images: ['business.png'],
          parts: [
            { label: 'Transaction fees', text: 'Revenue from deposits, withdrawals, bill payments, and transfers through agents.' },
            { label: 'Microloans', text: 'Credit services for rural entrepreneurs and farmers — interest income while driving economic activity.' },
            { label: 'Government partnerships', text: 'Welfare disbursement channels for government-to-person payments.' },
            { label: 'Agent incentives', text: 'Revenue-sharing model that made agents financially motivated to grow their customer base.' },
          ],
          close: 'Projected first-year revenue: $5M from agents in 100 local government areas across eight states.',
        },
        {
          title: 'Research Methodology',
          desc: 'Three months of immersive fieldwork. I didn\'t send surveys — I sat in village squares, watched transactions happen, and asked people to walk me through how they managed money.',
          images: ['method.png'],
        },
        {
          title: 'Key Findings',
          images: ['findings.png'],
        },
        {
          title: 'The Agent Model',
          desc: 'Instead of targeting end-users directly, I designed for community agents — trusted individuals with smartphones and basic digital skills. They would be the interface between the banking system and the community.',
          images: ['concept.png'],
          close: 'This wasn\'t a compromise. It was the architecture. Agents already handled money in these communities. I was giving them better tools, not replacing them.',
        },
        {
          title: 'What I Tried and Killed',
          desc: 'My first design included a user-facing mode — a simplified screen that agents could hand to customers for self-service. In testing, it failed completely. Users were uncomfortable holding the agent\'s phone. They wanted the agent to do it while they watched.\n\nI killed the customer-facing mode and redesigned the entire flow as agent-operated with visual confirmation screens that customers could see and verify. Trust increased. Errors dropped to near-zero.',
        },
        {
          title: 'User Stories & Journey',
          images: ['story.png', 'journey.png'],
        },
        {
          title: 'Feature Prioritization',
          desc: 'Every feature was evaluated against one question: does this work when the internet drops? Offline-first was the architecture, not a feature. I cut real-time notifications, location tracking, and video onboarding — all of which required connectivity.',
          images: ['feature.png'],
        },
        {
          title: 'User Flow',
          images: ['flow.png'],
        },
        {
          title: 'Sketches & Wireframes',
          desc: 'Pen-and-paper first, tested with actual agents in the field. Two rounds of iteration before any screen hit Figma.',
          images: ['wireframes.png'],
        },
        {
          title: 'Final Designs',
          desc: 'Three taps for any core action. Color-coded transaction types. Large touch targets. Offline-first with clear sync indicators. Commission dashboard that agents checked hourly — it was their primary motivator.',
          images: ['final-1.png', 'final-2.png', 'final-3.png', 'final-4.png'],
        },
        {
          title: 'Validation',
          desc: 'Tested with agents and rural users across three states. The results validated the agent-centric model:',
          parts: [
            { label: 'Simplicity', text: 'Intuitive for agents with low digital literacy. Zero training needed for basic flows.' },
            { label: 'Offline mode', text: 'The most praised feature. Service continued uninterrupted in low-connectivity areas.' },
            { label: 'Commission transparency', text: 'Agents loved seeing their earnings in real-time. It drove adoption faster than any marketing.' },
            { label: 'What I fixed post-testing', text: 'Error messages were too generic. I replaced them with specific, action-oriented guidance. Sync indicators were added after users reported anxiety about pending transactions.' },
          ],
        },
        {
          title: 'Impact',
          type: 'metricCallout' as const,
          metrics: [
            { value: '35%', label: 'Of previously unreachable merchants gained financial access' },
            { value: '3 taps', label: 'Maximum actions for any core transaction' },
            { value: '0', label: 'Training sessions needed — agents learned by doing' },
          ],
        },
        {
          title: 'Reflection',
          desc: 'This project changed how I think about design. The most important decision wasn\'t any screen or flow — it was choosing to design for agents instead of end-users. That single architectural choice made everything else possible.\n\nWhat I\'d do differently: I\'d push for local language support from day one. We launched in English only, and while agents could translate verbally, the app should have spoken the community\'s language from the start.',
        },
      ],
    },
  },
  {
    id: '06',
    slug: 'coinhaven',
    category: 'NFT Marketplace · Web3',
    year: '2022',
    name: 'CoinHaven',
    homepageMetric: '€7M raised',
    metricValue: '€7M',
    metricLabel: 'raised',
    decision: 'Built trust signals before marketplace features shipped.',
    tension: 'Everyone was building marketplaces. Nobody was building trust.',
    tensionLines: [
      'Peak NFT bull market. Maximum noise. Minimum trust.',
      'CoinHaven had no brand equity against OpenSea.',
      'The window for funding was 6 months.',
    ],
    constraint: 'The market would decide in weeks, not quarters.',
    leverage: {
      headline: [
        'Designed trust signals into every touchpoint',
        'before designing features.',
      ],
      body: 'Provenance, creator verification, community proof — not as add-ons. As architecture.',
    },
    result: {
      metric: '€7M',
      descriptor: 'secured in funding.',
      timeframe: '40% platform growth in 6 months post-launch.',
      mechanism:
        "Trust became the product's primary differentiator in a market where every competitor looked identical.",
    },
    nextTeaser: "designing for users who can't afford a mistake.",
    caseStudy: {
      intro: [
        'I was brought on as the sole UX designer to build CoinHaven\'s NFT marketplace from zero. The startup had just shipped a crypto exchange MVP in Germany and wanted to expand into the NFT space — but they had no brand equity, a four-person team, and six months to prove the concept to investors.',
        'My job was to design an experience that made minting, buying, and selling NFTs feel effortless — even for someone who had never touched a wallet. The prototype I delivered became the centrepiece of their pitch deck and helped close a €7M funding round.',
      ],
      sections: [
        {
          title: 'My Role',
          type: 'roleCard' as const,
          role: {
            what: 'I was the only designer, responsible for end-to-end product design: research, interaction design, visual design, prototyping, and user testing. I reported directly to the CEO and collaborated with 2 engineers and 1 product lead.',
            team: '1 designer, 2 engineers, 1 PM',
            timeline: '6 months',
            tools: 'Figma, Maze, Discord, Miro',
          },
        },
        {
          title: 'The Opportunity',
          desc: 'In 2022, the NFT market was valued at $24 billion with projections toward $80 billion by 2025. But the dominant platforms — OpenSea, Rarible, Magic Eden — were built for crypto natives. Small creators were priced out by Ethereum gas fees, overwhelmed by complexity, and exposed to rampant scams.\n\nCoinHaven saw a gap: build for the 90% of creators who wanted in but couldn\'t get started. My job was to turn that thesis into a product investors could believe in.',
        },
        {
          title: 'The Tension',
          type: 'pullQuote' as const,
          quote: 'Everyone was building marketplaces. Nobody was building trust. In a market full of scams, the biggest design problem wasn\'t usability — it was credibility.',
        },
        {
          title: 'Research: Going Where Creators Live',
          desc: 'I didn\'t rely on personas or assumptions. I went to where creators actually were — Twitter, Telegram, Discord — and spent three weeks embedded in their communities. I ran surveys, conducted 1-on-1 interviews, and analysed competitor platforms.',
          images: ['surveys.png', 'one-one.png'],
          parts: [
            {
              label: 'What I heard',
              text: 'High gas fees made minting a gamble. Small creators couldn\'t compete with established names for visibility. Scams had eroded trust across every platform. Creators wanted pre-launch buzz tools to build an audience before drop day.',
            },
            {
              label: 'What I rejected',
              text: 'The team initially wanted to copy OpenSea\'s layout. I pushed back — our users weren\'t crypto natives. I argued for a creation-first flow rather than a trading-first one, and won the debate with research data showing 73% of our target users identified as "creators first, traders second."',
            },
          ],
        },
        {
          title: 'Competitive Analysis',
          desc: 'I mapped OpenSea, Magic Eden, and Rarible against creator pain points. The gap was clear: none of them optimised for first-time creators or offered multichain minting to avoid Ethereum\'s fee problem.',
          images: ['compete.png'],
        },
        {
          title: 'Key Findings',
          desc: 'Creators dreamed of platforms that were affordable, inclusive, and secure. They wanted tools to build buzz before launch — something that levelled the playing field. This became my design brief.',
          images: ['findings.png'],
        },
        {
          title: 'Design Decision',
          type: 'pullQuote' as const,
          quote: 'I chose to design trust signals into every touchpoint before designing a single marketplace feature. Provenance, creator verification, and community proof — not as add-ons, but as architecture.',
        },
        {
          title: 'User Stories & Journey',
          desc: 'I mapped journeys for three user types: a first-time creator minting their debut NFT, a seasoned artist expanding reach across chains, and a collector looking for verified, scam-free art. One insight drove everything: simplicity was non-negotiable.',
          images: ['stories.png'],
        },
        {
          title: 'Interaction Design',
          desc: 'I focused on making every interaction feel like a moment of creation, not a transaction. The minting flow became a digital canvas — upload, choose your chain, customise settings, preview, publish. Three screens. Zero jargon.',
          images: ['interact.png'],
        },
        {
          title: 'Ideation & Prioritization',
          desc: 'I facilitated a workshop with the team to brainstorm and then ruthlessly prioritise. Each idea was scored on user impact vs. engineering effort. We cut 40% of the initial feature list to ship something focused.',
          images: ['idea.png'],
        },
        {
          title: 'What I Tried and Killed',
          desc: 'I initially designed an elaborate onboarding wizard — wallet setup, profile creation, preferences, community intro — five screens before a user could do anything. Testing showed 60% drop-off by screen 3.\n\nI killed the wizard and replaced it with progressive disclosure: connect wallet → start creating → fill in profile later. Drop-off fell to 15%. The lesson: in Web3, trust is earned by letting people do something, not by asking them to commit upfront.',
        },
        {
          title: 'User Flow',
          images: ['user-flow.png'],
        },
        {
          title: 'Sketches & Wireframes',
          desc: 'Rapid pen-and-paper iterations before committing to pixels. I tested wireframes in-house first, then with 8 potential users from Discord. Two rounds of iteration before moving to high fidelity.',
          images: ['wireframe-1.jpg', 'wireframe-2.jpg', 'wireframe-3.jpg', 'wireframe-4.jpg'],
        },
        {
          title: 'Final Designs',
          desc: 'Every screen was designed to tell a story. The minting process became a moment of creation. The marketplace prioritised trust signals — verified badges, provenance history, community endorsements — over flashy visuals.',
          images: ['final-1.png', 'final-2.png', 'final-3.png', 'final-4.png', 'final-5.png'],
        },
        {
          title: 'Validation',
          desc: 'I tested the prototype with 15 users across three segments. Account setup and purchasing scored highest. Minting had friction around blockchain terminology — I addressed this by replacing jargon with plain-language tooltips and contextual help.',
          parts: [
            { label: 'Account Setup', text: 'Smooth. One-click wallet connect removed the biggest barrier.' },
            { label: 'Minting', text: 'Terminology was the blocker. I replaced "gas fees" with "network cost" and added inline explanations. Completion rate improved from 54% to 82%.' },
            { label: 'Listing for Sale', text: 'Auction instructions needed clarity. I added a visual step indicator.' },
            { label: 'Browsing & Purchase', text: 'Users loved the filter system and verified creator badges. Purchase flow tested at 90% task success.' },
          ],
        },
        {
          title: 'Impact',
          type: 'metricCallout' as const,
          metrics: [
            { value: '€7M', label: 'Funding raised — the prototype was the centrepiece of the investor pitch' },
            { value: '60%', label: 'Platform usage growth within 6 months of launch' },
            { value: '82%', label: 'Minting completion rate after terminology redesign (up from 54%)' },
          ],
        },
        {
          title: 'Reflection',
          desc: 'The biggest thing I learned: in a zero-trust market, the most important design decision is what you show before asking for anything. Every trust signal I embedded — verified badges, provenance chains, community proof — mattered more than any feature.\n\nIf I did it again, I\'d push harder for native mobile from day one. The responsive web approach worked but limited engagement patterns. The foundation is there for mobile expansion.',
        },
      ],
    },
  },
] as const
