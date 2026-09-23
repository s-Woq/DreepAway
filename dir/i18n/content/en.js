// ---------------------------------------------------------------------------
// English content — shared base (used by both the US and GLOBAL markets),
// plus per-market overrides merged on top.
// ---------------------------------------------------------------------------

export const shared = {
  faqLabel: 'FAQ',

  problem: {
    eyebrow: 'The Economics',
    h2: 'Why pay more for the same capability?',
    leftTitle: 'Traditional U.S. Hiring',
    left: [
      'Higher compensation costs',
      'Benefits & payroll overhead',
      'Recruiting & onboarding costs',
      'Office & infrastructure',
      'Limited local talent pool',
      'Slower scaling',
    ],
    rightTitle: 'Global Talent',
    right: [
      'Competitive compensation',
      'Professional, vetted talent',
      'Managed sourcing & screening',
      'Remote-ready infrastructure',
      'Direct access to talent in Peru',
      'International scalability',
    ],
  },

  cost: {
    eyebrow: '2025 Software Developer Salary Comparison',
    h2: ['Lower cost.', 'Not lower standards.'],
    usLabel: 'U.S. average annual gross salary',
    intlLabel: 'Peru average annual gross salary',
    diffLabel: 'Lower average salary in Peru',
    note: '2025 software developer salary averages. Salary comparison only; total employer costs differ. Actual compensation varies by role, seniority, and experience.',
    cta: 'Calculate your savings',
  },

  talent: {
    eyebrow: 'The Talent',
    h2: 'The people behind the advantage.',
    roles: [
      { n: '01', t: 'Software', d: 'Engineers, developers, and technical leads.' },
      { n: '02', t: 'Sales', d: 'Bilingual sales development and account management.' },
      { n: '03', t: 'Customer Support', d: 'English and Spanish support professionals.' },
      { n: '04', t: 'Finance', d: 'Analysts, bookkeepers, and finance operations.' },
      { n: '05', t: 'Operations', d: 'Operations specialists and coordinators.' },
      { n: '06', t: 'Marketing', d: 'Content, performance, and brand marketers.' },
      { n: '07', t: 'Administration', d: 'Executive support and administrative operations.' },
      { n: '08', t: 'Data & Analytics', d: 'Data analysts and reporting specialists.' },
    ],
    explore: 'Explore talent',
    imgAlt: (t) => `Editorial portrait representing ${t} professionals in Peru`,
  },

  whyPeru: {
    eyebrow: 'Why Peru',
    title1: 'WHY',
    title2: 'PERU?',
    phrases: [
      { k: '01', t: 'Skilled Talent', d: 'A growing professional workforce across technology, finance, sales, and operations.' },
      { k: '02', t: 'Bilingual Capability', d: 'Spanish and English communication for seamless collaboration with U.S. teams.' },
      { k: '03', t: 'Time-Zone Alignment', d: 'Convenient working-hour overlap with U.S. Eastern Time — and Miami business hours.' },
      { k: '04', t: 'Competitive Costs', d: 'A more efficient cost structure without compromising professional standards.' },
      { k: '05', t: 'Global Teams', d: 'A technology and professional-services ecosystem built for international work.' },
    ],
  },

  how: {
    eyebrow: 'How It Works',
    h2: 'A precise, deliberate process.',
    steps: [
      { n: '01', t: 'Discover', d: 'Understand the role, requirements, budget, culture, and goals.' },
      { n: '02', t: 'Source', d: 'Find qualified professionals in Peru aligned to your needs.' },
      { n: '03', t: 'Screen', d: 'Evaluate experience, skills, communication, and English where relevant.' },
      { n: '04', t: 'Match', d: 'Present candidates aligned with the role and your team.' },
      { n: '05', t: 'Onboard', d: 'Help establish the working relationship and integration.' },
      { n: '06', t: 'Scale', d: 'Expand the team as your business grows.' },
    ],
    cta: 'See how it works',
  },

  quality: {
    eyebrow: 'Quality',
    h2: ['Lower cost.', 'Global standards.'],
    stages: [
      { t: 'Sourcing', d: 'Targeted identification of professionals across Peru.' },
      { t: 'Screening', d: 'Initial evaluation of background and experience.' },
      { t: 'Skills Assessment', d: 'Role-specific evaluation of technical and functional capability.' },
      { t: 'Language Evaluation', d: 'English and Spanish communication assessment where relevant.' },
      { t: 'Cultural Fit', d: 'Alignment with your team and working style.' },
      { t: 'Client Interview', d: 'You meet the candidate and make the call.' },
      { t: 'Onboarding', d: 'Structured integration into your workflow.' },
    ],
    note: 'Cost efficiency does not mean eliminating standards. Every candidate moves through a deliberate evaluation before they ever reach your team.',
  },

  languages: {
    eyebrow: 'Languages',
    h2: 'Talent that speaks your language.',
    items: [
      { t: 'English', d: 'Professional working proficiency, evaluated against the requirements of each role during screening.' },
      { t: 'Spanish', d: 'Native professional Spanish, with English capability assessed for bilingual roles.' },
    ],
    note: 'We currently verify English and Spanish capability. Additional languages will be listed as our vetted talent network grows.',
  },

  international: {
    eyebrow: 'International',
    h2lines: ['Built for', 'global teams.'],
    nodes: ['MIAMI', 'USA', 'PERU', 'GLOBAL'],
  },

  calculator: {
    eyebrow: 'Savings Calculator',
    h2: 'What could your team cost?',
    employees: 'Number of employees',
    salary: 'Avg. U.S. annual compensation',
    category: 'Role / Category',
    categories: ['Software', 'Sales', 'Customer Support', 'Finance', 'Operations', 'Marketing', 'Administration', 'Data & Analytics'],
    usCost: 'Estimated U.S. staffing cost',
    intlRange: 'Illustrative international range',
    diff: 'Potential annual difference',
    disclaimer: 'Estimates are illustrative only. Actual costs vary by role, seniority, compensation, benefits, employment structure, and other operating expenses.',
    cta1: 'Calculate your savings',
    cta2: 'Talk to an expert',
    cta1To: 'contact',
    cta2To: 'contact',
  },

  social: {
    eyebrow: 'In their words',
    quote: '“A real extension of our team — not a vendor. The working-hour overlap with Lima made it feel like they were down the hall.”',
    by: 'Client Partner',
    context: 'Miami-based technology company',
    note: 'Testimonials are shown as designed placeholders and will be replaced with verified client references.',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Start a conversation.',
    intro: 'Tell us what you\u2019re building. We\u2019ll help you determine whether international talent is the right fit for your team.',
    direct: 'Direct',
    locationsLabel: 'Locations',
    locations: 'Miami, Florida\nPeru',
    responseLabel: 'Response',
    response: 'Typically within one business day.',
    fields: { name: 'Full name', email: 'Work email', company: 'Company', roles: 'Roles you\u2019re hiring for', building: 'What are you building?' },
    submit: 'Build Your Team',
    sentLabel: 'Received',
    sentTitle: 'Thank you. We\u2019ll be in touch.',
    sentText: 'A member of our team will reach out shortly to learn about what you\u2019re building.',
  },

  footer: {
    tagline: ['Global talent.', 'Without the global overhead.'],
    navTitle: 'Navigation',
    nav: [
      { key: 'talent', label: 'Talent' },
      { key: 'how', label: 'How It Works' },
      { key: 'why', label: 'Why Peru' },
      { key: 'industries', label: 'Industries' },
      { key: 'contact', label: 'Contact' },
    ],
    locationsLabel: 'Locations',
    locations: 'Miami, Florida\nPeru',
    connectLabel: 'Connect',
    rights: 'All rights reserved.',
    privacy: 'Privacy',
    terms: 'Terms',
  },

  industries: {
    eyebrow: 'Industries',
    h1: 'Talent across the functions you need.',
    intro: 'From software to customer support, we connect companies with vetted Peruvian professionals across the categories that matter most.',
    list: [
      { slug: 'customer-support', t: 'Customer Support', d: 'Bilingual support professionals for English and Spanish.' },
      { slug: 'sales', t: 'Sales', d: 'Sales development and account management talent.' },
      { slug: 'technology', t: 'Technology', d: 'Engineers, developers, and technical leads.' },
      { slug: 'finance', t: 'Finance', d: 'Analysts, bookkeepers, and finance operations.' },
      { slug: 'operations', t: 'Operations', d: 'Operations specialists and coordinators.' },
      { slug: 'marketing', t: 'Marketing', d: 'Content, performance, and brand marketers.' },
      { slug: 'administration', t: 'Administration', d: 'Executive support and administrative operations.' },
      { slug: 'data-analytics', t: 'Data & Analytics', d: 'Data analysts and reporting specialists.' },
    ],
    detail: {
      'customer-support': {
        title: 'Customer Support',
        h1: 'Bilingual customer support, built for U.S. teams.',
        intro: 'English and Spanish support professionals in Peru, aligned to your working hours and trained to represent your brand.',
        sections: [
          { h: 'Support that feels in-house', p: 'Our Peruvian customer support professionals handle English and Spanish interactions across chat, email, and phone — with working-hour overlap that keeps them live when your customers need them.' },
          { h: 'Screened for communication', p: 'Every candidate is evaluated for language capability, empathy, and problem-solving before reaching your team.' },
        ],
        faq: [
          { q: 'Do support professionals speak English fluently?', a: 'Yes. English capability is assessed during screening and matched to the demands of each support channel.' },
          { q: 'Can they cover U.S. business hours?', a: 'Yes. Peru\u2019s time zone aligns closely with U.S. Eastern Time, making full coverage of U.S. business hours practical.' },
        ],
      },
      sales: {
        title: 'Sales',
        h1: 'Sales talent that opens doors.',
        intro: 'Bilingual sales development and account management professionals who extend your pipeline without extending your payroll.',
        sections: [
          { h: 'Pipeline, extended', p: 'From SDRs to account executives, our Peruvian sales talent works your pipeline in English and Spanish — aligned to your sales motion and tools.' },
          { h: 'Vetted for drive', p: 'We screen for communication, resilience, and track record so your new sales hires are ready to contribute quickly.' },
        ],
        faq: [
          { q: 'Can sales reps work in English with U.S. prospects?', a: 'Yes. English fluency is evaluated during screening and matched to the requirements of each role.' },
          { q: 'Do they work in our CRM?', a: 'Yes. Candidates are assessed for familiarity with common sales tools and onboarded into your existing workflow.' },
        ],
      },
      technology: {
        title: 'Technology',
        h1: 'Software talent without the overhead.',
        intro: 'Engineers, developers, and technical leads in Peru — a growing technology ecosystem at a more efficient cost structure.',
        sections: [
          { h: 'Engineering, scaled', p: 'Access software engineers across front-end, back-end, full-stack, QA, and DevOps — screened for technical capability and communication.' },
          { h: 'Collaborative by design', p: 'Working-hour overlap with U.S. Eastern Time means real standups, real reviews, and real collaboration — not async-only handoffs.' },
        ],
        faq: [
          { q: 'What technical roles can you fill?', a: 'Front-end, back-end, full-stack, mobile, QA, data, and DevOps engineers, among others.' },
          { q: 'How do you assess technical skill?', a: 'Through role-specific skills assessment, technical evaluation, and structured interviews before candidates reach you.' },
        ],
      },
      finance: {
        title: 'Finance',
        h1: 'Finance operations, efficiently staffed.',
        intro: 'Analysts, bookkeepers, and finance operations professionals who keep your numbers moving — at a lower cost structure.',
        sections: [
          { h: 'Precision finance talent', p: 'From bookkeeping to financial analysis, our Peruvian finance professionals bring rigor and English communication to your finance function.' },
          { h: 'Aligned to your stack', p: 'Candidates are matched to your tools and processes for fast integration into your finance operations.' },
        ],
        faq: [
          { q: 'What finance roles can you staff?', a: 'Bookkeepers, financial analysts, accounting staff, and finance operations specialists.' },
          { q: 'Is English proficiency assessed?', a: 'Yes. English communication is evaluated during screening for finance roles that require it.' },
        ],
      },
      operations: {
        title: 'Operations',
        h1: 'Operations talent that keeps you moving.',
        intro: 'Operations specialists and coordinators in Peru who keep your business moving — without the overhead of local hiring.',
        sections: [
          { h: 'The details, handled', p: 'From project coordination to process management, our Peruvian operations professionals bring structure and English communication to your operations function.' },
          { h: 'Aligned to your workflow', p: 'Candidates are matched to your tools and processes for fast integration into your operations.' },
        ],
        faq: [
          { q: 'What operations roles can you staff?', a: 'Operations coordinators, project support, logistics, and process specialists.' },
          { q: 'Do they work your hours?', a: 'Yes. Working-hour overlap with U.S. Eastern Time makes real-time operations support practical.' },
        ],
      },
      marketing: {
        title: 'Marketing',
        h1: 'Marketing talent to grow your reach.',
        intro: 'Content, performance, and brand marketers in Peru who extend your marketing function efficiently.',
        sections: [
          { h: 'Full-funnel marketers', p: 'From content production to performance marketing and brand, our Peruvian marketing talent works across the funnel in English and Spanish.' },
          { h: 'Creative and measurable', p: 'Candidates are screened for craft and analytical capability — so marketing output moves metrics, not just makes content.' },
        ],
        faq: [
          { q: 'What marketing roles can you staff?', a: 'Content writers, performance marketers, SEO specialists, designers, and brand marketers.' },
          { q: 'Can they produce English content?', a: 'Yes. English writing and communication are assessed for marketing roles that require it.' },
        ],
      },
      administration: {
        title: 'Administration',
        h1: 'Administrative talent that keeps you moving.',
        intro: 'Executive support and administrative professionals who extend your operations without the overhead of local hiring.',
        sections: [
          { h: 'Support that scales', p: 'Executive assistants, coordinators, and administrative specialists who manage the details so your team can focus on the work.' },
          { h: 'Bilingual and organized', p: 'English and Spanish capability, evaluated for communication and organization before candidates reach you.' },
        ],
        faq: [
          { q: 'What administrative roles can you fill?', a: 'Executive assistants, administrative coordinators, operations support, and scheduling specialists.' },
          { q: 'Do they work your hours?', a: 'Yes. Working-hour overlap with U.S. Eastern Time makes real-time administrative support practical.' },
        ],
      },
      'data-analytics': {
        title: 'Data & Analytics',
        h1: 'Data talent that sharpens decisions.',
        intro: 'Data analysts and reporting specialists in Peru who turn your numbers into decisions — at a more efficient cost structure.',
        sections: [
          { h: 'Analysis, not just reporting', p: 'Our Peruvian data professionals work across analysis, visualization, and reporting — screened for analytical capability and communication.' },
          { h: 'Integrated with your stack', p: 'Candidates are assessed for familiarity with common analytics tools and onboarded into your existing data workflow.' },
        ],
        faq: [
          { q: 'What data roles can you staff?', a: 'Data analysts, reporting specialists, BI analysts, and analytics engineers.' },
          { q: 'How is technical skill assessed?', a: 'Through role-specific skills assessment, technical evaluation, and structured interviews before candidates reach you.' },
        ],
      },
    },
  },
};

