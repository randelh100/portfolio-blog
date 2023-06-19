'use client'
import React from 'react'
import Contact from './Contact'
import { useState } from 'react'

const ContactButton = () => {

    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div>
            <button onClick={handleClick}>Contact</button>
            {
                open && <Contact onClick={handleClick}>
                    <form className=''>
                        <h1>Leave your contact information here.</h1>
                        <div>
                            <label>Full Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input type="text" name="phone" id="phone" />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea name="message" id="message" cols="30" rows="3"></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </Contact>
            }
        </div>
    )
}

export default ContactButton