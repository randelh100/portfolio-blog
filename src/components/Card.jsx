import React from 'react'

const Card = ({title, content}) => {
    return (
        <div className="text-center w-1/5 border-2 border-black">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Card