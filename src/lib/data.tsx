import { 
    LinkedinIcon, 
    LinkedinIconDark, 
    GithubIcon, 
    GithubIconDark, 
    BehanceIcon, 
    BehanceIconDark, 
    InstagramIcon, 
    InstagramIconDark, 
    MediumIcon, 
    MediumIconDark } from '@/components/ui/icons';
import Image from 'next/image';

import StackIcon from 'tech-stack-icons';

export const socialLinks = [
    {href: "https://linkedin.com/in/muhammadrazan", icon: <LinkedinIcon/>, name: "Linkedin"},
    {href: "https://github.com/mhmdrazn", icon: <GithubIcon />, name: "GitHub"},
    {href: "https://www.behance.net/mhmdrazn", icon: <BehanceIcon />, name: "Behance"},
    {href: "https://www.instagram.com/mhmdrazn", icon: <InstagramIcon />, name: "Instagram"},
    {href: "https://www.medium.com/@mhmdrazn", icon: <MediumIcon />, name: "Medium"},
]

export const socialLinksDark = [
    {href: "https://linkedin.com/in/muhammadrazan", icon: <LinkedinIconDark/>, name: "Linkedin"},
    {href: "https://github.com/mhmdrazn", icon: <GithubIconDark/>, name: "GitHub"},
    {href: "https://www.behance.net/mhmdrazn", icon: <BehanceIconDark/>, name: "Behance"},
    {href: "https://www.instagram.com/mhmdrazn", icon: <InstagramIconDark />, name: "Instagram"},
    {href: "https://www.medium.com/@mhmdrazn", icon: <MediumIconDark/>, name: "Medium"},
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


export const experiences = [
    {
        position: "UI/UX Designer",
        company: "Beta U",
        date: "Jun 2024 - Now",
        link: "https://www.linkedin.com/company/beta-u",
        description : "BETA U is a dynamic Software House specializing in transforming ideas into Minimum Viable Products (MVPs) swiftly and creatively. With a keen understanding of project intricacies, BETA U collaborates closely with clients to bring their visions to life.",
        img: "/exp/betaulogo.svg",
        job: [
            "Designing and implementing user-friendly interfaces for web and mobile applications.",
            "Collaborating with cross-functional teams to gather requirements and translate them into intuitive designs.",
            "Conducting user research and testing to ensure the designs meet user needs and preferences.",
        ]
    },
    {
        position: "Product Designer",
        company: "AjakGerak",
        date: "Jan 2024 - Now",
        link: "https://www.linkedin.com/company/ajakgerak",
        description : "Ajak Gerak educational platform that provides academic training and self-development services for high school students who want to continue their studies at dream colleges, especially those who don't have the facilities and students in disadvantaged areas.",
        img: "/exp/ajakgerak.jpeg",
        job: [
            "Led the management and delivery of product outputs at AjakGerak", 
            "Managed the Beasiswa #GerakBerdampak program, successfully overseeing 900+ applicants and empowering high school and gap year students to achieve their university aspirations.",
            "Designed AjakGerak’s Instagram content, creating engaging campaigns aligned with the organization’s mission."
        ]
    },
    {
        position: "Lead UI/UX Designer",
        company: "TEDxITS",
        date: "Jan 2024 - Now",
        link: "https://www.tedxits.org/",
        description : "TEDxITS 2024 is an event that provides a platform for the community, especially those within the ITS environment, to share their compelling ideas. The aim of this event is to disseminate ideas and concepts about new and previously unexplored topics. Our goal is to ignite discussions, foster connections, and build a sense of community.",
        img: "/exp/tedx.svg",
        job: [
            "Designed TEDxITS 2025 website, managing comprehensive development and user experience",
            "Led design team of six, collaborating with frontend developers and visual designers",
            "Streamlined design workflows to maintain project timelines and TEDxITS goals",
        ]
    },
    {
        position: "Lead UI/UX Designer",
        company: "Futurest",
        date: "Oct 2024 - Now",
        link: "https://www.futurest.id/",
        description : "FUTUREST (Future Energy Summit) stands as Indonesia's grand stage for renewable energy, orchestrated by SRE ITS, igniting students passion across the nation to pioneer energy transformation through innovative exploration and strategic implementation.",
        img: "/exp/futurest.svg",
        job: [
            "Led UI/UX design for Futurest 2025, managing workflow and six-designer team",
            "Conducted detailed design reviews ensuring quality outputs and project objectives",
            "Conducting user research and testing to ensure the designs meet user needs and preferences.",
        ]
    },
    {
        position: "UI/UX Designer",
        company: "SRE ITS",
        date: "Jun 2024 - Now",
        link: "https://www.sre-its.com/",
        description : "SRE ITS SC serves as an international-based renewable energy community that unites implementation, professional management competencies, contributes significantly to developing, and implementing sustainable renewable energy.",
        img: "/exp/sre.svg",
        job: [
            "Contributed to the redesign of the SRE ITS website, enhancing UX with a more intuitive and engaging interface.",
            "Designed new features to improve the website's sustainability, ensuring alignment with user needs and goals.",
            "Worked closely with the team to create a cohesive and effective digital experience."
        ]
    },
    {
        position: "UI/UX Designer",
        company: "Ini Lho ITS",
        date: "Apr 2024 - Des 24",
        link: "https://www.ini.lho.its.ac.id/",
        description : "Ini Lho ITS! is a platform that introduces Institut Teknologi Sepuluh Nopember, providing insights into its academic life and faculties to high school students across Indonesia and beyond.",
        img: "/exp/ilits.svg",
        job: [
            "Played a key role in designing and refining user interfaces for Ini Lho ITS 2025.",
            "Translated project requirements into effective design solutions, maintaining consistency with the overall theme.",
            "Collaborated closely with the team to align design elements with project objectives.",
            "Supported frontend developers to ensure accurate implementation and functionality.",
        ]
    },
    {
        position: "UI/UX Designer",
        company: "ISE!",
        date: "Jun - Oct 2024",
        link: "https://www.ise-its.com/",
        description : "Information Systems Expo (ISE!) is an annual event organized by the Himpunan Mahasiswa Sistem Informasi (HMSI) which consists of a series of events in the fields of technology and business. ISE! aims to introduce the ITS Information Systems Department to the wider community through various works and achievements.",
        img: "/exp/ise.svg",
        job: [
            "Designing the ISE! 2024 website in collaboration with the creative team.",
            "Creating visually appealing user interfaces that enhance the overall aesthetic and branding.",
            "Developing seamless and intuitive user experiences to improve usability.",
            "Collaborating closely with cross-functional teams to ensure design consistency and functionality.",
        ]
    },
]

export const techStacks = [
    {
        name: "Figma",
        icon: <StackIcon name="figma" />
    },
    {
        name: "Framer",
        icon: <StackIcon name="framer" />
    },
    {
        name: "Miro",
        icon: <StackIcon name="miro" />
    },
    {
        name: "Slack",
        icon: <StackIcon name="slack" />
    },
    {
        name: "JavaScript",
        icon: <StackIcon name="js" />
    },
    {
        name: "TypeScript",
        icon: <StackIcon name="typescript" />
    },
    {
        name: "React",
        icon: <StackIcon name="reactjs" />
    },
    {
        name: "Next",
        icon: <StackIcon name="nextjs" />
    },
    {
        name: "Tailwind CSS",
        icon: <StackIcon name="tailwindcss" />
    },
    {
        name: "Shadcn",
        icon: <StackIcon name="shadcnui" />
    },
    {
        name: "Dart",
        icon: <StackIcon name="dart" />
    },
    {
        name: "Flutter",
        icon: <StackIcon name="flutter" />
    },
    {
        name: "Android Studio",
        icon: <StackIcon name="android" />
    },
    {
        name: "Python",
        icon: <StackIcon name="python" />
    },
    // {
    //     name: "OpenCV",
    //     icon: <SiOpencv />
    // },
    {
        name: "Java",
        icon: <StackIcon name="java" />
    },
    {
        name: "PostgreSQL",
        icon: <StackIcon name="postgresql" />
    },
    {
        name: "Firebase",
        icon: <StackIcon name="firebase" />
    },
    {
        name: "Supabase",
        icon: <StackIcon name="supabase" />
    },
    {
        name: "Git",
        icon: <StackIcon name="git" />
    },
    {
        name: "GitHub",
        icon: <StackIcon name="github" />
    },    
]

export const expNow = [
    {
        time: "Jan 24 - Now",
        position: "Product Designer",
        company: "/exp/ajakgerak.svg",
        link: "https://linkedin.com/company/ajakgerak"
    },
    // {
    //     time: "Oct 24 - Now",
    //     position: "Lead UI/UX Designer",
    //     company: "/exp/futurest.svg",
    //     link: "https://linkedin.com/company/futurest"
    // },
    {
        time: "Nov 24 - Now",
        position: "Lead UI/UX Designer",
        company: "/exp/tedx.svg",
        link: "https://linkedin.com/company/tedxits"
    },
]

export const projects = [
    {
        img: '/projects/ilits.png',
        title: 'Ini Lho ITS! 2025',
        href: "https://inilho.its.ac.id/",
    },
    {
        img: '/projects/ise.png',
        title: 'Information System Expo!',
        href: "https://ise-its.com/",
    },
    {
        img: '/projects/tedx.png',
        title: 'TEDxITS',
        href: "https://tedxits.org/",
    },
    {
        img: '/projects/futurest.png',
        title: 'Futurest',
        href: "https://futurest.id/",
    }
]

export const features = [
    {
        name: "Lokantara",
        logo: "/projects/lokantara-logo.png",
        desc: "Lokantara is an online tour platform showcasing Indonesia's heritage through interactive and gamified travel experiences.",
        href: "https://buangbijak.com/",
        background: (
            <Image 
                src={"/projects/lokantara-slide.png"} 
                fill 
                className="object-cover absolute [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
                alt={"buangbijak"}>
            </Image>
        ),
    },
    {
        name: "BuangBijak",
        logo: "/projects/buangbijak-logo.png",
        className: "w-6 h-16",
        desc: "BuangBijak is a waste management platform connecting users with on-demand pickup services.",
        href: "https://buangbijak.com/",
        background: (
            <Image 
                src={"/projects/buangbijak-slide4.png"} 
                fill 
                className="object-cover absolute [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
                alt={"buangbijak"}>
            </Image>
        )
    },
    {
        name: "Uride",
        logo: "/projects/uride-logo.png",
        classname: "w-6 h-16",
        desc: "URide is a vehicle maintenance app addressing common challenges for motor vehicle users." ,
        href: "https://uride.id/",
        background: (
            <Image 
                src={"/projects/uride-slide.png"} 
                fill 
                className="object-cover absolute [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
                alt={"buangbijak"}>
            </Image>
        )
    },
    {
        name: "Aimo",
        logo: "/projects/aimo-logo.png",
        classname: "w-6 h-16",
        desc: "Aimo is a mental health app supporting expectant and postpartum mothers by reducing Postpartum Depression (PPD) risks.",
        href: "https://aimo.id/",
        background: (
            <Image 
                src={"/projects/aimo-slide.png"} 
                fill 
                className="object-cover absolute [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
                alt={"buangbijak"}>
            </Image>
        )
    },
];