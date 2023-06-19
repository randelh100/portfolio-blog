'use client'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
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
const page = () => {
    const [errors, setErrors] = useState({});
    const router = useRouter()
    const [formData, setFormData] = useState({
        header: '',
        description: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formErrors = validateForm(formData);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        axios.post('/api/post/create', formData)
            .then(res => {
                console.log(res)
                router.push('/ai-vorce')
                setErrors({})
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
            } type="text" name="header" id="header" placeholder="Header" />
            {errors.header && <p>{errors.header}</p>}
            <label htmlFor="description">Description</label>
            <input onChange={
                handleChange
            } type="text" name="description" id="description" placeholder="Description" />
            {errors.description && <p>{errors.description}</p>}
            <button type='submit'>Submit</button>
        </form>
    )
}

export default page