import React from 'react'
import Content from './Content'
import Review from './Review'
import ContentDescription from './ContentDescription'
import PostHeader from './PostHeader'


const Post = () => {
  return (
    <div className='text-center w-1/5 border-2 border-black'>
      <PostHeader content={'Divorce therapy App. Therapy made easy and convenient, with Ai incorperated.'} />
      <Content description={'test'} />
      <Review />
    </div>
  )
}

export default Post