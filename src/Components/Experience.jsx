import '../CSS/home.css';
import capital from '../imgs/Capital-One-Logo.png';
import atlas from '../imgs/Atlas-digital.png';
import ostc from '../imgs/OSTC.png';
import React , {useState} from 'react';
import mag from '../imgs/mag_glass.png'

function Experience() {
  return(
    <> 
      <div className='home' id='experience'>
        <div className='home-title'>
          <h1>Experience</h1>
        </div>
        <Card img ={capital} title = 'Capital One' 
          description = "As a fullstack software engineer intern, I spent the summer of 2022 working under the Risk Tech line of business. The internship was 10 weeks long and monitored by Technology Internship Program (TIP). My team's deliverable was to create a customizable and personalized dashboard with an infinite feed filled with useful internal tools/widgets."
          back = "At Capital One, my project let me dive into everything from the UI to RDS database management, and the APIs in between. The project focused on creating a personalized experience for each user by using their information retrieved through SSO as well as their interactions with each widget that lived on the dashboard. We wanted to provide a solution that would cut down the amount of navigation auditors needed to find relevant tasks and information as well as minimal effor to onboard new applications that are developed independently. My main tasks were: to help design a databse hosted on Amazon's RDS, to build an UI and API that could be integrated end to end to onboard, import, then render widgets and their metadata, and to create a smart placement algorithm that takes in user information and preferences and bubbles the widgets they would most likely use to the top of the page using data structures like priority queues. During this project, I learned how to use many new technologies and even a few new languages (Javascript, Typescript, React, CSS, Flask, Redux, Snowflake, Python, SQL, etc)"
          />
        <Card img ={atlas} title = 'Atlas Digital' 
          description = "Admitted in January 2022, I have worked as a pro bono software consultant for a project called Locheck. Locheck's goal was to build a mobile app to encourage users to recycle anything and be rewarded by bringing recyclable items to nearby recycling centers shown via the app."
          back = "At Atlas digital, the Locheck project was my main focus. Continuing on previously built UI, the task I was assigned entailed creating and connecting a new firebase database to the UI. Testing was done using firebase technologies to monitor the data being sent to and from the mobile applications. The next steps to be taken with this project are to store item information, store user data, track dropoffs, and to display recycling centers based on image detection or barcode scanning."
          />
        <Card img ={ostc} title = 'OSTC NE' 
          description = 'Starting as a member in 2016, I eventually became the design lead for the student run OCCRA robotics league in 2019. As a design lead, I facilitated many design and educational sessions to best prepare my team in all aspects of design such as enforcing the engineering process and teaching physics mechanics on things like center of mass and projectile motion.'
          back = "At Oakland Technical Schools NorthEast, I was apart of a small robotics team called the Juggernauts. As a member, my tasks consisted mostly of discussing designs and then prototyping and building out the robots. My greatest experience came from my time as the design lead and captain where I learned how to lead a team and set in place systems to keep members engaged and valued. I opened long design sessions where all members were given the opportunity to pitch ideas and discuss possible pitfalls and reinforce strong ideas. Other than leading just design sessions, I spent time ensuring that members were learing and understanding the ideas being presented so that there would be more contribution. This was acheived by organizing educational sessions where I explained basic physics/programming concepts with presentations and even demos. In the 2019 season, our design had placed us into the semi finals for the county wide championship and put in place a strong foundation of understanding and collaboration for the upcoming leaders."
          />
        <Card img ={mag} title = 'Looking For More...' 
          description = "I am still in search of as many opportunities to learn and grow through real world experiences :) I hope to gain experience in various fields such as machine learning, cloud computing, and many others. Thank you for taking the time to visit this page!"
          back = ""
          />
      </div>
    </>
   
    );
}
export default Experience;

function Card(props) {
  const [clicked, setClicked] = useState(true)
  if(clicked){
    return( 
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
          <button className='card-btn' onClick={() => {setClicked(!clicked)}}>See More</button>
        </div>
      </div>
    )
  }
  else {
    return(
      <div className='card'>
        <p className='card-back'>
          {props.back}
        </p>
        <div className='button-wrapper'>
          <button className='card-btn' onClick={() => {setClicked(!clicked)}}>Back</button>
        </div>
      </div>
    )
  }
}