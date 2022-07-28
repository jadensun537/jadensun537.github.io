import React, {useState, useEffect} from "react";
import {Link} from 'react-scroll';
import '../CSS/navbar.css';

export default function Navbar ()
{
   return(
    <div className='navbar'>
        <nav className="inner">
            <ul className="menu">
                <li className="item">
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500} className='area'>Home</Link>
                </li>
                <li className="item">
                    <Link to="experience" spy={true} smooth={true} offset={0} duration={500} className='area'>Experience</Link>
                </li>
                <li className="item">
                    <Link to="skills" spy={true} smooth={true} offset={0} duration={500} className='area'>Skills</Link>
                </li>
                <li className="item">
                    <Link to="contact" spy={true} smooth={true} offset={0} duration={500} className='area'>Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
    )
}

// function CustomLink({to, children, ...props})
// {
//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({path: resolvedPath.pathname, end: true})
//     return (
//         <li className={isActive ? "active" : ""}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </li>
//     )
// }