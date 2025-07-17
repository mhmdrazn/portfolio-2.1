import {
  LinkedinIcon,
  GithubIcon,
  InstagramIcon,
  MediumIcon,
  BehanceIcon,
} from '@/components/ui/icons';
import {
  IconBriefcase,
  IconBrandGithub,
  IconBrandBehance,
  IconFileCertificate,
} from '@tabler/icons-react';
import { Linkedin } from 'lucide-react';
import { FaMedium } from 'react-icons/fa6';
import Image from 'next/image';

import StackIcon from 'tech-stack-icons';

export const socialLinks = [
  { href: 'https://linkedin.com/in/muhammadrazan', icon: <LinkedinIcon />, name: 'Linkedin' },
  { href: 'https://github.com/mhmdrazn', icon: <GithubIcon />, name: 'GitHub' },
  { href: 'https://www.behance.net/mhmdrazn', icon: <BehanceIcon />, name: 'Behance' },
  { href: 'https://www.instagram.com/mhmdrazn', icon: <InstagramIcon />, name: 'Instagram' },
  { href: 'https://www.medium.com/@mhmdrazn', icon: <MediumIcon />, name: 'Medium' },
];

export const socialLinksDark = [
  {
    href: 'https://www.medium.com/@mhmdrazn',
    icon: <FaMedium strokeWidth={2} width={28} height={28} className="h-full w-full" />,
    name: 'Medium',
  },
  {
    href: 'https://linkedin.com/in/muhammadrazan',
    icon: <Linkedin strokeWidth={1} className="h-full w-full" />,
    name: 'LinkedIn',
  },
  {
    href: 'https://github.com/mhmdrazn',
    icon: <IconBrandGithub stroke={1.25} className="h-full w-full" />,
    name: 'GitHub',
  },
  {
    href: 'https://www.behance.net/mhmdrazn',
    icon: <IconBrandBehance stroke={1} width={30} height={30} className="h-full w-full" />,
    name: 'Behance',
  },
  {
    href: 'https://www.papermark.io/view/cm5wdh7xe00061av5ktxo0aus',
    icon: <IconBriefcase className="w-full h-full" stroke={1} />,
    name: 'Portfolio',
  },
  {
    href: 'https://www.papermark.io/view/cm5wdajh5000u14d79vznrkb1',
    icon: <IconFileCertificate className="w-full h-full" stroke={1} />,
    name: 'Resume',
  },
];

export const action = [
  { href: 'https://www.papermark.io/view/cm5wdajh5000u14d79vznrkb1', label: 'Resume' },
  { href: 'https://www.papermark.io/view/cm5wdh7xe00061av5ktxo0aus', label: 'Portfolio' },
  { href: 'https://cal.com/hola-razan', label: 'Meet with me' },
  { href: '/uneg', label: 'Uneg-Uneg' },
];

export const quickLinks = [
  { href: '/', label: 'Home sweet home' },
  { href: '/exp', label: 'Experience & Journey' },
  { href: '/projects', label: 'Featured Projects' },
  { href: '/retros', label: 'Retrospective' },
];

