import React from 'react'
import blog from '../../public/blog-profile.jpg'


const PersonCard = () => {
  return (
    <div className='flex flex-col w-1/3 h-72 rounded text-white font-'>
        <h1>Hi! I'm Randel, I am studying
to be CREATIVE Software Developer 
Based IN THE U.S.
</h1>
        <p>From a very young age I have been passionate about technology and music. I have produced over 1,000 beats and have created a handful of web apps in my 6 months of studying Software Engineering.
</p>
        <div className='border-2 border-black'>
          <h2>Full Stack Web Developer</h2>
          <a href="">LinkedIn</a>
          <a href="">GitHub</a>
        </div>
    </div>
  )
}

export default PersonCard