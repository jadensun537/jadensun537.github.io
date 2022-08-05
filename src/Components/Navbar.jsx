import React, {useState, useEffect} from "react";
import {Link} from 'react-scroll';
import '../CSS/navbar.css';
import image from '../imgs/pfp-removebg-preview.png';

export default function Navbar ()
{
    const [init, setInit] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [size, setSize] = useState(window.innerWidth)
    console.log(window.innerWidth)
    const [active, setActive] = useState(false)
    useEffect(() => {
        function handleResize() {
            if(window.innerWidth >= 700){
                setActive(false)
            }
            setSize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if(init)
        {
            setActive(!active)
        }
        else{
            setInit(true)
        }
    }, [clicked])
   return(
    
    <div className={size < 700 ? (active ? 'larger' : 'navbar') : 'navbar'}>
        <div className="cropper">
            <img className='profile-pic' src={image}/>
        </div>
        <nav className="inner">
            <a href="#" className="hamburger" onClick={(e) => {e.preventDefault(); setClicked(!clicked)}}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <ul className={size < 700 ? (active ? 'menu' : 'hidden') : 'menu'} id="menu">
                <li className="item">
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500} className='area'>Home</Link>
                </li>
                <li className="item">
                    <Link to="experience" spy={true} smooth={true} offset={0} duration={500} className='area'>Experience</Link>
                </li>
                <li className="item">
                    <Link to="skills" spy={true} smooth={true} offset={0} duration={500} className='area'>Projects</Link>
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