import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from "react-icons/hi"
import { images } from '../../constants'
// styles
import "./style.scss"

const Navbar = () => {
    const NavLists = ['home', 'about', 'work', 'skills', 'contacts'];
    const [toggle, setToggle] = useState(false)

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logo} alt="Logo...." />
            </div>
            <ul className='app__navbar-links'>
                {NavLists.map((item) => {
                    return (
                        <li className='app__flex p-text ' key={`link-${item}`}>
                            <div />
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    )
                })}
            </ul>
            <div className="app_navbar-menu">
                <HiMenuAlt4 onClick={() => { setToggle(!toggle) }} />
                <div className={`sidebar ${toggle ? "active" : ""}`}>
                    <HiX onClick={() => { setToggle(false) }} />
                    <ul>
                        {NavLists.map((item) => {
                            return (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => { setToggle(false) }}>{item}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>


            </div>
        </nav>
    )
}

export default Navbar