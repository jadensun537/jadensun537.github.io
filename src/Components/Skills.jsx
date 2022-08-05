import '../CSS/skills.css';
import jaden from '../imgs/Jaden.png'
import uofm from '../imgs/U-M_Logo-Hex.png'
import zoo from '../imgs/zoo.png'
import solar from '../imgs/solar.png'
import capital from '../imgs/Capital-One-Logo.png'
import React from 'react';

function Skills() {
  return(
    <> 
      <div className='skills' id='skills'>
        <div className='skills-title'>
          <h1>Projects</h1>
        </div>
        <Card img ={jaden} title = 'Personal Site' description = 'This is the website you have been interacting with! I decided to take on building this website to better learn about web development and more modern technologies. With React, HTML, and CSS, I was able to build this website from scratch (low number of imported libraries and no copy pasting). With over 1000+ lines of code, this website has many features to create a smooth and interactive viewing experience (Try out the contact form!). Many useful functions and important concepts were used within this project, including things like routing, state, and a gridding system.'/>
        <Card img ={zoo} title = 'Zoo Map' description = 'The zoo map project was done through my data structures and algorithms course, and was one of the most interesting course projects I have worked on. The goal was to take a coordinate plane filled coordinates representing animal enclosures, and finding the most efficient path there is to visit all animals (least distance covered). This required implementing algorithms such as Traveling Salesperson and using Minimum Spanning trees to calculate the best path. After the algorithm was implemented, speed and memory restrictions were set in place and required an iteration on the original to implement heuristics (shortcuts and estimates) to reduce the time and space while staying within a specific threshold of the best case solution.'/>
        <Card img ={solar} title = 'Analysis of Solar Power' description = "Analysis of solar power was a great project to see software integrating with hardware. My team was tasked to create a self charging solar panel system using solar panels, arduinos, and circuit boards. Our design had to be able to track and then point the solar panel towards the largest light source (for best charging capabilities). Our solution used a baffle system with photodiodes to differentiate between light levels from each direction. As the programming lead, I then designed an algorithm to take the photodiode readings and determine whether or not the solar panel needed to move if there were higher light levels. Our team ended up placing among the top for our efficient design and power conservation."/>
      </div>
    </>
   
    );
}
export default Skills;

function Card(props) {
  return (
    <div className='skills-card'>
      <div className='skills-card-body'>
        <img src={props.img} className='skills-card-img'/>
        <h2 className='skills-card-title'>
          {props.title}
        </h2>
        <p className='skills-card-description'>
          {props.description}
        </p>
      </div>
    </div>
  )
}