export const experiences = [
  {
    position: 'Product Designer',
    company: 'AjakGerak',
    date: 'Jan 2024 - Now',
    link: 'https://www.linkedin.com/company/ajakgerak',
    description:
      "Ajak Gerak educational platform that provides academic training and self-development services for high school students who want to continue their studies at dream colleges, especially those who don't have the facilities and students in disadvantaged areas.",
    img: '/exp/ajakgerak.jpeg',
    job: [
      'Led the management and delivery of product outputs at AjakGerak',
      'Managed the Beasiswa #GerakBerdampak program, successfully overseeing 900+ applicants and empowering high school and gap year students to achieve their university aspirations.',
      'Designed AjakGerak’s Instagram content, creating engaging campaigns aligned with the organization’s mission.',
    ],
  },
  {
    position: 'UI/UX Designer',
    company: 'Beta U',
    date: 'Jun 2024 - Now',
    link: 'https://www.linkedin.com/company/beta-u',
    description:
      'BETA U is a dynamic Software House specializing in transforming ideas into Minimum Viable Products (MVPs) swiftly and creatively. With a keen understanding of project intricacies, BETA U collaborates closely with clients to bring their visions to life.',
    img: '/exp/betaulogo.svg',
    job: [
      'Designing and implementing user-friendly interfaces for web and mobile applications.',
      'Collaborating with cross-functional teams to gather requirements and translate them into intuitive designs.',
      'Conducting user research and testing to ensure the designs meet user needs and preferences.',
    ],
  },
  {
    position: 'Lead UI/UX Designer',
    company: 'ISE!',
    date: 'Jun 2024 - Now',
    link: 'https://www.ise-its.com/',
    description:
      'Information Systems Expo (ISE!) is an annual event organized by the Himpunan Mahasiswa Sistem Informasi (HMSI) which consists of a series of events in the fields of technology and business. ISE! aims to introduce the ITS Information Systems Department to the wider community through various works and achievements.',
    img: '/exp/ise.svg',
    job: [
      'Designing the ISE! 2024 website in collaboration with the creative team.',
      'Creating visually appealing user interfaces that enhance the overall aesthetic and branding.',
      'Developing seamless and intuitive user experiences to improve usability.',
      'Collaborating closely with cross-functional teams to ensure design consistency and functionality.',
    ],
  },
  {
    position: 'Lead UI/UX Designer',
    company: 'TEDxITS',
    date: 'Jan 2024 - May 2025',
    link: 'https://www.tedxits.org/',
    description:
      'TEDxITS 2024 is an event that provides a platform for the community, especially those within the ITS environment, to share their compelling ideas. The aim of this event is to disseminate ideas and concepts about new and previously unexplored topics. Our goal is to ignite discussions, foster connections, and build a sense of community.',
    img: '/exp/tedx.svg',
    job: [
      'Designed TEDxITS 2025 website, managing comprehensive development and user experience',
      'Led design team of six, collaborating with frontend developers and visual designers',
      'Streamlined design workflows to maintain project timelines and TEDxITS goals',
    ],
  },
  {
    position: 'Lead UI/UX Designer',
    company: 'Futurest',
    date: 'Oct 2024 - May 2025',
    link: 'https://www.futurest.id/',
    description:
      "FUTUREST (Future Energy Summit) stands as Indonesia's grand stage for renewable energy, orchestrated by SRE ITS, igniting students passion across the nation to pioneer energy transformation through innovative exploration and strategic implementation.",
    img: '/exp/futurest.svg',
    job: [
      'Led UI/UX design for Futurest 2025, managing workflow and six-designer team',
      'Conducted detailed design reviews ensuring quality outputs and project objectives',
      'Conducting user research and testing to ensure the designs meet user needs and preferences.',
    ],
  },
  {
    position: 'UI/UX Designer',
    company: 'SRE ITS',
    date: 'Jun 2024 - Jun 2025',
    link: 'https://www.sre-its.com/',
    description:
      'SRE ITS SC serves as an international-based renewable energy community that unites implementation, professional management competencies, contributes significantly to developing, and implementing sustainable renewable energy.',
    img: '/exp/sre.svg',
    job: [
      'Contributed to the redesign of the SRE ITS website, enhancing UX with a more intuitive and engaging interface.',
      "Designed new features to improve the website's sustainability, ensuring alignment with user needs and goals.",
      'Worked closely with the team to create a cohesive and effective digital experience.',
    ],
  },
  {
    position: 'UI/UX Designer',
    company: 'Ini Lho ITS',
    date: 'Apr 2024 - Des 24',
    link: 'https://www.ini.lho.its.ac.id/',
    description:
      'Ini Lho ITS! is a platform that introduces Institut Teknologi Sepuluh Nopember, providing insights into its academic life and faculties to high school students across Indonesia and beyond.',
    img: '/exp/ilits.svg',
    job: [
      'Played a key role in designing and refining user interfaces for Ini Lho ITS 2025.',
      'Translated project requirements into effective design solutions, maintaining consistency with the overall theme.',
      'Collaborated closely with the team to align design elements with project objectives.',
      'Supported frontend developers to ensure accurate implementation and functionality.',
    ],
  },
];

export const techStacks = [
  {
    name: 'Figma',
    icon: <StackIcon name="figma" />,
  },
  {
    name: 'Framer',
    icon: <StackIcon name="framer" />,
  },
  {
    name: 'Miro',
    icon: <StackIcon name="miro" />,
  },
  {
    name: 'Slack',
    icon: <StackIcon name="slack" />,
  },
  {
    name: 'JavaScript',
    icon: <StackIcon name="js" />,
  },
  {
    name: 'TypeScript',
    icon: <StackIcon name="typescript" />,
  },
  {
    name: 'React',
    icon: <StackIcon name="reactjs" />,
  },
  {
    name: 'Next',
    icon: <StackIcon name="nextjs" />,
  },
  {
    name: 'Tailwind CSS',
    icon: <StackIcon name="tailwindcss" />,
  },
  {
    name: 'Shadcn',
    icon: <StackIcon name="shadcnui" />,
  },
  {
    name: 'Dart',
    icon: <StackIcon name="dart" />,
  },
  {
    name: 'Flutter',
    icon: <StackIcon name="flutter" />,
  },
  {
    name: 'Android Studio',
    icon: <StackIcon name="android" />,
  },
  {
    name: 'Python',
    icon: <StackIcon name="python" />,
  },
  // {
  //     name: "OpenCV",
  //     icon: <SiOpencv />
  // },
  {
    name: 'Java',
    icon: <StackIcon name="java" />,
  },
  {
    name: 'PostgreSQL',
    icon: <StackIcon name="postgresql" />,
  },
  {
    name: 'Firebase',
    icon: <StackIcon name="firebase" />,
  },
  {
    name: 'Supabase',
    icon: <StackIcon name="supabase" />,
  },
  {
    name: 'Git',
    icon: <StackIcon name="git" />,
  },
  {
    name: 'GitHub',
    icon: <StackIcon name="github" />,
  },
];