// ---------------------------------------------------------------------------
// US market overrides (Miami, Florida — primary target)
// ---------------------------------------------------------------------------

export const us = {
  lang: 'en-US',

  nav: {
    links: [
      { key: 'talent', label: 'Talent' },
      { key: 'how', label: 'How It Works' },
      { key: 'why', label: 'Why Peru' },
      { key: 'industries', label: 'Industries' },
    ],
    cta: 'Build Your Team',
  },

  hero: {
    micro: 'MIAMI → PERU → GLOBAL',
    lines: ['GLOBAL TALENT.', 'WITHOUT THE', 'GLOBAL OVERHEAD.'],
    sub: 'Miami-based nearshore staffing connecting U.S. companies with exceptional professionals in Peru — with a significantly more efficient cost structure than traditional local hiring.',
    cta1: 'Build Your Team',
    cta2: 'Talk to an Expert',
    cta2To: 'contact',
  },

  connection: { mode: 'miami' },

  finalCta: {
    parts: ['YOUR NEXT GREAT', 'HIRE', 'COULD BE'],
    big: 'IN PERU.',
    sub: 'Tell us what you\u2019re building. We\u2019ll help you determine whether international talent is the right fit for your team.',
    cta1: 'Build Your Team',
    cta2: 'Talk to an Expert',
  },

  miami: {
    eyebrow: 'Miami, Florida',
    h2lines: ['Built for', 'Miami teams.'],
    p1: 'Miami sits at the intersection of U.S. business and Latin America. Our model allows Miami companies to extend their teams into Peru while maintaining compatible working hours and a streamlined hiring experience.',
    p2: 'For Miami businesses and Florida companies exploring nearshore staffing, Peru offers a natural extension of your team — not an outsourced function.',
    cta: 'Build your team',
  },

  meta: {
    home: {
      title: 'Nearshore Staffing in Miami | Peruvian Talent at Lower Cost',
      description: 'Build your team with vetted professionals in Peru. Our Miami-based nearshore staffing solutions connect U.S. companies with skilled Peruvian talent while reducing staffing costs.',
    },
    how: {
      title: 'How It Works | Nearshore Staffing Process — Vetta',
      description: 'Discover how Vetta sources, screens, and matches vetted Peruvian professionals with U.S. companies. A deliberate nearshore staffing process built for Miami teams.',
      eyebrow: 'How It Works',
      h1: 'A precise, deliberate process.',
      intro: 'From discovery to scale, every step is built to give you access to exceptional Peruvian talent — without the overhead of traditional hiring.',
      faq: [
        { q: 'How long does it take to hire talent in Peru through Vetta?', a: 'Timelines vary by role and seniority, but most placements move from discovery to candidate presentation within a few weeks.' },
        { q: 'Do candidates speak English?', a: 'Yes. English capability is evaluated during screening, and we assess communication level against the requirements of each role.' },
        { q: 'How do working hours overlap with Miami?', a: 'Peru shares convenient working-hour overlap with U.S. East Coast business hours, making real-time collaboration practical.' },
        { q: 'What roles can I hire for?', a: 'Software, sales, customer support, finance, operations, marketing, administration, and data and analytics — among others.' },
      ],
    },
    why: {
      title: 'Why Peru | Nearshore Talent for Miami & U.S. Teams — Vetta',
      description: 'Skilled talent, bilingual capability, time-zone alignment, and competitive costs. Why Peru is a strong nearshore staffing destination for U.S. companies.',
      eyebrow: 'Why Peru',
      h1: 'Why Peru?',
      intro: 'A growing professional workforce, bilingual capability, and working-hour alignment with Miami — at a more efficient cost structure than traditional U.S. hiring.',
      faq: [
        { q: 'Why hire talent in Peru instead of other LATAM countries?', a: 'Peru offers a growing professional workforce, bilingual capability, convenient U.S. time-zone overlap, and a competitive cost structure — a strong combination for nearshore staffing.' },
        { q: 'Is the time zone compatible with Miami?', a: 'Yes. Peru aligns closely with U.S. Eastern Time, making real-time collaboration with Miami teams practical throughout the business day.' },
        { q: 'What languages do Peruvian professionals speak?', a: 'Spanish is the primary language, and English capability is common among professionals — we assess English level against each role\u2019s requirements.' },
        { q: 'What industries is Peruvian talent strong in?', a: 'Technology, finance, sales, customer support, operations, marketing, administration, and data and analytics.' },
      ],
    },
    industries: {
      title: 'Industries | Nearshore Talent Categories — Vetta',
      description: 'Explore the Peruvian talent categories Vetta staffs for U.S. companies — customer support, sales, technology, finance, operations, marketing, administration, and data.',
      eyebrow: 'Industries',
      h1: 'Talent across the functions you need.',
      intro: 'From software to customer support, we connect Miami and U.S. companies with vetted Peruvian professionals across the categories that matter most.',
    },
    contact: {
      title: 'Contact | Build Your Nearshore Team in Peru — Vetta',
      description: 'Tell us what you\u2019re building. Talk to a nearshore staffing expert about building your team in Peru with Miami-aligned working hours and a more efficient cost structure.',
    },
  },

  landing: {
    'nearshore-staffing-miami': {
      title: 'Nearshore Staffing in Miami, FL | Vetted Peruvian Talent',
      description: 'Nearshore staffing services in Miami, FL. Vetta connects Miami businesses with vetted Peruvian professionals at a significantly lower cost structure than local hiring.',
      h1: 'Nearshore staffing, built for Miami.',
      intro: 'Miami businesses use Vetta to extend their teams into Peru — with compatible working hours, bilingual communication, and a more efficient cost structure than traditional Florida hiring.',
      sections: [
        { h: 'A Miami nearshore staffing partner', p: 'As a Miami-focused nearshore staffing partner, we help Miami companies access exceptional professionals in Peru without the overhead of traditional U.S. hiring. Our model is built around the realities of running a business in Miami — speed, cost discipline, and the need for talent that can collaborate in real time.' },
        { h: 'Compatible hours, bilingual talent', p: 'Peru shares convenient working-hour overlap with U.S. Eastern Time, so your nearshore team works alongside your Miami team — not a half-day behind. English and Spanish capability make integration seamless for Miami-based companies operating across Latin America.' },
        { h: 'Lower cost, not lower standards', p: 'Depending on role and seniority, companies can significantly reduce staffing costs through nearshore hiring in Peru — without eliminating standards. Every candidate moves through sourcing, screening, skills assessment, and language evaluation before they reach you.' },
      ],
      faq: [
        { q: 'What is nearshore staffing?', a: 'Nearshore staffing is the practice of hiring professionals in a nearby country with compatible time zones — for Miami, Peru offers strong working-hour overlap and bilingual talent.' },
        { q: 'Why Miami for nearshore staffing?', a: 'Miami sits at the intersection of U.S. business and Latin America, making it a natural hub for companies extending teams into Peru.' },
        { q: 'How much can Miami businesses save?', a: 'Savings vary by role, seniority, and engagement model. Use our calculator for an illustrative estimate, then talk to an expert for a role-specific assessment.' },
      ],
    },
    'peruvian-talent': {
      title: 'Peruvian Talent | Hire Vetted Professionals in Peru',
      description: 'Access vetted Peruvian talent — software, sales, support, finance, and more. Bilingual professionals in Peru aligned to U.S. working hours at a lower cost structure.',
      h1: 'Peruvian talent, without the borders.',
      intro: 'Vetta connects U.S. companies with vetted Peruvian professionals across software, sales, customer support, finance, operations, marketing, and administration.',
      sections: [
        { h: 'A growing professional workforce', p: 'Peru offers a growing ecosystem of skilled professionals across technology and professional services — with bilingual capability and working-hour alignment with the United States.' },
        { h: 'Vetted, not volume', p: 'We are not a high-volume staffing marketplace. Every Peruvian professional we present has been sourced, screened, and evaluated against the specific requirements of your role.' },
        { h: 'Built for international teams', p: 'Peruvian talent through Vetta is built for integration — English communication, compatible hours, and a deliberate onboarding process that makes your new hire feel like part of your team.' },
      ],
      faq: [
        { q: 'What kinds of Peruvian professionals can I hire?', a: 'Software, sales, customer support, finance, operations, marketing, administration, and data and analytics professionals.' },
        { q: 'Do Peruvian professionals speak English?', a: 'Many do. English capability is evaluated during screening and matched to each role\u2019s requirements.' },
        { q: 'How does hiring in Peru work?', a: 'We handle sourcing, screening, skills assessment, language evaluation, and presentation — you meet the candidate and make the call.' },
      ],
    },
    'remote-staffing-miami': {
      title: 'Remote Staffing in Miami | Hire Remote Talent in Peru',
      description: 'Remote staffing services for Miami companies. Hire vetted remote professionals in Peru with compatible hours and bilingual communication at a lower cost.',
      h1: 'Remote staffing for Miami companies.',
      intro: 'Miami companies use Vetta to hire vetted remote professionals in Peru — with working-hour overlap and bilingual communication built in.',
      sections: [
        { h: 'Remote, but real-time', p: 'Remote staffing only works when your team can actually work together. Peru\u2019s time-zone alignment with Miami means your remote hires are present for the meetings, reviews, and decisions that matter.' },
        { h: 'Vetted remote professionals', p: 'Every remote professional we place is screened for skills, communication, and English capability — so remote doesn\u2019t mean a leap of faith.' },
        { h: 'Built for Miami remote teams', p: 'Whether you\u2019re scaling a remote customer support team or extending engineering, our model is built around the needs of Miami-based companies hiring remotely.' },
      ],
      faq: [
        { q: 'What is remote staffing?', a: 'Remote staffing is hiring professionals who work remotely as part of your team — in Peru, with working-hour overlap with Miami.' },
        { q: 'Can remote staff work Miami hours?', a: 'Yes. Peru aligns closely with U.S. Eastern Time, making full coverage of Miami business hours practical.' },
        { q: 'How do you screen remote professionals?', a: 'Through skills assessment, language evaluation, and structured interviews before candidates reach you.' },
      ],
    },
    'staff-augmentation-miami': {
      title: 'Staff Augmentation in Miami | Extend Your Team with Peru',
      description: 'Staff augmentation services in Miami. Extend your team with vetted Peruvian professionals — flexible, compatible hours, lower cost than local contractors.',
      h1: 'Staff augmentation, without the friction.',
      intro: 'Extend your Miami team with vetted Peruvian professionals through staff augmentation — flexible, integrated, and more efficient than local contractors.',
      sections: [
        { h: 'Extend, don\u2019t rebuild', p: 'Staff augmentation lets you add capability to your existing team without the overhead of full local hiring. Our Peruvian professionals integrate into your workflow and your tools.' },
        { h: 'Flexible by design', p: 'Scale your team up as demand grows and adjust as priorities shift — without the fixed cost structure of expanding domestic headcount.' },
        { h: 'Vetted for integration', p: 'Every augmented staff member is screened for skills, communication, and English capability, then onboarded to work alongside your team — not around it.' },
      ],
      faq: [
        { q: 'What is staff augmentation?', a: 'Staff augmentation is adding vetted professionals to your existing team to extend capability — without the overhead of full-time local hiring.' },
        { q: 'How is staff augmentation different from outsourcing?', a: 'Augmented staff integrate directly into your team and workflow, rather than operating as a separate vendor function.' },
        { q: 'Can I scale augmented staff up and down?', a: 'Yes. Staff augmentation is designed to flex with your needs, subject to the terms of each engagement.' },
      ],
    },
    'bilingual-talent-miami': {
      title: 'Bilingual Talent in Miami | English & Spanish Professionals',
      description: 'Hire bilingual English and Spanish talent in Peru for Miami companies. Vetted bilingual professionals with compatible hours at a lower cost structure.',
      h1: 'Bilingual talent, built for Miami.',
      intro: 'Miami operates in two languages. Vetta connects Miami companies with vetted bilingual professionals in Peru — English and Spanish, aligned to your hours.',
      sections: [
        { h: 'Two languages, one team', p: 'For Miami businesses operating across English and Spanish, bilingual capability isn\u2019t optional. Our Peruvian professionals bring both — evaluated against the demands of each role.' },
        { h: 'Bilingual across functions', p: 'From customer support and sales to marketing and operations, we staff bilingual professionals across the functions Miami companies need most.' },
        { h: 'Screened for language', p: 'English and Spanish capability is assessed during screening, so bilingual means bilingual — not just listed on a resume.' },
      ],
      faq: [
        { q: 'What does bilingual talent mean at Vetta?', a: 'Professionals with evaluated English and Spanish capability, matched to the language requirements of each role.' },
        { q: 'Why hire bilingual talent in Peru?', a: 'Peru offers bilingual professionals with working-hour overlap with Miami and a more efficient cost structure than local bilingual hiring.' },
        { q: 'Which roles can be bilingual?', a: 'Customer support, sales, marketing, operations, administration, and more — any role where English and Spanish capability adds value.' },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// GLOBAL market overrides (borderless positioning)
// ---------------------------------------------------------------------------

export const globalMarket = {
  lang: 'en',

  nav: {
    links: [
      { key: 'talent', label: 'Talent' },
      { key: 'how', label: 'How It Works' },
      { key: 'why', label: 'Why Peru' },
      { key: 'industries', label: 'Industries' },
    ],
    cta: 'Build Your Global Team',
  },

  hero: {
    micro: 'PERU → GLOBAL',
    lines: ['BUILD YOUR TEAM.', 'WITHOUT', 'BORDERS.'],
    sub: 'Access exceptional professionals in Peru and build high-performing international teams with a more efficient global staffing model.',
    cta1: 'Build Your Team',
    cta2: 'Explore Talent',
    cta2To: 'talent',
  },

  connection: { mode: 'stack', words: ['PERU', 'USA', 'GLOBAL'] },

  problem: {
    leftTitle: 'Traditional Local Hiring',
  },

  calculator: {
    cta1: 'Start a conversation',
    cta2: 'Explore talent',
    cta2To: 'talent',
  },

  finalCta: {
    parts: ['YOUR NEXT GREAT', 'TEAM', 'COULD BE'],
    big: 'ANYWHERE.',
    sub: 'Tell us what you\u2019re building. We\u2019ll help you determine whether international talent is the right fit for your team.',
    cta1: 'Build Your Global Team',
    cta2: 'Start a Conversation',
  },

  meta: {
    home: {
      title: 'Global Talent Solutions | Nearshore Staffing from Peru — Vetta',
      description: 'Build international teams with vetted professionals in Peru. Global nearshore staffing with compatible time zones, bilingual talent, and a more efficient cost structure.',
    },
    how: {
      title: 'How It Works | Global Staffing Process — Vetta',
      description: 'Discover how Vetta sources, screens, and matches vetted Peruvian professionals with companies worldwide. A deliberate international staffing process.',
      eyebrow: 'How It Works',
      h1: 'A precise, deliberate process.',
      intro: 'From discovery to scale, every step is built to give you access to exceptional Peruvian talent — without the overhead of traditional hiring.',
      faq: [
        { q: 'How long does it take to hire talent in Peru through Vetta?', a: 'Timelines vary by role and seniority, but most placements move from discovery to candidate presentation within a few weeks.' },
        { q: 'Do candidates speak English?', a: 'Yes. English capability is evaluated during screening, and we assess communication level against the requirements of each role.' },
        { q: 'Which time zones work best with Peru?', a: 'Peru aligns closely with U.S. Eastern Time, making it especially practical for teams across the Americas.' },
        { q: 'What roles can I hire for?', a: 'Software, sales, customer support, finance, operations, marketing, administration, and data and analytics — among others.' },
      ],
    },
    why: {
      title: 'Why Peru | International Talent for Global Teams — Vetta',
      description: 'Skilled talent, bilingual capability, time-zone alignment, and competitive costs. Why Peru is a strong destination for international teams.',
      eyebrow: 'Why Peru',
      h1: 'Why Peru?',
      intro: 'A growing professional workforce, bilingual capability, and working-hour alignment with the Americas — at a more efficient cost structure than traditional hiring.',
      faq: [
        { q: 'Why hire talent in Peru?', a: 'Peru offers a growing professional workforce, bilingual capability, convenient time-zone overlap with the Americas, and a competitive cost structure — a strong combination for international teams.' },
        { q: 'Is the time zone compatible with the United States?', a: 'Yes. Peru aligns closely with U.S. Eastern Time, making real-time collaboration with U.S. teams practical throughout the business day.' },
        { q: 'What languages do Peruvian professionals speak?', a: 'Spanish is the primary language, and English capability is common among professionals — we assess English level against each role\u2019s requirements.' },
        { q: 'What industries is Peruvian talent strong in?', a: 'Technology, finance, sales, customer support, operations, marketing, administration, and data and analytics.' },
      ],
    },
    industries: {
      title: 'Industries | Global Talent Categories — Vetta',
      description: 'Explore the Peruvian talent categories Vetta staffs for international companies — customer support, sales, technology, finance, operations, marketing, administration, and data.',
      eyebrow: 'Industries',
      h1: 'Talent across the functions you need.',
      intro: 'From software to customer support, we connect companies around the world with vetted Peruvian professionals across the categories that matter most.',
    },
    contact: {
      title: 'Start a Conversation | Global Talent Solutions — Vetta',
      description: 'Tell us what you\u2019re building. Talk to a global staffing expert about building your international team with vetted professionals in Peru.',
    },
  },

  landing: {
    'nearshore-staffing': {
      title: 'Nearshore Staffing | Global Teams with Talent in Peru — Vetta',
      description: 'Nearshore staffing for international companies. Build teams with vetted professionals in Peru — compatible time zones, bilingual talent, and a more efficient cost structure.',
      h1: 'Nearshore staffing, without the borders.',
      intro: 'International companies use Vetta to extend their teams into Peru — with compatible working hours, bilingual communication, and a more efficient cost structure than traditional local hiring.',
      sections: [
        { h: 'A nearshore partner, not a vendor', p: 'Nearshore staffing means hiring professionals in a compatible time zone who work as a direct extension of your team. We help companies across the United States and beyond access exceptional professionals in Peru — without building an internal recruiting operation.' },
        { h: 'Time zones that work together', p: 'Peru shares convenient working-hour overlap with U.S. Eastern Time, so your nearshore team collaborates in real time — not across a half-day gap. For teams across the Americas, scheduling stays simple.' },
        { h: 'Lower cost, not lower standards', p: 'Depending on role and seniority, companies can significantly reduce staffing costs through nearshore hiring in Peru — without eliminating standards. Every candidate moves through sourcing, screening, skills assessment, and language evaluation before they reach you.' },
      ],
      faq: [
        { q: 'What is nearshore staffing?', a: 'Nearshore staffing is the practice of hiring professionals in a nearby or compatible time zone who work as a direct extension of your team.' },
        { q: 'Why Peru for nearshore staffing?', a: 'Peru offers a growing professional workforce, bilingual capability, convenient time-zone overlap with the Americas, and a competitive cost structure.' },
        { q: 'Is nearshore staffing only for U.S. companies?', a: 'No. We work with international companies — though teams in the Americas benefit most from Peru\u2019s working-hour alignment.' },
      ],
    },
    'peruvian-talent': {
      title: 'Peruvian Talent | Hire Vetted Professionals in Peru — Vetta',
      description: 'Access vetted Peruvian talent — software, sales, support, finance, and more. Bilingual professionals aligned to your working hours at a more efficient cost structure.',
      h1: 'Peruvian talent, without the borders.',
      intro: 'Vetta connects international companies with vetted Peruvian professionals across software, sales, customer support, finance, operations, marketing, administration, and data and analytics.',
      sections: [
        { h: 'A growing professional workforce', p: 'Peru offers a growing ecosystem of skilled professionals across technology and professional services — with bilingual capability and working-hour alignment across the Americas.' },
        { h: 'Vetted, not volume', p: 'We are not a high-volume staffing marketplace. Every Peruvian professional we present has been sourced, screened, and evaluated against the specific requirements of your role.' },
        { h: 'Built for international teams', p: 'Peruvian talent through Vetta is built for integration — English communication, compatible hours, and a deliberate onboarding process that makes your new hire feel like part of your team.' },
      ],
      faq: [
        { q: 'What kinds of Peruvian professionals can I hire?', a: 'Software, sales, customer support, finance, operations, marketing, administration, and data and analytics professionals.' },
        { q: 'Do Peruvian professionals speak English?', a: 'Many do. English capability is evaluated during screening and matched to each role\u2019s requirements.' },
        { q: 'How does hiring in Peru work?', a: 'We handle sourcing, screening, skills assessment, language evaluation, and presentation — you meet the candidate and make the call.' },
      ],
    },
    'outsourcing-peru': {
      title: 'Outsourcing to Peru | Nearshore Teams for International Companies',
      description: 'Outsourcing to Peru with Vetta means vetted professionals, compatible hours, and a lower cost structure — not a faceless vendor relationship. Build your team in Peru.',
      h1: 'Outsourcing to Peru, done right.',
      intro: 'Outsourcing to Peru should feel like extending your team — not handing off to a vendor. Vetta delivers vetted professionals who integrate into how you already work.',
      sections: [
        { h: 'Not a vendor — an extension', p: 'Traditional outsourcing often means faceless handoffs and quality surprises. Our model is different: vetted Peruvian professionals who work your hours, speak your language, and integrate into your workflow.' },
        { h: 'Outsourcing across functions', p: 'From software and customer support to finance and marketing, we staff the functions international companies most often extend into Peru — with a deliberate screening process behind every hire.' },
        { h: 'A better cost structure', p: 'Outsourcing to Peru offers a more efficient cost structure than domestic hiring, while maintaining professional standards through structured evaluation.' },
      ],
      faq: [
        { q: 'Is outsourcing to Peru the same as offshore outsourcing?', a: 'No. Peru is a nearshore destination with working-hour overlap with the Americas, making real-time collaboration practical.' },
        { q: 'What functions can I outsource to Peru?', a: 'Software, customer support, sales, finance, operations, marketing, administration, and data and analytics.' },
        { q: 'How is quality maintained?', a: 'Through sourcing, screening, skills assessment, language evaluation, cultural fit, and client interview before onboarding.' },
      ],
    },
    'remote-staffing': {
      title: 'Remote Staffing | Hire Remote Talent in Peru — Vetta',
      description: 'Remote staffing for international companies. Hire vetted remote professionals in Peru with compatible hours and bilingual communication at a lower cost structure.',
      h1: 'Remote staffing, built for real-time work.',
      intro: 'Hire vetted remote professionals in Peru — working-hour overlap, bilingual communication, and a deliberate screening process behind every hire.',
      sections: [
        { h: 'Remote, but real-time', p: 'Remote staffing only works when your team can actually work together. Peru\u2019s time-zone alignment means your remote hires are present for the meetings, reviews, and decisions that matter.' },
        { h: 'Vetted remote professionals', p: 'Every remote professional we place is screened for skills, communication, and English capability — so remote doesn\u2019t mean a leap of faith.' },
        { h: 'A global model, a team feel', p: 'Whether you\u2019re scaling a distributed support team or extending engineering, our model is built for companies hiring remote talent that works like an in-house team.' },
      ],
      faq: [
        { q: 'What is remote staffing?', a: 'Remote staffing is hiring professionals who work remotely as part of your team — in Peru, with convenient working-hour overlap across the Americas.' },
        { q: 'Can remote staff work U.S. hours?', a: 'Yes. Peru aligns closely with U.S. Eastern Time, making full coverage of U.S. business hours practical.' },
        { q: 'How do you screen remote professionals?', a: 'Through skills assessment, language evaluation, and structured interviews before candidates reach you.' },
      ],
    },
    'staff-augmentation': {
      title: 'Staff Augmentation | Extend Your Team with Peru — Vetta',
      description: 'Staff augmentation with vetted Peruvian professionals. Extend your team flexibly — compatible hours, integrated workflow, and a more efficient cost structure.',
      h1: 'Staff augmentation, without the friction.',
      intro: 'Extend your team with vetted Peruvian professionals through staff augmentation — flexible, integrated, and more efficient than expanding local headcount.',
      sections: [
        { h: 'Extend, don\u2019t rebuild', p: 'Staff augmentation lets you add capability to your existing team without the overhead of full local hiring. Our Peruvian professionals integrate into your workflow and your tools.' },
        { h: 'Flexible by design', p: 'Scale your team up as demand grows and adjust as priorities shift — without the fixed cost structure of expanding domestic headcount.' },
        { h: 'Vetted for integration', p: 'Every augmented staff member is screened for skills, communication, and English capability, then onboarded to work alongside your team — not around it.' },
      ],
      faq: [
        { q: 'What is staff augmentation?', a: 'Staff augmentation is adding vetted professionals to your existing team to extend capability — without the overhead of full-time local hiring.' },
        { q: 'How is staff augmentation different from outsourcing?', a: 'Augmented staff integrate directly into your team and workflow, rather than operating as a separate vendor function.' },
        { q: 'Can I scale augmented staff up and down?', a: 'Yes. Staff augmentation is designed to flex with your needs, subject to the terms of each engagement.' },
      ],
    },
  },
};
