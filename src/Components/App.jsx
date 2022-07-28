import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  NavLink
} from "react-router-dom";
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import Experience from './Experience';
import Gallery from './Gallery';
import Navbar from './Navbar';
import Header from './Header';
import Skills from './Skills';
import Contact from './Contact';

export default function App()
{
    return(
        <div>
            <Navbar/>
            <Header/>
            <Experience/>
            <Skills/>
            <Contact/>
        </div>
    );
}
