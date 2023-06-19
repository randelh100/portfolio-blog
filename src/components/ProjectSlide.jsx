import React from 'react'

const ProjectSlide = ({src, content}) => {
    return (
        <div className='flex justify-around'>
            <div className='flex bg-black border-2 border-black w-1/3 h-72' >
            </div>
            <p className='w-1/3'>{content}</p>
        </div>
    )
}

export default ProjectSlide