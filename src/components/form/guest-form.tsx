// import React from 'react'
// import Image from 'next/image'
// import { signInWithGithub, signInWithGoogle, signout } from '@/supabase/auth-actions'
// import { Button } from '../ui/button'
// import { User } from '@supabase/supabase-js'
// import { Textarea } from "@/components/ui/textarea"

// const login = [
//     {
//         providers: 'google',
//         action: signInWithGoogle,
//         label: 'Sign in with Google',
//         icon: '/icons/google.svg'
//     },
//     {
//         providers: 'github',
//         action: signInWithGithub,
//         label: 'Sign in with GitHub',
//         icon: '/icons/github.svg'
//     },
// ]

// const GuestForm = ({ user } : {user: User | null}) => {
//     return (    
//         <div className='flex flex-col gap-4 h-fit pt-4 max-w-2xl w-full'>
//             {user ? (
//                 <div className='flex flex-col gap-3 items-end w-full'>
//                     <Textarea placeholder='Your message' className='w-full h-fit'/>
//                     <div className="flex gap-2">
//                         <Button className='w-fit h-fit'>
//                             Submit
//                         </Button>
//                         <form action={signout}>
//                             <Button type="submit" variant="secondary">Sign Out</Button>
//                         </form>
//                     </div>
//                 </div>
//             ) : (
//                 <div className='flex flex-row md:flex-row md:gap-6 gap-2 w-full'>
//                     {login.map((provider) => (   
//                         <form key={provider.providers} action={provider.action} className='w-full'>
//                             <Button type='submit' variant="secondary" className='w-full gap-3'>
//                                 <Image
//                                     src={provider.icon}
//                                     alt={provider.providers}
//                                     width={16}
//                                     height={16}
//                                 />
//                                 {provider.label}
//                             </Button>
//                         </form>
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// }

// export default GuestForm