'use client';

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { toast } from "@/components/ui/use-toast";
import { copyToClipboard } from '../../lib/utils';

export default function navbar() {
    return (
        <footer className='flex w-full px-4 py-12 md:px-8 lg:px-16 justify-center items-center bg-dark'>
            <div className='flex max-w-3xl w-full justify-between'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-6'>
                        <Image src='/mark.svg' alt='logo' width={60} height={42.06}/>
                        <p className='text-sm text-white/50'>Design, Develop, and Delight <br/>everyone with Ideas</p>
                    </div>
                    <p className='font-thin text-sm text-center md:text-left'>
                        &copy; 2025 Muhammad Razan. All rights reserved.
                    </p>
                </div>

                <div className='flex flex-col justify-between items-end'>        
                    <div className='flex gap-4'>
                        <Link 
                            href="https://linkedin.com/in/muhammadrazan" 
                            className='size-fit'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8.53333,8.53333)"><path d="M9,25h-5v-15h5zM6.501,8c-1.383,0 -2.501,-1.121 -2.501,-2.501c0,-1.38 1.12,-2.499 2.501,-2.499c1.378,0 2.499,1.121 2.499,2.499c0,1.38 -1.121,2.501 -2.499,2.501zM27,25h-4.807v-7.3c0,-1.741 -0.033,-3.98 -2.499,-3.98c-2.503,0 -2.888,1.896 -2.888,3.854v7.426h-4.806v-15.011h4.614v2.051h0.065c0.642,-1.18 2.211,-2.424 4.551,-2.424c4.87,0 5.77,3.109 5.77,7.151c0,0 0,8.233 0,8.233z"></path></g></g>
                            </svg>
                        </Link>
                        <Link 
                            href="https://github.com/mhmdrazn" 
                            className='size-fit'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path></g></g>
                            </svg>
                        </Link>

                        <Link 
                            href="https://behance.net/mhmdrazn" 
                            className='size-fit'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0,0,256,256">
                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8,8)"><path d="M1,6.75v18.5h8.9375c0.82813,0 6.53125,-0.16797 6.53125,-5.375c0,-3.25391 -2.23828,-4.35937 -3.375,-4.6875c0.83594,-0.39453 2.5,-1.33203 2.5,-3.84375c0,-1.39844 -0.19922,-4.59375 -5.90625,-4.59375zM21.375,8.46875v1.6875h6.90625v-1.6875zM5.0625,9.90625h3.8125c0.35938,0 2.78125,-0.19141 2.78125,2.125c0,1.98047 -1.75,2.1875 -2.46875,2.1875h-4.125zM25,11.6875c-5.22266,0 -6.3125,4.53516 -6.3125,6.5c0,5.83203 4.78125,6.5 6.3125,6.5c4.12891,0 5.30078,-2.67187 5.78125,-4.15625h-3c-0.11719,0.38281 -0.99219,1.625 -2.65625,1.625c-2.78906,0 -3.03125,-2.17969 -3.03125,-3.15625h8.875c0.17969,-3.375 -1.29687,-7.3125 -5.96875,-7.3125zM24.90625,14.21875c0.83203,0 1.50391,0.24219 1.90625,0.6875c0.40234,0.44922 0.69922,1.10547 0.78125,1.96875h-5.5c0.01563,-0.23828 0.07031,-0.51172 0.15625,-0.8125c0.08594,-0.30859 0.21875,-0.60156 0.4375,-0.875c0.21875,-0.26953 0.52344,-0.50391 0.875,-0.6875c0.35938,-0.1875 0.80469,-0.28125 1.34375,-0.28125zM5.0625,17h4.40625c0.875,0 2.9375,0.13672 2.9375,2.65625c0,2.44141 -2.59766,2.4375 -3,2.4375h-4.34375z"></path></g></g>
                            </svg>
                        </Link>

                        <button 
                            onClick={() => {
                                copyToClipboard("razan4944@gmail.com");
                                toast({
                                    title: "Copied to clipboard",
                                    description: "😉 please use it wisely!",
                                    duration: 2000,
                                })
                            }} 
                            className='size-fit'>
                        
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        </button>
                    </div>
                    
                    <div className='flex gap-12'>
                        <div className='flex flex-col justify-end items-end gap-2'>
                            <p className='font-medium'>Actions</p>
                            <div className='flex flex-col justify-end items-end gap-1'>
                                <Link href={"https://drive.google.com/file/d/1Sgtvdd4dA-lvJ9cCt0pM-K7KG7gZisN1/view?usp=drive_link"} className="anim text-sm text-white/40 hover:text-white">
                                    Resume
                                </Link>
                                <Link href={"https://drive.google.com/file/d/1WVJ5-pqrk1eJ-9xwmy85yQmLBzwmlbSm/view?usp=drive_link"} className="anim text-sm text-white/40 hover:text-white">
                                    Portfolio
                                </Link>
                                <Link href={"https://cal.com/hola-razan"} className="anim text-sm text-white/40 hover:text-white">
                                    Meet with me!
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col justify-end items-end gap-2'>
                            <p className='font-medium'>Quick Links</p>
                            <div className='flex flex-col justify-end items-end gap-1'>
                                <Link href={"/"} className="anim text-sm text-white/40 hover:text-white">
                                    Home sweet home
                                </Link>
                                <Link href={"/projects"} className="anim text-sm text-white/40 hover:text-white">
                                    Featured Projects
                                </Link>
                                <Link href={"/exp"} className="anim text-sm text-white/40 hover:text-white">
                                    Experience & Journey 
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}