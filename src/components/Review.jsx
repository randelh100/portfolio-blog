import React from 'react'

const Review = () => {
    return (
        <div className=''>
            <div className='flex justify-between'>
                <h3>Likes</h3>
                <div className='flex gap-2'>
                    <h2>Like</h2>
                    <p>heart</p>
                </div>
            </div>
            <textarea placeholder='Leave a Comment...' name="comment" id="comment" cols="30" rows="3"></textarea>
            <h3>Comments</h3>
        </div>
    )
}

export default Review