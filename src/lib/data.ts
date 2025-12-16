import type { Faculty, News, Course, AdmissionRequirement } from './types';

export const faculty: Faculty[] = [
  {
    id: 'jamil-ahmed',
    name: 'Prof. Dr. Jamil Ahmed',
    title: 'Vice Chancellor',
    department: 'Office of the Vice Chancellor',
    image: 'https://picsum.photos/seed/vc/400/400',
    email: 'j.ahmed@awkum.edu',
    isVc: true,
    profile: {
      bio: "Prof. Dr. Jamil Ahmed is the esteemed Vice Chancellor of AWKUM University. With a distinguished career in academia and leadership, he has been instrumental in guiding the university towards excellence in research and education. His vision is to establish the university as a hub of innovation and a center for producing future leaders.",
      researchInterests: ['Higher Education Leadership', 'Academic Excellence', 'University Management', 'Research Development'],
      publications: [
        { title: 'A Vision for Modern Higher Education', link: '#' },
        { title: 'Fostering Research Culture in Universities', link: '#' },
      ],
    },
  },
  {
    id: 'hashim',
    name: 'Dr. Hashim',
    title: 'Professor',
    department: 'Computer Science',
    image: 'https://picsum.photos/seed/faculty1/400/400',
    email: 'hashim@awkum.edu',
    profile: {
      bio: "Dr. Hashim is a leading expert in artificial intelligence and machine learning. With over 20 years of experience in academia and industry, his research focuses on developing scalable and ethical AI systems. He has published over 150 papers in top-tier journals and conferences and holds several patents in neural network architecture. Dr. Hashim is passionate about mentoring the next generation of computer scientists and is the recipient of the University's Distinguished Teaching Award.",
      researchInterests: ['Deep Learning', 'Ethical AI', 'Natural Language Processing', 'Computer Vision'],
      publications: [
        { title: 'Architectures for Scalable Deep Learning', link: '#' },
        { title: 'Fairness and Transparency in AI', link: '#' },
        { title: 'A Novel Approach to Unsupervised Language Modeling', link: '#' },
      ],
    },
  },
  {
    id: 'nadeem-iqbal',
    name: 'Dr. Nadeem Iqbal',
    title: 'Professor',
    department: 'Computer Science',
    image: 'https://picsum.photos/seed/faculty2/400/400',
    email: 'n.iqbal@awkum.edu',
    profile: {
      bio: "Dr. Nadeem Iqbal's work is at the forefront of quantum computing and theoretical physics. His research group explores the fundamental properties of quantum mechanics and its applications in next-generation computing technologies. He is known for his engaging lectures that make complex topics accessible to students.",
      researchInterests: ['Quantum Computing', 'String Theory', 'Particle Physics', 'Astrophysics'],
      publications: [
        { title: 'Entanglement in Multi-Qubit Systems', link: '#' },
        { title: 'Probing the Nature of Dark Matter', link: '#' },
      ],
    },
  },
  {
    id: 'aftab-ahmed',
    name: 'Dr. Aftab Ahmed',
    title: 'Professor',
    department: 'English Literature',
    image: 'https://picsum.photos/seed/faculty3/400/400',
    email: 'a.ahmed@awkum.edu',
    profile: {
      bio: 'Dr. Aftab Ahmed is a renowned scholar of contemporary literature. His work examines the intersections of identity, language, and power in contemporary fiction. He is the author of three critically acclaimed books and serves as the editor for the "Journal of Modern Literary Studies." Dr. Ahmed is a passionate advocate for the humanities and is dedicated to fostering critical thinking and analytical skills in his students.',
      researchInterests: ['Post-Colonial Theory', 'Modernist Literature', 'Feminist Criticism', 'Global South Studies'],
      publications: [
        { title: 'The Empire Writes Back: A Re-evaluation', link: '#' },
        { title: 'Identity and Language in the Modern Novel', link: '#' },
      ],
    },
  },
  {
    id: 'maqsood-hayat',
    name: 'Dr. Maqsood Hayat',
    title: 'Professor',
    department: 'Business Administration',
    image: 'https://picsum.photos/seed/faculty4/400/400',
    email: 'm.hayat@awkum.edu',
    profile: {
      bio: "Dr. Maqsood Hayat is an expert in strategic management and corporate finance. With a background in both consulting and academia, he brings a unique real-world perspective to his teaching and research. His work focuses on sustainable business models and the impact of technology on financial markets. Dr. Hayat is a board member of several corporations and a frequent commentator on economic trends.",
      researchInterests: ['Strategic Management', 'Corporate Finance', 'Sustainable Business', 'FinTech'],
      publications: [
        { title: 'The Future of Sustainable Enterprise', link: '#' },
        { title: 'Disruptive Innovation in Financial Markets', link: '#' },
      ],
    },
  },
];

