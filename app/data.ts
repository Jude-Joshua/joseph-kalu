export type Part = { label?: string; text: string }

export type CaseSection = {
  title: string
  desc?: string
  parts?: Part[]
  close?: string
  images?: string[]
  bullets?: string[]
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
        'In 2022, NFTs were everywhere. The hype was unstoppable, and creators around the world were scrambling to join the NFT rush. For CoinHaven, a small cryptocurrency startup in Germany, this was the perfect storm to ride. They had just launched a cryptocurrency exchange MVP and were eager to expand their offerings by diving into the NFT space. Their idea? Build a platform where users can easily mint, buy, and sell NFTs while creating a community that would empower creators, big and small.',
        "I was brought on as the UX designer to turn their vision into a reality. My task wasn't just to create a platform—it was to craft an experience. One that made creating and trading NFTs intuitive, accessible, and, most importantly, fun. The challenge was clear: make something so simple that even someone new to crypto could navigate it with ease.",
        "But the road wasn't smooth. CoinHaven faced significant hurdles: regulatory constraints in Europe, the challenges of being a small team, and the need to secure funding for the platform's growth.",
      ],
      sections: [
        {
          title: 'Business Goal: Bridging the Gap in the NFT Market',
          desc: 'Coinhaven aims to become a leading NFT platform that democratizes the creation and trading of NFTs, making it accessible for both novice and experienced users. The primary objectives include:',
          parts: [
            {
              label: 'Democratize NFT Creation and Trading',
              text: 'The platform aimed to be accessible to both newcomers and seasoned users, eliminating barriers that often hinder participation.',
            },
            {
              label: 'Secure Investor Funding',
              text: 'To scale operations and enhance their offerings, Coinhaven needed to attract investors who believed in their vision.',
            },
          ],
          close:
            'To achieve this, the platform needed to solve critical user pain points while also showcasing its potential to investors. My job was to align these goals with user needs through research-driven design.',
        },
        {
          title: 'Market Size and Growth',
          desc: 'In 2022, the NFT market was valued at approximately $24 billion, with projections indicating it could reach around $80 billion by 2025. This explosive growth was driven by increasing interest from creators and collectors alike, alongside advancements in blockchain technology. Coinhaven recognized this opportunity as a chance to carve out its niche.',
        },
        {
          title: 'Forecast and Strategy',
          desc: 'To realize its ambitions, Coinhaven needed to develop a compelling product that could attract investment. The plan was to leverage user-centered design principles to create an intuitive platform that addressed the pain points of NFT creators. A successful prototype would not only validate their concept but also serve as a powerful tool for pitching potential investors.',
        },
        {
          title: 'The Research: Listening to the Creators',
          desc: "The first step in designing something meaningful is understanding the people you're designing for. So, I set out to meet the NFT creators. I didn't rely on hypothetical personas or assumptions—I went straight to the source. Twitter, Telegram, Discord groups—these were the digital cafes where creators hung out, talked about their projects, and, yes, vented their frustrations. I joined their conversations, sometimes casually and sometimes more formally through surveys and interviews. What I found was eye-opening.",
          images: ['surveys.png', 'one-one.png'],
        },
        {
          title: 'Competitive Analysis',
          desc: 'A deep dive into platforms like OpenSea, Magic Eden, and Rarible to identify gaps in the market.',
          images: ['compete.png'],
        },
        {
          title: 'Key Findings',
          desc: "For many creators, platforms like OpenSea were a double-edged sword. Sure, they were the giants, but they weren't built for everyone. High gas fees on Ethereum made minting NFTs an expensive gamble. Small creators were struggling to get noticed amidst a sea of big names. And scams? Rampant.\n\nBut it wasn't all complaints. These creators also had hopes. They dreamed of platforms that were more affordable, inclusive, and secure. They wanted tools to help them build buzz for their work before launch, something that could level the playing field. This wasn't just a wish list; it was my design brief.",
          images: ['findings.png'],
        },
        {
          title: 'Defining the User Stories',
          desc: 'With my research in hand, I began mapping out the journey of a CoinHaven user. Not just one user, but many—new creators minting their first NFT, seasoned creators looking to expand their reach, and buyers hoping to avoid scams while finding the next big thing. One insight stood out: simplicity was non-negotiable.',
          images: ['stories.png'],
        },
        {
          title: 'Interaction Design and Accessibility',
          desc: 'As an interaction designer, I focused on creating a product that was not only functional but also delightful to use.',
          images: ['interact.png'],
        },
        {
          title: 'Ideation and Prioritization',
          desc: 'With the user stories in place, I facilitated an ideation workshop with the team to brainstorm solutions. Each idea was evaluated based on its user impact and technical feasibility, resulting in a prioritized feature set.',
          images: ['idea.png'],
        },
        {
          title: 'User Journey Map',
          images: ['user-journey.png'],
        },
        {
          title: 'Overcoming Constraints',
          parts: [
            {
              label: 'Technical Constraints',
              text: "Coinhaven's small team and limited resources meant we couldn't launch both a web and mobile app simultaneously. Instead, I designed a web application with a mobile-responsive interface, ensuring users had a seamless experience on any device.",
            },
            {
              label: 'Regulatory Constraints',
              text: 'Operating in Europe brought its own challenges, as crypto regulations were strict and constantly evolving. I worked closely with the legal team to ensure the platform complied with regulations, particularly around user verification and security.',
            },
          ],
        },
        {
          title: 'User Flow',
          desc: 'Once we prioritised the features that were an easy win, we went ahead to create a user flow.',
          images: ['user-flow.png'],
        },
        {
          title: 'Sketches and Wireframes',
          desc: 'We used wireframes to quickly test ideas and iterate without much effort and finance. We started by sketching out the wireframe, tested it in house, iterated, and tested it with potential users.',
          images: [
            'wireframe-1.jpg',
            'wireframe-2.jpg',
            'wireframe-3.jpg',
            'wireframe-4.jpg',
          ],
        },
        {
          title: 'From Research to Reality',
          desc: "The design process wasn't just about functionality; it was about storytelling. Every interaction, from browsing the marketplace to referring a friend, had to feel like part of a larger journey. For example, the minting process became a moment of creation—a digital canvas where creators could upload their art, choose their blockchain, and customize their NFT's settings. The prototype was tested with 15 users, whose feedback led to refinements in navigation and feature prioritization.",
          images: ['final-1.png', 'final-2.png', 'final-3.png', 'final-4.png', 'final-5.png'],
        },
        {
          title: 'User Testing',
          desc: "To check how easy and effective the NFT platform we've designed is to use, we conducted user testing before going into development and further release into the market.",
          parts: [
            { label: 'Account Setup', text: 'Mostly easy.' },
            {
              label: 'Minting NFTs',
              text: 'Some found it easy, others struggled with understanding the terms.',
            },
            {
              label: 'Listing for Sale',
              text: 'Smooth for most, though some users wanted clearer auction instructions.',
            },
            { label: 'Exploring Platform', text: 'Users liked browsing but wanted better filter options.' },
            { label: 'Purchasing NFTs', text: 'Process was easy.' },
          ],
        },
        {
          title: 'Business Impact',
          parts: [
            {
              label: 'Business Results',
              text: "Coinhaven's leadership team was thrilled with the prototype — it became the star of their funding presentation, helping CoinHaven raise a €7 million funding round in 2022. This funding enabled the team to scale operations and attract creators globally.",
            },
            {
              label: 'Platform Growth',
              text: 'When the platform launched, the results spoke for themselves. Within months, CoinHaven saw a 60% growth in platform usage, with creators flocking to the site for its simplicity and affordability. Multichain minting proved to be a game-changer, attracting creators who had been priced out of Ethereum-dominated platforms.',
            },
          ],
        },
        {
          title: 'Looking Back, Moving Forward',
          desc: "Designing CoinHaven's NFT platform was more than a project—it was a lesson. I learned that great design isn't just about solving problems; it's about building trust, empowering users, and creating moments of delight. Today, the platform continues to grow, and while it's still a web-only experience, the foundation has been laid for mobile expansion and beyond.",
        },
      ],
    },
  },
  {
    id: '02',
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
        'In 2021, HumanManager, a leading HR tech SaaS product, embarked on a transformative journey to modernize its platform. Used by banks, telecom companies, oil firms, and other large enterprises, the product had long been a reliable tool for managing payroll, leave, expenses, recruiting, and employee onboarding. However, the platform was showing its age—its outdated interface, lack of mobile accessibility, and one-size-fits-all approach no longer met the growing demands of its clients.',
        'The challenge was clear: redesign HumanManager into a scalable, user-focused, and flexible solution. The redesign had to meet the complex needs of large enterprises, attract small businesses with tailored solutions, and empower staff with intuitive mobile access. As a UX designer and product researcher, I was tasked with not only improving the experience but also helping the company achieve its ambitious business goals of increasing market share and revenue.',
      ],
      link: { title: 'View the website', href: 'https://humanmanager.net/' },
      sections: [
        {
          title: 'The Business Goal: Scaling and Expanding',
          desc: "The HumanManager project was driven by ambitious business objectives that extended beyond simply improving the platform's user experience. These goals encompassed both immediate revenue targets and long-term strategic positioning within the HR technology market.",
          parts: [
            {
              label: 'Increase Revenue',
              text: 'The primary financial goal was to grow revenue up to $10M within the fiscal year by expanding the enterprise customer base and introducing a tailored solution for small businesses.',
            },
            {
              label: 'Enhance Retention',
              text: 'Reduce customer churn and boost retention rates by addressing usability issues and ensuring the platform met diverse client needs.',
            },
            {
              label: 'Expand Market Share',
              text: 'Establish the product as the go-to HR solution for both large enterprises and small businesses, increasing its presence across multiple industries.',
            },
          ],
          close:
            "To achieve these ambitious goals, I needed to communicate the product's value through design: aligning user needs with business objectives, simplifying workflows for large enterprises, and introducing an entirely new solution for small businesses.",
        },
        {
          title: 'The Challenges: One Product, Diverse Needs',
          desc: "HumanManager served over 40 industries with large workforces, but each organization had unique needs. A one-size-fits-all approach simply wasn't working. Meanwhile, small businesses with fewer than 10 employees were left without any solution. We identified three primary challenges.",
          images: ['challenge.png'],
        },
        {
          title: 'My Role',
          desc: 'As the Lead UX Designer, I was responsible for the design and maintenance of the HumanManager platform to meet the needs of large enterprises and small businesses alike. I conducted extensive user research with HR teams, staff, and small business owners to uncover pain points.\n\nMy role involved designing the white-labeled solution while designing a streamlined version for small businesses. I led the design and collaborated with developers to launch mobile apps for iOS and Android, ensuring a seamless experience for end-users.\n\nFurthermore, I created and documented a robust design system to maintain consistency across all versions of the product.',
        },
        {
          title: 'The Research: Understanding the Users',
          desc: 'To redesign effectively, I began by conducting in-depth research to understand the needs of enterprise users, small businesses, and employees.',
          parts: [
            {
              label: 'Interviews',
              text: 'We conducted 50 interviews with HR managers, employees, and small business owners.',
            },
            {
              label: 'Field Research',
              text: 'Observed small businesses in action to identify their HR pain points.',
            },
            {
              label: 'Competitive Analysis',
              text: 'Studied HR tools used by small businesses to create a mental model of their expectations.',
            },
          ],
        },
        {
          title: 'From Insights to Ideas: Crafting the Solution',
          desc: 'User Stories and Goals',
          images: ['goals.png'],
          close: 'These stories drove the design process, allowing us to align user needs with the business goals.',
        },
        {
          title: 'Conceptualizing the Idea',
          desc: 'Armed with these insights, I collaborated with the product team to craft a clear design direction. This phase involved brainstorming workshops, sketching initial concepts, and refining ideas into actionable solutions. The vision was bold but clear:',
          parts: [
            {
              label: 'For enterprises',
              text: 'Create a white-labeled product with customizable branding and features, ensuring every client felt the product was tailor-made for them.',
            },
            {
              label: 'For small businesses',
              text: 'Design a lightweight, streamlined solution that catered to their specific needs without overwhelming them.',
            },
            {
              label: 'For employees',
              text: 'Build mobile apps that made accessing HR tools fast and intuitive.',
            },
          ],
        },
        {
          title: 'Feature Prioritization',
          desc: 'We divided priorities between enterprise users and small businesses.',
          images: ['feature.png'],
        },
        {
          title: 'Evaluating Legacy Designs',
          desc: 'Before embarking on the redesign journey, it was essential to evaluate the existing screens of the HumanManager platform. These legacy interfaces were functional but reflected an outdated design language that no longer aligned with modern user expectations or industry standards.',
          images: ['map.png', 'slim.png'],
          close:
            'Including these old screens allowed us to highlight specific problem areas, helping stakeholders and team members visualize the gaps in usability and design.',
        },
        {
          title: 'Designing the Solutions',
          images: ['final-1.png', 'final-2.png', 'final-3.png'],
        },
        {
          title: 'Business Success',
          parts: [
            {
              label: 'Revenue Growth',
              text: 'By introducing white labeling and targeting small businesses, HumanManager surpassed its revenue goal, achieving $15M in annual revenue.',
            },
            {
              label: 'Expanded Market Share',
              text: 'The lightweight small-business solution onboarded 10,000 small businesses in its first year.',
            },
            {
              label: 'Increased Retention',
              text: 'The white-labeled approach led to a 2.5× increase in enterprise clients, as companies appreciated the flexibility and customization options.',
            },
          ],
        },
        {
          title: 'User Success',
          parts: [
            {
              label: 'Mobile Accessibility',
              text: 'The iOS and Android apps received a 4.5-star rating on app stores, empowering employees to manage HR tasks on the go.',
            },
            {
              label: 'User-Centric Innovation',
              text: 'Enterprise HR teams reported a significant reduction in training time, thanks to the intuitive new interface.',
            },
            {
              label: 'Simplified Payroll for Small Businesses',
              text: 'Automated payroll features saved time and improved employee satisfaction for small business owners.',
            },
          ],
        },
        {
          title: 'Key Takeaways',
          parts: [
            {
              label: 'Scalable Design is Powerful',
              text: 'The white-label solution proved that customization could be a competitive advantage.',
            },
            {
              label: 'User-Centric Innovation',
              text: "By focusing on users' goals, we delivered solutions that resonated deeply with both enterprises and small businesses.",
            },
            {
              label: 'Efficiency Through Systems',
              text: 'The design system accelerated development and maintained consistency across products.',
            },
            {
              label: 'Impactful Collaboration',
              text: 'Working transparently with stakeholders and users ensured that the final product exceeded expectations.',
            },
          ],
        },
      ],
    },
  },
  {
    id: '03',
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
        'In a nation where over 36% of adults—more than 106 million Nigerians—remain financially excluded, the challenge of bringing banking services to rural areas is both urgent and immense. For decades, traditional banking systems have failed to reach these populations due to limited infrastructure, high operating costs, and low profitability in rural markets.',
        'Fintech innovations, while promising, have been largely inaccessible to this demographic, as many lack internet-enabled devices or the technical literacy to use such tools.',
        'Recognizing this gap presented a profound business opportunity: to provide financial services to millions of unbanked Nigerians, creating a sustainable, scalable solution that not only addressed societal needs but also generated revenue.',
      ],
      link: {
        title: 'View clickable prototype',
        href: 'https://www.figma.com/proto/twS0yqVI3GrvyhR2eaUwGD/accorn-(Digital-Product)?node-id=9-5317',
      },
      sections: [
        {
          title: 'Understanding the Problem',
          desc: "Despite Nigeria's vibrant economy, a significant portion of its population remains financially excluded, particularly in rural areas. My research revealed several critical challenges:",
          parts: [
            {
              label: 'Lack of Banking Infrastructure',
              text: 'Rural areas are devoid of banks or ATMs, forcing residents to travel long distances to access basic financial services.',
            },
            {
              label: 'Limited Internet Access',
              text: 'Mobile internet penetration in these regions is minimal, and many residents lack smartphones capable of running fintech apps.',
            },
            {
              label: 'Low Trust in Banks',
              text: 'Past negative experiences with traditional banks, including hidden fees and poor customer service, have eroded trust among rural populations.',
            },
            {
              label: 'Language and Literacy Barriers',
              text: 'Many residents are illiterate or speak only local languages, making existing financial products inaccessible.',
            },
            {
              label: 'Informal Financial Practices',
              text: 'Villagers rely on trusted intermediaries and informal cooperatives for savings and transactions, as these are more familiar and culturally aligned with their needs.',
            },
          ],
          close:
            'These challenges underscored the urgent need for a solution tailored to the realities of rural Nigeria—one that was simple, trustworthy, and accessible.',
        },
        {
          title: 'My Role',
          desc: 'As the UX Designer and Product Researcher, I played a central role in designing the Agent Banking App. I conducted immersive research in rural communities, where I spent three months understanding the behaviors, needs, and pain points of unbanked individuals. This research informed the development of an agent-centric model tailored to rural realities. I led the ideation and design process.',
        },
        {
          title: 'The Business Opportunity: Tapping into an Untapped Market',
          desc: "Nigeria's rural population represents a massive, untapped market for financial services. The unbanked population saves, transacts, and borrows outside the formal financial system, creating informal economies worth billions of dollars annually. With over 772 local government areas, there is immense potential for growth if even a fraction of these individuals can be integrated into the formal economy.\n\nKey opportunities include:",
          images: ['business.png'],
          parts: [
            {
              label: 'Transactional Revenue',
              text: 'Charging a fee for deposits, withdrawals, bill payments, and transfers.',
            },
            {
              label: 'Credit Services',
              text: 'Extending microloans to rural entrepreneurs and farmers, earning interest while driving economic activity.',
            },
            {
              label: 'Government Partnerships',
              text: 'Collaborating with government programs for welfare disbursements and other initiatives to rural populations.',
            },
            {
              label: 'Agent Incentivization',
              text: 'Engaging local agents who generate income for themselves while ensuring cost-effective customer acquisition.',
            },
          ],
          close:
            'The projected first-year revenue of $5M was based on onboarding agents in 100 local government areas across eight states.',
        },
        {
          title: 'Research: Insights from the Field',
          desc: 'To ensure the product would resonate with its target audience, I conducted extensive user research across rural communities. This involved immersive fieldwork, where I spent three months living and interacting with the people we aimed to serve.',
        },
        {
          title: 'Methodology',
          images: ['method.png'],
        },
        {
          title: 'Key Findings',
          images: ['findings.png'],
        },
        {
          title: 'Conceptualizing the Solution',
          desc: 'The insights gathered shaped the vision for the Agent Banking App: a mobile-first platform designed for trusted community agents to serve as intermediaries between banks and rural users.',
          images: ['concept.png'],
          close:
            'Instead of targeting end-users directly, the app empowered community agents—trusted individuals with access to smartphones and basic digital skills. These agents acted as the bridge, offering banking services to their communities.',
        },
        {
          title: 'Defining the User Stories',
          desc: 'To guide the design process, I developed detailed user stories based on the needs of agents and rural users.',
          images: ['story.png'],
        },
        {
          title: 'Feature Prioritization',
          desc: 'Given the diverse needs of rural users and the constraints of their environment, designing the Agent Banking App required a laser focus on simplicity and functionality. Every feature was carefully selected to balance user needs with technical feasibility, ensuring that the solution could operate effectively even in areas with limited connectivity.',
          images: ['feature.png'],
        },
        {
          title: 'User Journey Mapping',
          desc: 'The user journey was crafted to ensure a seamless experience for both agents and rural users, with each interaction designed to build trust and confidence in the system.',
          images: ['journey.png'],
        },
        {
          title: 'User Flow',
          desc: "Once I'd prioritised the features that were an easy win, we went ahead to create a user flow.",
          images: ['flow.png'],
        },
        {
          title: 'Sketches and Wireframes',
          desc: 'Rapid, in-house iterations on paper and low-fidelity frames before committing to production designs.',
          images: ['wireframes.png'],
        },
        {
          title: 'From Research to Reality',
          images: ['final-1.png', 'final-2.png', 'final-3.png', 'final-4.png'],
        },
        {
          title: 'User Testing',
          desc: 'To validate the effectiveness of the Agent Banking App and ensure it met the needs of both agents and rural users, we conducted user testing as part of the design and development process. The goal was to assess usability, identify pain points, and gather actionable feedback for iterative improvements.',
        },
        {
          title: 'Key Findings',
          parts: [
            {
              label: 'Simplicity',
              text: 'Both agents and users found the interface intuitive, even for those with low digital literacy.',
            },
            {
              label: 'Offline Functionality',
              text: 'This feature was highly praised as it ensured service continuity in low-connectivity areas.',
            },
            {
              label: 'Transparency',
              text: 'Agents appreciated the detailed breakdown of their earnings in the commission dashboard.',
            },
            {
              label: 'Error Messaging',
              text: 'Some participants struggled with unclear or generic error messages during onboarding.',
            },
            {
              label: 'Syncing Delays',
              text: 'While offline functionality was appreciated, participants suggested clearer visual indicators for pending syncs.',
            },
            {
              label: 'Language Support',
              text: 'A few rural users requested additional local dialect options.',
            },
          ],
        },
        {
          title: 'Key Takeaways',
          parts: [
            {
              label: 'Empathy-Driven Design',
              text: 'Immersive research in rural communities ensured the solution addressed real user needs.',
            },
            {
              label: 'Scalable Systems',
              text: 'The design system streamlined development and ensured consistency across multiple deployments.',
            },
            {
              label: 'Innovative Business Model',
              text: 'The revenue-sharing model proved that financial inclusion could be profitable.',
            },
            {
              label: 'Simplicity Wins',
              text: 'By focusing on agents as intermediaries, the app eliminated barriers for low-literate users.',
            },
          ],
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
        'In 2023, I joined a health-tech company who was on a mission to help users quit smoking. They had recently acquired a game-changing product and needed my expertise to modernize it. The task was both challenging and ambitious: redesign their smoking cessation app to serve users in three distinct markets—the UK, Germany, and France. The product needed to integrate seamlessly with a physical CO2 measurement device, align with stringent EU health regulations, and incorporate behavioral science principles to create an engaging and effective user experience.',
        'Collaborating with a multidisciplinary team of technical product managers, developers, behavioral scientists, and regulatory experts, I set out to design an application that could track smoking habits, recommend nicotine replacement therapies (NRT), and foster community-driven support for users at every stage of their quit journey.',
      ],
      sections: [
        {
          title: "Let's Talk About the Business",
          desc: 'We targeted the rapidly growing smoking cessation industry, driven by increasing awareness of the health risks associated with smoking and government regulations aimed at reducing tobacco use. The market included nicotine replacement therapies (NRT), behavioral interventions, and digital health solutions.',
          parts: [
            {
              label: 'Market Size',
              text: 'The global smoking cessation market was valued at $21B in 2023 and is projected to grow at a 14.5% CAGR, reaching $45B by 2030.',
            },
            {
              label: 'Focus Markets',
              text: 'We focused on the UK, Germany, and France, where regulatory frameworks and public health campaigns support smoking cessation programs. These three countries alone accounted for 30% of the EU market.',
            },
          ],
        },
        {
          title: 'Revenue and Growth Projections',
          desc: 'The redesigned app aimed to drive revenue growth by leveraging three key revenue streams:',
          parts: [
            {
              label: 'Subscription Model',
              text: 'Monthly or annual subscriptions for premium app features.',
            },
            {
              label: 'In-App Purchases',
              text: 'Sales of NRT products and accessories directly through the app.',
            },
            {
              label: 'Corporate Partnerships',
              text: 'Collaborations with public health organizations and employers to offer coaching services.',
            },
          ],
        },
        {
          title: 'Projections',
          desc: 'The company positioned itself as a pioneer in digital health solutions, attracting attention from investors in the health-tech and digital wellness sectors. The redesign was a key part of their strategy to launch and release an IPO, which would support scaling the platform and entering new markets.',
          parts: [
            { label: 'Year 1 Revenue', text: '$20M from initial rollout in three countries.' },
            { label: 'Year 2 Revenue', text: '$50M from sales of NRT and the device.' },
            {
              label: 'Year 3 Revenue',
              text: '$100M with app penetration in additional EU markets and expanded offerings.',
            },
          ],
          images: ['project.png'],
        },
        {
          title: 'App Forecast',
          desc: 'The overarching goal was to create an engaging smoking cessation app that would:',
          parts: [
            {
              label: 'Expand Market Reach',
              text: 'Successfully launch in three European countries.',
            },
            { label: 'Drive User Adoption', text: 'Achieve a 60% onboarding success rate.' },
            {
              label: 'Increase Community Engagement',
              text: 'Target a 70% interaction rate.',
            },
            {
              label: 'Streamline the Design Process',
              text: 'Reduce development turnaround time by 40%.',
            },
          ],
        },
        {
          title: 'The Challenge',
          desc: 'In light of the business goal and revenue projection, we had a big task at hand to build a product good enough to attract and retain enough users.',
          images: ['challenge.png'],
          close:
            "This required a design that balanced the complexities of health regulations in the UK, Germany, and France, while aligning with psychological models of behavior change to support users in their quit journey. On top of this, the existing app lacked good interaction, wasn't optimized for behavior change, and needed to align with the brand's design system for scalability.\n\nIn essence, this was about creating a single, adaptable platform that could deliver value to diverse user groups, empower behavior change, and comply with strict healthcare requirements—without overwhelming the development process or sacrificing quality.",
        },
        {
          title: 'The Research: Understanding the Users',
          desc: 'To design an effective smoking cessation app, user research was central to uncovering the needs, pain points, and behaviors of users. Leveraging insights from the behavioral scientists\u2019 research, the COM-B framework, and competitor analysis, I conducted a deep dive into the user base across three markets: UK, Germany, and France.',
        },
        {
          title: 'Research Goals',
          desc: 'The primary objectives were to:',
          bullets: [
            "Understand users' motivations, barriers, and readiness to quit smoking.",
            'Assess how users engaged with existing smoking cessation tools.',
            'Identify opportunities for incorporating behavioral science into the app experience.',
          ],
        },
        {
          title: 'Research Methods Employed',
          parts: [
            {
              label: 'Behavioral Science Integration',
              text: 'Analyzed research data provided by the behavioral team, including user interviews and surveys conducted with individuals at different stages of the quitting journey.',
            },
            {
              label: 'Market and Competitor Analysis',
              text: 'Evaluated similar apps to identify features that worked well and gaps we could address.',
            },
            {
              label: 'User Persona Workshops',
              text: 'Conducted workshops with behavioral scientists and product stakeholders to refine and expand user personas.',
            },
            {
              label: 'COM-B Framework Application',
              text: 'Mapped user capabilities, opportunities, and motivations to understand the psychological, social, and environmental factors influencing their behaviors.',
            },
          ],
          images: ['process.webp'],
        },
        {
          title: 'Key Findings',
          images: ['findings.png'],
        },
        {
          title: 'Feature Prioritization',
          desc: 'The feature prioritization matrix provides a clear roadmap for delivering impactful, user-centered functionalities. The Do Now quadrant focuses on core features to drive immediate user adoption and engagement. The Do Next quadrant prioritizes enhancements which foster long-term motivation and support. Features in the Do Later quadrant are valuable but secondary to the app\u2019s initial success. Features in the Don\u2019t Do quadrant are deprioritized due to limited user impact.',
          images: ['feature.png'],
        },
        {
          title: 'Information Architecture',
          desc: 'The next step was to create the Information Architecture, which organises and structures the content of the app to help users find information and complete tasks efficiently.',
          images: ['IA.webp'],
        },
        {
          title: 'The Old App Design',
          images: ['old-app.webp'],
        },
        {
          title: 'Final Designs',
          images: ['final-1.png', 'final-2.png', 'final-3.png', 'final-4.png'],
        },
        {
          title: 'User Testing',
          desc: 'To evaluate the effectiveness of the designs and new features created, we performed usability testing. 15 participants were recruited for the semi-structured testing.',
        },
        {
          title: 'Summary of Testing',
          bullets: [
            'Overall, users found the app intuitive and easy to navigate.',
            'Interactive tools and games were particularly well-received.',
            'Progress tracking and data analytics provided valuable insights to users.',
            'Add a quick log feature for daily smoking activity.',
          ],
        },
        {
          title: 'Business Impact',
          desc: 'The redesigned app launched successfully in the UK delivering measurable results:',
          parts: [
            {
              label: 'User Adoption',
              text: 'Onboarding success improved by 60%, thanks to the streamlined flow and localized design.',
            },
            {
              label: 'App Downloads',
              text: 'Achieved 30,000 downloads in the first month across iOS and Android platforms.',
            },
            {
              label: 'Community Engagement',
              text: 'The new community hub saw a 70% engagement rate, fostering peer support and motivation.',
            },
            {
              label: 'In-App Purchases',
              text: 'Sales of nicotine replacement therapies (NRTs) generated a 15% increase in revenue compared to the previous version.',
            },
          ],
          images: ['impact.png'],
        },
        {
          title: 'Overcoming Constraints',
          parts: [
            {
              label: 'Regulatory Challenges',
              text: 'Working closely with the legal team, I navigated EU regulations to ensure the app met health and privacy standards in all three countries. By building on existing frameworks and identifying gray areas, we avoided unnecessary delays and reduced compliance costs.',
            },
            {
              label: 'Development Constraints',
              text: 'Given tight deadlines, I optimized existing design tools instead of creating components from scratch, enabling faster implementation and alignment with developers\u2019 tools.',
            },
          ],
        },
      ],
    },
  },
  {
    id: '05',
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
          images: ['business.png'],
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
          images: ['problem.png'],
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
          images: ['personas.png'],
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
          images: ['ia.png', 'ia-2.png'],
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
          images: ['final-cashier.png'],
        },
        {
          title: 'Results & Impact',
          images: ['results.png'],
        },
      ],
    },
  },
] as const
