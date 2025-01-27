import React from 'react'

import Heading from '@/components/ui/heading'
import Paragraph from '@/components/ui/paragraph'

import Card from '@/components/ui/exp-card'

function Journey() {
  return (
    <section className='flex flex-col min-h-screen justify-start p-4 pt-8 md:p-12 lg:p-20 items-center'> 
      <div className='md:max-w-2xl max-w-md w-full h-fit flex flex-col gap-8'>

        <div className='flex flex-col gap-2'>
          <div className='flex gap-3 items-end'>
            {/* <ArrowUpIcon/> */}
            <h1 className='text-2xl md:text-3xl font-normal'>
              Where <span className='anim lora-font'>Passion</span> Meets <span className='lora-font'>Purpose.</span>
            </h1>
          </div>
          {/* <p className='anim text-background/70 hover:text-background text-xs md:text-sm'>
            Aiming to create experiences that truly matter. For me, it’s about using creativity to make a real difference. That’s what I bring — where passion and purpose come together in every project.
          </p> */}
        </div>

        <div className='flex flex-col gap-3'>
          <Heading text='Experiences'/> 
          <Paragraph text='Documented my journey here, showing what has been achieved so far. It’s a reminder of the experiences and progress made along the way.'/>
          <Card/>
        </div>
      </div>
    </section>
  )
}

export default Journey