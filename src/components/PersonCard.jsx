import React from 'react'

const PersonCard = () => {
  return (
    <div className='flex flex-col border-2 border-black w-1/3 h-72' >
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quibusdam suscipit asperiores cumque tempore debitis, porro, doloribus dolores, odio reiciendis voluptatum. Corporis eum optio quam, molestiae sunt obcaecati! Numquam, praesentium?</p>
        <div className='border-2 border-black'>
          <h2>Full Stack Web Developer</h2>
          <a href="">LinkedIn</a>
          <a href="">GitHub</a>
        </div>
    </div>
  )
}

export default PersonCard