export const expNow = [
  {
    time: 'April 25 - Now',
    position: 'Lead UI/UX Designer',
    company: '/exp/ise.svg',
    link: 'https://www.linkedin.com/company/information-systems-expo-its/',
  },
  {
    time: 'Jan 24 - Now',
    position: 'Product Designer',
    company: '/exp/ajakgerak.svg',
    link: 'https://linkedin.com/company/ajakgerak',
  },
  {
    time: 'Nov 24 - May 25',
    position: 'Lead UI/UX Designer',
    company: '/exp/tedx.svg',
    link: 'https://linkedin.com/company/tedxits',
  },
];

export const projects = [
  {
    img: '/projects/ilits.png',
    title: 'Ini Lho ITS! 2025',
    href: 'https://inilho.its.ac.id/',
  },
  {
    img: '/projects/ise.png',
    title: 'Information System Expo!',
    href: 'https://ise-its.com/',
  },
  {
    img: '/projects/tedx.png',
    title: 'TEDxITS',
    href: 'https://tedxits.org/',
  },
  {
    img: '/projects/futurest.png',
    title: 'Futurest',
    href: 'https://futurest.id/',
  },
];

export const features = [
  {
    name: 'Lokantara',
    logo: '/projects/lokantara-logo.png',
    desc: "Lokantara is an online tour platform showcasing Indonesia's heritage through interactive and gamified travel experiences.",
    href: 'https://buangbijak.com/',
    background: (
      <Image
        src={'/projects/lokantara-slide.png'}
        width={1920}
        height={1080}
        className="object-cover absolute top-0"
        style={{ maskImage: 'linear-gradient(to top, transparent 40%, #000 100%)' }}
        alt={'lokantara'}
      ></Image>
    ),
  },
  {
    name: 'BuangBijak',
    logo: '/projects/buangbijak-logo.png',
    desc: 'BuangBijak is a waste management platform connecting users with on-demand pickup services.',
    href: 'https://www.figma.com/proto/FLVbiNd05RG9mma5JX4Rul/BuangBijak?node-id=10-119&t=Exzto4g4ATy6N5GY-0&scaling=scale-down&content-scaling=responsive&page-id=0%3A1&starting-point-node-id=8%3A2',
    background: (
      <Image
        src={'/projects/buangbijak-slide4.png'}
        width={1920}
        height={1080}
        className="object-cover absolute top-0"
        style={{ maskImage: 'linear-gradient(to top, transparent 40%, #000 100%)' }}
        alt={'buangbijak'}
      ></Image>
    ),
  },
  {
    name: 'Uride',
    logo: '/projects/uride-logo.png',
    desc: 'URide is a vehicle maintenance app addressing common challenges for motor vehicle users.',
    href: 'https://www.figma.com/proto/irgoRWbKsUTcinAQKS0K2D/URide?type=design&node-id=75-661&t=I4ODSpyIZ2bMxR9T-0&scaling=scale-down&page-id=75%3A661&starting-point-node-id=579%3A1668',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <Image
        src={'/projects/uride-slide.png'}
        width={1920}
        height={1080}
        className="object-cover absolute top-0"
        style={{ maskImage: 'linear-gradient(to top, transparent 40%, #000 100%)' }}
        alt={'uride'}
      ></Image>
    ),
  },
  {
    name: 'Aimo',
    logo: '/projects/aimo-logo.png',
    desc: 'Aimo is a mental health app supporting expectant and postpartum mothers by reducing Postpartum Depression (PPD) risks.',
    href: 'https://www.figma.com/proto/oa0GcifcAdurFxMFdaa3Bo/Aimo?node-id=233-2616&t=BCEM1VluA9MNekoN-1&scaling=contain&page-id=9%3A3&starting-point-node-id=233%3A2616',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <Image
        src={'/projects/aimo-slide.png'}
        width={1920}
        height={1080}
        className="object-cover absolute top-0"
        style={{ maskImage: 'linear-gradient(to top, transparent 40%, #000 100%)' }}
        alt={'aimo'}
      ></Image>
    ),
  },
];

