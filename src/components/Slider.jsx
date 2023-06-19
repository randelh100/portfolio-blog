import React from 'react'
import ProjectSlide from './ProjectSlide'

const Slider = () => {
    return (
        <div>
            <ProjectSlide
                content={'Test'}
            //src{}
            />
            <div className='flex flex-row-reverse gap-56'>
                <button className='border-2 border-black rounded-full w-40 h-20'>Prev</button>
                <button className='border-2 border-black rounded-full w-40 h-20'>Next</button>
            </div>
        </div>
    )
}

export default Slider