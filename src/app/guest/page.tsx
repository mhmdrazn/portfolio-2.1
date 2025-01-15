import React from 'react'

function Guest() {
    return (
        <section className='w-full h-screen flex flex-col gap-6 justify-start p-8 md:p-12 lg:p-20 items-center text-foreground bg-background'> 
            <div className='max-w-2xl w-full h-fit flex flex-col gap-2'>
                <h1 className='font-bold text-2xl md:text-3xl text-foreground'>Drop your footnotes — &gt;&lt;</h1>
                <p className='font-medium text-sm  text-justify  anim text-foreground/70 hover:text-foreground'>
                    Welcome to my guest page, space to share messages, feedback, or thoughts. Whether it’s a note of encouragement or a quick hello, your words are always appreciated!
                </p>
            </div>

            <div className='flex md:flex-row flex-col gap-2 w-full h-fit'>
            
            </div>
        </section>
    )
}

export default Guest