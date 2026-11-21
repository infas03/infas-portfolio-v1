// All of the site's content lives here. Edit this file to change text, links, jobs and projects.

export const site = {
  name: 'H Mohamed Infas',
  firstName: 'H Mohamed',
  lastName: 'Infas',
  fullName: 'Hamdullah Mohamed Infas',
  role: 'Senior Full Stack Developer',
  roles: ['Senior Full Stack Developer', 'React & React Native Developer', 'Node.js & AWS Developer'],
  intro: 'I build web and mobile apps with React, React Native and Node.js, and run them on AWS.',
  status: 'Senior Full Stack Engineer at OPPTY',
  location: 'Sri Lanka · Remote',
  email: 'infasmax03@gmail.com',
  phone: '+94 777 348 425',
  phoneHref: 'tel:+94777348425',
  whatsapp: 'https://wa.me/94777348425',
  // Contact form delivery. Get a free access key at https://web3forms.com (enter the email that should
  // receive messages, the key is emailed to you) and paste it here. While it is empty, the form falls
  // back to opening the visitor's email app.
  web3formsKey: '464d757b-2c5c-4151-bfb1-63c54931cece',
  github: 'https://github.com/infas03',
  linkedin: 'https://linkedin.com/in/hminfas',
  resume: '/HM_Infas_Resume.pdf',
  description:
    'Senior Full Stack Developer with 7+ years of experience in React, React Native, Node.js, TypeScript and AWS.',
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const heroBadges = [
  { label: 'React.js', icon: 'si:react', pos: 'top-[6%] right-[-2%]', delay: '0s' },
  { label: 'Node.js', icon: 'si:nodedotjs', pos: 'top-[30%] left-[-6%]', delay: '-1.6s' },
  { label: 'TypeScript', icon: 'si:typescript', pos: 'bottom-[14%] left-[-2%]', delay: '-3.1s' },
  { label: 'AWS', icon: 'si:amazonwebservices', pos: 'bottom-[24%] right-[-6%]', delay: '-2.2s' },
];

export const about = {
  heading: 'Full stack developer working across web, mobile and backend.',
  paragraphs: [
    'I have 7+ years of experience. I currently work at OPPTY, a Singapore company, where I led the v1.0 and v2.0 releases of the web and mobile apps.',
    'On the front end I work in React, Next.js and TypeScript, usually building from Figma designs. On mobile I use React Native and handle the App Store and Google Play releases. On the back end I write Node.js services with Express or NestJS on MongoDB, MySQL, Redis and RabbitMQ, and I run them on AWS with Docker and Terraform.',
    'I have worked with teams and clients in Singapore, the UK and the US.',
  ],
  stats: [
    { value: 7, suffix: '+', label: 'Years of experience' },
    { value: 5, suffix: '', label: 'Products built' },
    { value: 4, suffix: '', label: 'Companies' },
  ],
  education: {
    degree: 'BSc (Hons) in Information Technology',
    school: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: '2017 to 2021',
  },
};

export const services = [
  {
    icon: 'lucide:app-window',
    title: 'Web Applications',
    text: 'Web apps in React, Next.js and TypeScript, built from Figma designs into reusable components.',
  },
  {
    icon: 'lucide:smartphone',
    title: 'Mobile Apps',
    text: 'iOS and Android apps in React Native, including push notifications, over-the-air updates and store releases.',
  },
  {
    icon: 'lucide:server',
    title: 'Backend & APIs',
    text: 'REST APIs, microservices and event-driven services in Node.js, Express and NestJS, on MongoDB, MySQL, Redis and RabbitMQ.',
  },
  {
    icon: 'lucide:cloud',
    title: 'Cloud & DevOps',
    text: 'AWS setups on S3, Lambda, EventBridge and EC2, written as Terraform, run in Docker and deployed through CI/CD.',
  },
  {
    icon: 'lucide:radio',
    title: 'Real-Time & AI Features',
    text: 'Live dashboards over Socket.io and WebSockets, and GenAI chatbot features connected to web and mobile clients.',
  },
  {
    icon: 'lucide:shield-check',
    title: 'Security & Testing',
    text: 'OAuth 2.0, JWT and role-based access, plus Jest unit and integration tests and code reviews.',
  },
];

export const techMarquee = [
  [
    { label: 'React', icon: 'si:react' },
    { label: 'Next.js', icon: 'si:nextdotjs' },
    { label: 'TypeScript', icon: 'si:typescript' },
    { label: 'JavaScript', icon: 'si:javascript' },
    { label: 'React Native', icon: 'si:react' },
    { label: 'Expo', icon: 'si:expo' },
    { label: 'Redux Toolkit', icon: 'si:redux' },
    { label: 'TanStack Query', icon: 'si:reactquery' },
    { label: 'Tailwind CSS', icon: 'si:tailwindcss' },
    { label: 'Material-UI', icon: 'si:mui' },
    { label: 'SASS', icon: 'si:sass' },
    { label: 'Figma', icon: 'si:figma' },
    { label: 'Jest', icon: 'si:jest' },
  ],
  [
    { label: 'Node.js', icon: 'si:nodedotjs' },
    { label: 'Express', icon: 'si:express' },
    { label: 'NestJS', icon: 'si:nestjs' },
    { label: 'Socket.io', icon: 'si:socketdotio' },
    { label: 'MongoDB', icon: 'si:mongodb' },
    { label: 'MySQL', icon: 'si:mysql' },
    { label: 'Prisma', icon: 'si:prisma' },
    { label: 'Redis', icon: 'si:redis' },
    { label: 'RabbitMQ', icon: 'si:rabbitmq' },
    { label: 'AWS', icon: 'si:amazonwebservices' },
    { label: 'Terraform', icon: 'si:terraform' },
    { label: 'Docker', icon: 'si:docker' },
    { label: 'GitHub Actions', icon: 'si:githubactions' },
    { label: 'Firebase', icon: 'si:firebase' },
  ],
];

export const skillGroups = [
  {
    icon: 'lucide:layout-grid',
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'React Hook Form', 'Tailwind CSS', 'Material-UI', 'SASS', 'Design Systems'],
  },
  {
    icon: 'lucide:layers',
    title: 'State & Data',
    items: ['Redux Toolkit', 'TanStack Query', 'Context API', 'Caching', 'Memoisation', 'List Virtualisation'],
  },
  {
    icon: 'lucide:server',
    title: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'Microservices', 'Event-Driven Architecture', 'Socket.io / WebSockets'],
  },
  {
    icon: 'lucide:database',
    title: 'Databases & Messaging',
    items: ['MongoDB', 'MySQL', 'Prisma', 'Redis', 'RabbitMQ'],
  },
  {
    icon: 'lucide:cloud',
    title: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, Lambda, EventBridge)', 'Terraform', 'Docker', 'CI/CD Pipelines', 'GitHub Actions', 'GitLab CI', 'Firebase'],
  },
  {
    icon: 'lucide:smartphone',
    title: 'Mobile',
    items: ['React Native (Expo & CLI)', 'iOS & Android', 'Push Notifications', 'Over-the-Air Updates', 'App Store & Google Play'],
  },
  {
    icon: 'lucide:shield-check',
    title: 'Security & Testing',
    items: ['OAuth 2.0', 'JWT', 'Role-Based Access', 'Secure Coding', 'Jest', 'Unit & Integration Testing', 'TDD'],
  },
  {
    icon: 'lucide:bot',
    title: 'AI-Assisted Development',
    items: ['Claude Code', 'GitHub Copilot', 'Cursor', 'LLM Integration', 'GenAI Chatbots'],
  },
];

