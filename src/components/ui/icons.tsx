import { Linkedin, MoveRight } from 'lucide-react';
import { IconBrandBehance, IconSignature, IconBrandInstagram, IconMail, IconBrandGithub, IconCarouselHorizontal, IconSmartHome, IconCategory2, IconNotebook, IconCalendarTime } from '@tabler/icons-react';

export const LinkedinIcon = () => {
    return (
        <Linkedin strokeWidth={1}/>
    )
}

export const HomeIcon = () => {
    return (
        <IconSmartHome stroke={1} className='h-full w-full'/>
    )
}

export const ProjectIcon = () => {
    return (
        <IconCategory2 strokeWidth={1} className='h-full w-full'/>
    ) 
}

export const JourneyIcon = () => {
    return (
        <IconCarouselHorizontal stroke={1} width={32} height={32} className='h-full w-full'/>
    )
}

export const RetrosIcon = () => {
    return (
        <IconNotebook strokeWidth={1} className='h-full w-full'/>
    )
}

export const GithubIcon = () => {
    return (
        <IconBrandGithub stroke={1.25} />
    )
}

export const MeIcon = () => {
    return (
        <IconCalendarTime strokeWidth={1.25} className='h-full w-full'/>
    )
}

export const MailIcon = () => {
    return (
        <IconMail stroke={1} width={28} height={28}/>
    )
}

export const BehanceIcon = () => {
    return (
        <IconBrandBehance stroke={1} width={30} height={30}/>
    )
}

export const InstagramIcon = () => {
    return (
        <IconBrandInstagram stroke={1} width={27} height={27}/>
    )
}

export const SignatureIcon = () => {
    return (
        <IconSignature stroke={1} className='h-full w-full'/>
    )
}

export const ArrowIcon = () => {
    return (
        <MoveRight strokeWidth={1} className='h-full w-full'/>
    )
}