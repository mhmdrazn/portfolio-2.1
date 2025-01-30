import { Linkedin, Sun, Moon, ArrowUpRight, MoveRight} from 'lucide-react';
import { FaMedium } from "react-icons/fa6";
import { IconBrandBehance, IconSignature, IconBrandInstagram, IconPhoneRinging,  IconExternalLink, IconMail, IconBrandGithub, IconCarouselHorizontal, IconSmartHome, IconCategory2, IconNotebook, IconCalendarTime, IconBrandMedium, IconSend } from '@tabler/icons-react';

export const LinkedinIcon = () => {
    return (
        <Linkedin strokeWidth={1} className='text-foreground'/>
    )
}

export const LinkedinIconDark = () => {
    return (
        <Linkedin strokeWidth={1}/>
    )
}

export const HomeIcon = () => {
    return (
        <IconSmartHome stroke={1} className='h-full w-full text-foreground'/>
    )
}

export const ProjectIcon = () => {
    return (
        <IconCategory2 strokeWidth={1} className='h-full w-full text-foreground'/>
    ) 
}

export const JourneyIcon = () => {
    return (
        <IconCarouselHorizontal stroke={1} width={32} height={32} className='h-full w-full text-foreground'/>
    )
}

export const RetrosIcon = () => {
    return (
        <IconNotebook strokeWidth={1} className='h-full w-full text-foreground'/>
    )
}

export const GithubIcon = () => {
    return (
        <IconBrandGithub stroke={1.25} className='h-full w-full text-foreground'/>
    )
}

export const GithubIconDark = () => {
    return (
        <IconBrandGithub stroke={1.25} className='h-full w-full'/>
    )
}

export const MeIcon = () => {
    return (
        <IconCalendarTime strokeWidth={1.25} className='h-full w-full text-foreground'/>
    )
}

export const MailIcon = () => {
    return (
        <IconMail stroke={1} width={28} height={28} className='text-foreground'/>
    )
}

export const BehanceIcon = () => {
    return (
        <IconBrandBehance stroke={1} width={30} height={30} className='text-foreground'/>
    )
}

export const BehanceIconDark = () => {
    return (
        <IconBrandBehance stroke={1} width={30} height={30}/>
    )
}

export const InstagramIcon = () => {
    return (
        <IconBrandInstagram stroke={1} width={27} height={27} className='text-foreground'/>
    )
}

export const InstagramIconDark = () => {
    return (
        <IconBrandInstagram stroke={1} width={27} height={27}/>
    )
}

export const SignatureIcon = () => {
    return (
        <IconSignature stroke={1} className='h-full w-full text-foreground'/>
    )
}

export const ArrowIcon = () => {
    return (
        <MoveRight strokeWidth={1} className='h-full w-full'/>
    )
}

export const ExternalIcon = () => {
    return (
        <IconExternalLink strokeWidth={1.5} className='h-4 w-4 text-background'/>
    )
}

export const SunIcon = () => {
    return (
        <Sun strokeWidth={1} className='h-full w-full'/>
    )
}

export const MoonIcon = () => {
    return (
        <Moon strokeWidth={1} className='h-full w-full'/>
    )
}

export const ArrowUpIcon = () => {
    return (
        <ArrowUpRight strokeWidth={2} width={28} height={28}/>
    )
}

export const ArrowRightIcon = () => {
    return (
        <MoveRight strokeWidth={2} width={28} height={28}/>
    )
}

export const Laptop = () => {
    return (
        <IconPhoneRinging strokeWidth={2} width={16} height={16}/>
    )
}

export const MediumIcon = () => {
    return (
        <FaMedium strokeWidth={2} className='text-white' width={28} height={28}/>
    )
}

export const MediumIconDark = () => {
    return (
        <FaMedium strokeWidth={2} width={28} height={28}/>
    )
}

export const SendIcon = () => {
    return (
        <IconSend strokeWidth={2} width={28} height={28}/>
    )
}