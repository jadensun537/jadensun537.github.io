import React from 'react';
import image from '../imgs/pfp-removebg-preview.png';
import '../CSS/header.css';

export default function Header() {
    return(
        <div className='header' id='home'>
            <div className='header-left'>
                <div className='header-left-wrapper'>
                    <h2 className='header-intro'>Hello, My name is</h2>
                    <br/>
                    <h1 className='header-name'>Jaden Sun</h1>
                    <br/>
                    <div className='header-title'>
                        <div className='header-title-wrapper'>
                            <div className='header-title-item'>Programmer</div>
                            <div className='header-title-item'>Student</div>
                            <div className='header-title-item'>Foodie</div>
                            <div className='header-title-item'>Swimmer</div>
                            <div className='header-title-item'>Explorer</div>
                        </div>
                    </div>
                    <br/>
                    <p className='header-about'>
                        I am a current junior studying computer science through the college of
                         engineering at the University of Michigan. I am a passionate explorer
                         of everything new. Keep scrolling to learn more about my experiences 
                         and hobbies. Welcome to my personal website!
                    </p>
                </div>
            </div>
            <div className='header-right'>
                <div className='header-right-bg'></div>
                <img className='header-pic' src={image}/>
            </div>
        </div>
    );
}