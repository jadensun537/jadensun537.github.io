import '../CSS/skills.css';
import capital from '../imgs/Capital-One-Logo.png'
import React from 'react';

function Skills() {
  return(
    <> 
      <div className='skills' id='skills'>
        <h1 className='skills-title'></h1>
        <Card img ={capital} title = 'Advanced' description = 'Performed many operations with fullstack development'/>
        <Card img ={capital} title = 'Intermediate' description = 'Performed many operations with fullstack development'/>
        <Card img ={capital} title = 'Novice' description = 'Performed many operations with fullstack development'/>
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