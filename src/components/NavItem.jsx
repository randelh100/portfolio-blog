import React from 'react'
import Link from 'next/link'

const NavItem = ({ href, active, text }) => {
    return (
        <Link classname={`nav__link ${active ? "nav__link--active" : ""}
`}
            href={href}>
            {text}
        </Link>
    )
}

export default NavItem