export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'OPPTY',
    place: 'Singapore (Remote)',
    period: 'Mar 2023 to Present',
    current: true,
    points: [
      'Led the OppTy v1.0 and v2.0 releases across web, mobile and backend, from Figma designs to production and app store release.',
      'Built REST APIs and event-driven services in Node.js with Redis and RabbitMQ, streaming real-time data over Socket.io into live dashboards.',
      'Authored a typed, documented React component library so the team could build features in parallel.',
      'Designed and ran the AWS architecture on S3, Lambda, EventBridge and EC2, provisioned as code with Terraform.',
      'Integrated GenAI chatbot features, mentored junior developers and took part in code reviews every sprint.',
    ],
    tags: ['React.js', 'React Native', 'Node.js', 'AWS', 'Terraform', 'GenAI'],
  },
  {
    role: 'Software Engineer',
    company: 'ExcelGames Interactive',
    place: 'Singapore',
    period: 'Feb 2022 to Apr 2023',
    current: false,
    points: [
      'Built real-time dashboards in React.js, Next.js and React Native (Expo) that rendered live data streaming from BLE hardware.',
      'Set up AWS infrastructure with Terraform, ran services in Docker, and added Redis caching and RabbitMQ background jobs to keep heavy screens responsive.',
      'Secured REST APIs with OAuth 2.0, JWT and role-based access, and fixed XSS, CSRF and injection vulnerabilities.',
    ],
    tags: ['Next.js', 'React Native', 'BLE', 'Redis', 'RabbitMQ', 'Jest'],
  },
  {
    role: 'Full Stack Developer',
    company: 'GroundZero Holdings',
    place: 'Sri Lanka',
    period: 'Dec 2019 to Nov 2021',
    current: false,
    points: [
      'Built a social platform with an integrated job board for a UK client in React.js, Redux and React Native.',
      'Set up CI/CD and AWS deployments on EC2 and S3, and tuned the Node.js and MongoDB backend for a live production application.',
    ],
    tags: ['React.js', 'Redux', 'React Native', 'Node.js', 'MongoDB'],
  },
  {
    role: 'Software Engineer Trainee',
    company: 'SLIIT',
    place: 'Sri Lanka',
    period: 'Feb 2019 to Aug 2019',
    current: false,
    points: [
      'Worked on full-stack web projects, designed user flows and prototypes in Figma, and broke down requirements and user stories for the team.',
    ],
    tags: ['Full Stack', 'Figma', 'Agile'],
  },
];

