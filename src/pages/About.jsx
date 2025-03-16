import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from "../components/NewsletterBox"
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={"US"} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere voluptates qui at exercitationem consequuntur, quaerat et sint neque tenetur quibusdam deserunt excepturi harum laborum labore ipsa omnis molestias, ab soluta?</p>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ad ducimus nesciunt ullam enim inventore possimus! Quae aliquid est temporibus, voluptatum veritatis sed iusto quas itaque quod tempora explicabo possimus ex aliquam provident velit in?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ad iusto et ducimus cum hic commodi. Non possimus itaque quis tempora facilis?</p>
        </div>
     </div>
      
      <div className='text-xl py-4'>
         <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio impedit saepe cum perferendis natus error recusandae doloribus, libero non ex molestias dolorum placeat nam.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio impedit saepe cum perferendis natus error recusandae doloribus, libero non ex molestias dolorum placeat nam.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exeptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio impedit saepe cum perferendis natus error recusandae doloribus, libero non ex molestias dolorum placeat nam.</p>
        </div>

      </div>

      <NewsletterBox />

    </div>
  )
}

export default About