import { LinkedinIcon, GithubIcon, SignatureIcon, BehanceIcon, InstagramIcon, HomeIcon, ProjectIcon, MeIcon, RetrosIcon, JourneyIcon } from '@/components/ui/icons';
import { Description } from '@radix-ui/react-toast';
import { link } from 'fs';

export const socialLinks = [
    {href: "https://linkedin.com/in/muhammadrazan", icon: <LinkedinIcon/>},
    {href: "https://github.com/mhmdrazn", icon: <GithubIcon />},
    {href: "https://www.behance.net/mhmdrazn", icon: <BehanceIcon />},
    {href: "https://www.instagram.com/mhmdrazn", icon: <InstagramIcon />}
]

export const action = [
    {href: "https://www.papermark.io/view/cm5wdajh5000u14d79vznrkb1", label: "Resume"},
    {href: "https://www.papermark.io/view/cm5wdh7xe00061av5ktxo0aus", label: "Portfolio"},
    {href: "https://cal.com/hola-razan", label: "Meet with me"},
    {href: "/uneg", label: "Uneg-Uneg"}
]

export const quickLinks = [
    {href: "/", label: "Home sweet home"},
    {href: "/exp", label: "Experience & Journey"},
    {href: "/projects", label: "Featured Projects"},
    {href: "/retros", label: "Retrospective"},
]

export const dock = [
    {
        title: "Home",
        icon: (
            <HomeIcon />
        ),
        href: "/",
    },
    {
        title: "Journey",
        icon: (
            <JourneyIcon/>
        ),
        href: "/journey",
    },
    {
        title: "Projects",
        icon: (
            <ProjectIcon/>
        ),
        href: "/projects",
    },
    {
        title: "Retrospective",
        icon: (
            <RetrosIcon/>
        ),
        href: "/retro",
    },
    {
        title: "Guestbook",
        icon: (
            <SignatureIcon/>
        ),
        href: "/guest",
    },
    {
        title: "Meet with me",
        icon: (
            <MeIcon/>
        ),
        href: "https://cal.com/hola-razan",
    },
];

export const experiences = [
    {
        position: "UI/UX Designer",
        company: "Beta U",
        date: "June 2024 - Now",
        link: "https://www.linkedin.com/company/beta-u",
        description : "BETA U is a dynamic Software House specializing in transforming ideas into Minimum Viable Products (MVPs) swiftly and creatively. With a keen understanding of project intricacies, BETA U collaborates closely with clients to bring their visions to life.",
        img: "/exp/betaulogo.svg",
        job: [
            "- Designing and implementing user-friendly interfaces for web and mobile applications.",
            "- Collaborating with cross-functional teams to gather requirements and translate them into intuitive designs.",
            "- Conducting user research and testing to ensure the designs meet user needs and preferences.",
        ]
    },
    {
        position: "Product Designer",
        company: "AjakGerak",
        date: "Jan 2024 - Now",
        link: "https://www.linkedin.com/company/ajakgerak",
        description : "Ajak Gerak educational platform that provides academic training and self-development services for high school students who want to continue their studies at dream colleges, especially those who don't have the facilities and students in disadvantaged areas.",
        img: "/exp/ajakgerak.jpeg"
    },
    {
        position: "Lead UI/UX Designer",
        company: "TEDxITS",
        date: "Jan 2024 - Now",
        link: "https://www.linkedin.com/company/tedxits",
        description : "TEDxITS 2024 is an event that provides a platform for the community, especially those within the ITS environment, to share their compelling ideas. The aim of this event is to disseminate ideas and concepts about new and previously unexplored topics. Our goal is to ignite discussions, foster connections, and build a sense of community.",
        img: "/exp/tedx.svg",
        job: [
            "- Designed TEDxITS 2025 website, managing comprehensive development and user experience",
            "- Led design team of six, collaborating with frontend developers and visual designers",
            "- Streamlined design workflows to maintain project timelines and TEDxITS goals",
        ]
    },
    {
        position: "Lead UI/UX Designer",
        company: "Futurest",
        date: "Oct 2024 - Now",
        link: "https://www.linkedin.com/company/futurest",
        description : "FUTUREST (Future Energy Summit) stands as Indonesia's grand stage for renewable energy, orchestrated by SRE ITS, igniting students passion across the nation to pioneer energy transformation through innovative exploration and strategic implementation.",
        img: "/exp/futurest.svg",
        job: [
            "- Led UI/UX design for Futurest 2025, managing workflow and six-designer team",
            "- Conducted detailed design reviews ensuring quality outputs and project objectives",
            "- Oversaw Futurest website design to create a user-friendly and impactful platform",
        ]
    },
    {
        position: "UI/UX Designer",
        company: "SRE ITS",
        date: "Jun 2024 - Now",
        link: "https://www.linkedin.com/company/sreits",
        description : "SRE ITS SC serves as an international-based renewable energy community that unites implementation, professional management competencies, contributes significantly to developing, and implementing sustainable renewable energy.",
        img: "/exp/sre.svg"
    },
    {
        position: "UI/UX Designer",
        company: "Ini Lho ITS",
        date: "Apr 2024 - Des 24",
        link: "https://www.linkedin.com/company/inilhoits",
        description : "TEDxITS 2024 is an event that provides a platform for the community, especially those within the ITS environment, to share their compelling ideas. The aim of this event is to disseminate ideas and concepts about new and previously unexplored topics. Our goal is to ignite discussions, foster connections, and build a sense of community.",
        img: "/exp/ilits.svg"
    },
    {
        position: "UI/UX Designer",
        company: "ISE!",
        date: "Jun - Oct 2024",
        link: "https://www.linkedin.com/company/information-systems-expo-ise-2024/",
        description : "Information Systems Expo (ISE!) is an annual event organized by the Himpunan Mahasiswa Sistem Informasi (HMSI) which consists of a series of events in the fields of technology and business. ISE! aims to introduce the ITS Information Systems Department to the wider community through various works and achievements.",
        img: "/exp/ise.svg"
    },
]