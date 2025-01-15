import Image from "next/image";

import { IconBrandGithub } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react'; 
import { Linkedin } from 'lucide-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import { IconBrandBehance } from '@tabler/icons-react';

export const LinkedinIcon = () => {
    return (
        <Linkedin strokeWidth={1}/>
    )
}

export const GithubIcon = () => {
    return (
        <IconBrandGithub stroke={1.25} />
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