import { LinkedinIcon, GithubIcon, BehanceIcon, InstagramIcon, HomeIcon, ProjectIcon, MeIcon, RetrosIcon, JourneyIcon } from '@/components/ui/icons';

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
        title: "Meet with me",
        icon: (
            <MeIcon/>
        ),
        href: "https://cal.com/hola-razan",
    },
];