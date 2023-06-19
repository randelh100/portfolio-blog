import React from 'react'
import Link from 'next/link'
import NavItem from './NavItem'
import ContactButton from './ContactButton'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-20 m-auto w-5/6">
            <ul className="flex items-center gap-20">
                <li>
                    <p>Randel Humphrey</p>
                </li>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/ai-vorce"}>Ai-Vorce</Link>
                </li>
                <li>
                    <ContactButton />
                </li>
            </ul>
            <ul className="flex items-center gap-6">
                <li>
                    <Link href={"/login"}>Login</Link>
                </li>
                <li>
                    <Link href={"/mypost"}>My Posts</Link>
                </li>
                <li>
                    <Link href={"/ai-vorce/create"}>Create Post</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;