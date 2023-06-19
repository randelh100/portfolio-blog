'use client'
import React from 'react'
import Content from './Content'
import Review from './Review'
import ContentDescription from './ContentDescription'
import PostHeader from './PostHeader'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'

const DynamicPost = ({ post }) => {

    const router = useRouter()

    const handleDelete = (id) => {
        axios.delete(`/api/post/delete/${id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        router.refresh()
    }

    return (
        <div className='text-center w-1/5 border-2 border-black'>
            {
                post.map((post) => (
                    <div key={post.id}>
                        <PostHeader content={post.header} />
                        <Content description={post.description} />
                        <Link href={`/ai-vorce/edit/${post.id}`}>Edit</Link>
                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                    </div>
    ))
}
        </div >
    )
}

export default DynamicPost