import '../CSS/home.css';
import capital from '../imgs/Capital-One-Logo.png';
import atlas from '../imgs/Atlas-digital.png';
import React from 'react';

function Experience() {
  return(
    <> 
      <div className='home' id='experience'>
        <h1 className='home-title'></h1>
        <Card img ={capital} title = 'Capital One' description = 'Performed many operations with fullstack development'/>
        <Card img ={atlas} title = 'Atlas Digital' description = 'Performed many operations with fullstack development'/>
        <Card img ={capital} title = 'Capital One' description = 'Performed many operations with fullstack development'/>
        <Card img ={capital} title = 'Capital One' description = 'Performed many operations with fullstack development'/>
      </div>
    </>
   
    );
}
export default Experience;

function Card(props) {
  return (
    <div className='card'>
      <div className='card-body'>
        <img src={props.img} className='card-img'/>
        <h2 className='card-title'>
          {props.title}
        </h2>
        <p className='card-description'>
          {props.description}
        </p>
      </div>
      <div className='button-wrapper'>
        <button className='card-btn'>See More</button>
      </div>
    </div>
  )
}

  // return(
  //   <>
  //     <table>
  //       <tbody>
  //           <tr>
  //               <td><img id="michigan" src={logo} alt="uofm logo" height="100"/></td>
  //               <td><h1>Jaden Sun</h1>
  //                   <p><em>Computer Science Student at the <strong>University of Michigan</strong></em></p></td>
  //           </tr>
  //         </tbody>
  //       </table>
  //       <div className="section">
  //         <hr size="2" noshade = "true"/>
  //         <h3 className="alternate">About Me</h3>
  //       </div>
  //       <hr noshade = "true"/>
  //       <h3>Resume and LinkedIn</h3>
  //         <ul>
  //           <li><a href="https://www.atlasdigital.org/">Resume</a></li>
  //           <li><a href="https://www.linkedin.com/in/jaden-sun-399552205">LinkedIn</a></li>
  //           <li><a href="https://www.atlasdigital.org/">GitHub</a></li>
  //         </ul>
  //       <hr noshade = "true"/>
  //       <h3 className="alternate">Activities</h3>
  //         <ul>
  //           <li><a href="https://www.atlasdigital.org/">Atlas Digital Consulting Group</a></li>
  //           <li><a href="https://www.facebook.com/michiganclubswim/">Michigan Club Swim</a></li>
  //           <li><a href="https://www.allianceconsultinggroup.org/">Alliance Consulting Group</a></li>
  //         </ul>
  //       <hr noshade = "true"/>
  //       <h3>Interests and Hobbies</h3>
  //         <ul>
  //           <li>ML Algorithms</li>
  //           <li>Data Processing</li>
  //           <li>Full Stack Development</li>
  //           <li>Music</li>
  //           <li>Blockchain Technology</li>
  //           <li>Swimming</li>
  //           <li>Legos</li>
  //         </ul>
  //       <hr noshade = "true"/>
  //   </>
  // );