export const news: News[] = [
  {
    id: 'job-fair-2025',
    title: 'AWKUM Job Fair 2025 — December 18',
    date: '2024-12-18',
    category: 'Event',
    snippet: `AWKUM University will be hosting its Job Fair 2025 on December 18, bringing together students and graduates from universities and colleges across the region. Participants are invited to register and connect with leading employers offering promising career and internship opportunities.\n\nOrganizations are also encouraged to join the event as official sponsors, gaining extensive visibility and direct access to a diverse pool of talented job seekers.\n\nDon’t miss this premier career event.`,
    image: 'https://i.imgur.com/uTak5Gj.jpeg',
    action: {
      href: '#',
      text: 'Register / Sponsor Now'
    }
  },
  {
    id: 'human-rights-competition-2025',
    title: 'INTERNATIONAL HUMAN RIGHTS DAY COMPETITION 2025',
    date: '2025-12-10',
    category: 'News',
    snippet: 'Competition Categories:\n* Essay Writing\n* Painting Competition\n\nImportant Dates:\n* Deadline for Registration: 8 December 2025\n* Competition Date: 10 December 2025\nCompetition Time: 11:00\n\n📌 Essay Topic:\nWrite on any Human Rights–related theme.',
    image: 'https://i.imgur.com/gK613n6.jpeg',
    action: {
      href: '#',
      text: 'Details & Registration'
    }
  },
  {
    id: 'cbs-multiomics-collaboration',
    title: 'Character Building Society (CBS) Collaborates with Multiomics',
    date: '2024-10-26',
    category: 'Event',
    snippet: 'We are excited to share that Character Building Society (CBS) is now in official collaboration with Multiomics — a milestone achievement bringing advanced learning opportunities to AWKUM University!\n\nThis collaboration opens the door for you to explore the real research world, gain valuable skills, and elevate your academic journey. 🚀',
    image: 'https://i.imgur.com/5lFmE9A.jpeg',
    action: {
      href: '#',
      text: 'Register now'
    }
  },
  {
    id: 'fall-admissions-open',
    title: 'Fall 2025 Admissions Are Now Open',
    date: '2024-09-05',
    category: 'Announcement',
    snippet: 'Prospective students can now apply for undergraduate and graduate programs for the Fall 2025 semester. The priority deadline is January 15, 2025.',
    image: 'https://picsum.photos/seed/news1/600/400',
  },
];

export const courses: Course[] = [
    {
        code: 'CS101',
        title: 'Introduction to Computer Science',
        credits: 3,
        grade: 'A',
        progress: 100,
    },
    {
        code: 'MATH203',
        title: 'Linear Algebra',
        credits: 4,
        grade: 'B+',
        progress: 100,
    },
    {
        code: 'PHYS110',
        title: 'Classical Mechanics',
        credits: 4,
        grade: 'A-',
        progress: 100,
    },
    {
        code: 'ENGL150',
        title: 'Academic Writing',
        credits: 3,
        grade: 'In Progress',
        progress: 65,
    },
    {
        code: 'HIST200',
        title: 'World History: 1500-Present',
        credits: 3,
        grade: 'In Progress',
        progress: 70,
    },
];

export const admissionRequirements: AdmissionRequirement[] = [
    {
        id: 'undergraduate',
        title: 'Undergraduate Admissions',
        requirements: [
            { item: 'Completed Online Application', details: 'The application must be submitted via our online portal before the deadline.' },
            { item: 'Official High School Transcripts', details: 'Must be sent directly from your high school.' },
            { item: 'Standardized Test Scores (SAT/ACT)', details: 'Test-optional policy is in effect for Fall 2025 applicants.' },
            { item: 'Two Letters of Recommendation', details: 'From teachers or counselors who know you well.' },
            { item: 'Personal Essay', details: 'A 500-750 word essay on one of the provided prompts.' },
        ]
    },
    {
        id: 'graduate',
        title: 'Graduate Admissions (General)',
        requirements: [
            { item: 'Completed Online Application', details: 'Submitted via the graduate school portal.' },
            { item: "Bachelor's Degree", details: 'From an accredited institution.' },
            { item: 'Official University Transcripts', details: 'From all undergraduate and any previous graduate institutions.' },
            { item: 'GRE/GMAT Scores', details: 'May be required depending on the program. Check specific department requirements.' },
            { item: 'Statement of Purpose', details: 'Outlining your academic and research interests.' },
            { item: 'Three Letters of Recommendation', details: 'Preferably from academic sources.' },
            { item: 'Curriculum Vitae (CV)', details: 'Detailing your academic and professional experience.' },
        ]
    },
]