// Biography to provide context for Gemini
export const userBio = `
    Muhammad Razan Parisya Putra is a fourth-semester Information Systems student at Institut Teknologi Sepuluh Nopember (ITS). He is a passionate and dedicated UI/UX Designer based in Surabaya, Indonesia. Razan has interest in UI/UX & Product Design, Software Engineering, and Product management. With over two years of experience in crafting digital products and interactive experiences, Razan specializes in creating seamless, intuitive, and visually appealing user interfaces. At just 19 years old, he is younger than most of his peers but has already made significant strides in the tech and design world.
    He has a strong passion for creating innovative solutions that enhance user experiences and drive business growth.
    Razan’s work is driven by creativity, user-centered design principles, and technical proficiency in modern front-end frameworks. He is deeply committed to designing solutions that not only look great but also solve real-world problems, encapsulated in his personal motto: “Design, Develop, Delight.”
    Work and Experiences
    Razan has taken on key roles in various organizations and projects, showcasing his leadership, collaboration, and problem-solving skills. He currently serves as a UI/UX Designer in IT Development at the Society of Renewable Energy (SRE) ITS, where he contributes to energy-related digital innovations.
    His professional journey includes:
    Product Designer at AjakGerak: A widely recognized educational platform with over 50,000 followers. Razan revamped the content strategy and handled media partnerships, significantly boosting engagement and outreach. He also led the Beasiswa GerakBerdampak initiative, a collaborative program between AjakGerak and Kahf. This program provides scholarships, mentorship, and academic support to high school students from 3T regions (tertinggal, terdepan, terluar), helping them achieve their university dreams.
    Lead UI/UX Designer at Futurest, TEDxITS, and BetaU: He led design teams to create visually compelling digital experiences for high-profile events and software projects.
    UI/UX Designer at Ini Lho ITS, SRE ITS, and Information System Expo! 2024: Razan designed interactive platforms that enhanced audience engagement and participation.
    Projects
    Razan has been involved in numerous impactful projects across diverse industries:
    Lokantara: A tourism platform that enhances travel experiences with interactive guides, currency converters, and gamified engagement. Razan’s expertise in Next.js, Tailwind CSS, and Framer Motion helped create a seamless and visually appealing user experience.
    URide: A vehicle health monitoring and on-demand repair service platform. Razan focused on improving usability and accessibility, ensuring transparency and convenience for users.
    Aimo: A mental health app for expectant mothers, designed to reduce postpartum depression (PPD) risks. The app provides personalized postnatal guidance and a support system for families and healthcare professionals.
    Tech Stacks
    Razan’s technical expertise spans a wide range of tools and technologies:
    Front-End Development: Next.js, React.js, Tailwind CSS, TypeScript
    Mobile Development: Flutter, Dart, Android Studio
    UI/UX Design: Figma, Sketch, Framer Motion
    Prototyping & Animation: Framer Motion, Lottie
    Database: Firebase, Supabase
    Programming Languages: Java, JavaScript, TypeScript, Python, Dart 
    Management Tools: Miro, Slack, Notion
    His ability to combine creativity with technical execution allows him to bridge the gap between design and development seamlessly.
    Achievements
    Razan’s dedication and talent have been recognized through several achievements:
    Awarded the Beasiswa Bakti BCA 2025 for his outstanding contributions and potential.
    Future Careers
    Looking ahead, Razan aspires to become a leading UI/UX designer, product designer, or project manager in the tech industry. His goals include:
    Developing impactful digital experiences that solve real-world problems, guided by his motto: “Design, Develop, Delight.”
    Expanding his expertise in front-end development, interaction design, and project management.
    Working on projects that combine AI, data science, and user experience.
    Securing internship opportunities in UI/UX design, product design, and project management to further refine his skills and contribute to innovative projects.
    Funny Things
    When he’s not designing or coding, Razan enjoys sharing his knowledge and experiences through writing. He plans to actively write on Medium (@mhmdrazn), discussing topics related to UI/UX design, product development, and IT fields.
    On a lighter note, Razan is currently single and focusing on his career and personal growth. As he often jokes, “My only relationship right now is with Figma and Next.js!” His favorite food is rendang, and he’s always up for a good food adventure.
    Let’s Connect!
    You can catch Razan on:
    Instagram, Medium, Github, Behance on @mhmdrazn, LinkedIn: Muhammad Razan Parisya Putra, Email razan4944@gmail.com
    This project was build using Next.js, Tailwind CSS, and Shadcn/ui, poweered by Vercel and Gemini AI.
    The model used is Gemini 2.0 Flash. 
`;
