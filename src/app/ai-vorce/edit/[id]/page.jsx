'use client'
import React, { use } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


const validateForm = (formData) => {
    const errors = {};
    if (formData.header.length < 3) {
        errors.header = "Header must be at least 3 characters long";
    }
    if (formData.description.length < 10) {
        errors.description = "Description must be at least 10 characters long";
    }
    return errors
}

const page = ({ params }) => {

    const [errors, setErrors] = useState({});
    const router = useRouter()
    const id = params.id

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }

    useEffect(() => {
        axios.get(`/api/post/get/${id}`)
            .then(res => {
                setFormData({
                    header: res.data.header,
                    description: res.data.description
                })
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const [formData, setFormData] = useState({
        header: '',
        description: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        const formErrors = validateForm(formData);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        axios.put(`/api/post/edit/${id}`, formData)
            .then(res => {
                console.log(res)
                setErrors({})
                router.push('/ai-vorce')
            }
            )
            .catch(err => {
                console.log(err)
                setErrors(err.data)
            }
            )
    }




    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="header">Header</label>
            <input onChange={
                handleChange
            } value={formData.header} type="text" name="header" id="header" placeholder="Header" />
            {
                errors.header && <p>{errors.header}</p>
            }
            <label htmlFor="description">Description</label>
            <input onChange={
                handleChange
            } value={formData.header} type="text" name="description" id="description" placeholder="Description" />
            {
                errors.description && <p>{errors.description}</p>
            }
            <button type='submit'>Submit</button>
        </form>
    )
}

export default page