export const projects = [
  {
    art: 'venue',
    title: 'Maya',
    kind: 'B2B Sports Venue Platform',
    text: 'A B2B platform for managing sports venues across golf, football and grassroots fields, covering bookings, scheduling and day to day operations. I built the React web client and the React Native app on a Node.js and MongoDB API.',
    tags: ['React.js', 'React Native', 'TypeScript', 'TanStack Query', 'Node.js', 'MongoDB', 'AWS', 'Terraform'],
    featured: true,
  },
  {
    art: 'platform',
    title: 'OppTy v2.0',
    kind: 'Web & Mobile Platform',
    text: 'Led the release: reworked the React component architecture, delivered the mobile app for iOS and Android, added GenAI features, applied secure coding and tuned response times. Live in production.',
    tags: ['React.js', 'React Native (Expo)', 'Redux', 'Socket.io', 'Redis', 'AWS', 'Docker'],
    featured: true,
  },
  {
    art: 'payroll',
    title: 'HRSimplify',
    kind: 'Internal HR & Payroll System',
    text: 'An HR and payroll system with live Socket.io dashboards, responsive web and mobile screens, and reusable React components and forms for payroll, leave and reporting.',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Socket.io', 'MongoDB'],
    featured: false,
  },
  {
    art: 'ble',
    title: 'InCube Labs',
    kind: 'Medical BLE Diagnostic Tool · US Client',
    text: 'A medical tool that tracks tablet intake over Bluetooth Low Energy, rendering live hardware data in a React and TypeScript front-end with full Jest coverage.',
    tags: ['Next.js', 'NestJS', 'React Native (CLI)', 'BLE', 'MySQL', 'Prisma', 'Jest'],
    featured: false,
  },
  {
    art: 'social',
    title: 'TellWhom',
    kind: 'Social Job Board · UK Client',
    text: 'I handled the front end: React components, Redux state management, a cross-platform React Native app and JWT authentication.',
    tags: ['React.js', 'Redux', 'React Native', 'Node.js', 'MongoDB', 'JWT'],
    featured: false,
  },
];
