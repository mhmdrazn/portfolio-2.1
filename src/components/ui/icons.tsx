import { Linkedin, Sun, Moon, ArrowUpRight, MoveRight} from 'lucide-react';
import { FaMedium } from "react-icons/fa6";
import { IconBrandBehance, IconBrandInstagram, IconPhoneRinging,  IconExternalLink, IconMail, IconBrandGithub, IconSend } from '@tabler/icons-react';

export const LinkedinIcon = () => {
    return (
        <Linkedin strokeWidth={1} className='text-foreground'/>
    )
}

export const LinkedinIconDark = () => {
    return (
        <Linkedin strokeWidth={1} className='h-full w-full'/>
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
        <IconBrandBehance stroke={1} width={30} height={30} className='h-full w-full'/>
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
        <FaMedium strokeWidth={2} width={28} height={28} className='h-full w-full'/>
    )
}

export const SendIcon = () => {
    return (
        <IconSend strokeWidth={2} width={28} height={28}/>
    )
}