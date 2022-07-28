import React, {useState, useEffect} from "react";
import '../CSS/links.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faInstagram,
    faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from '@fortawesome/free-regular-svg-icons';
import resume from '../imgs/Resume.pdf';
export default function Contact()
{
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')
    const [ref, setRef] = useState('')
    useEffect(() => {
        setRef('mailto:jadensun@umich.edu?subject=' + subject + '&body=' + body + "%0D%0A%0D%0Afrom,%0D%0A%0D%0A" + name)
    },[subject, body])
    return(
        <>
        <div className="grid" id="contact">
            <div className="body">
                <form>
                    <input type='text' id='fname' name='firstname' placeholder='Name...' onChange={(e) => setName(e.target.value)} value={name}></input>
                    <input type='text' id='lname' name='subject' placeholder='Subject...' onChange={(e) => setSubject(e.target.value)} value={subject}></input>
                    <textarea id="subject" name="body" placeholder="Your message..." onChange={(e) => setBody(e.target.value)} value={body}></textarea>
                </form>
                <a className="button" href={ref} onClick={()=>{setName(''); setSubject(''); setBody('')}}>Send</a>
            </div>
            <div className="links">
                <div className='socials'>
                    <a target="_blank" href='https://www.linkedin.com/in/jaden-sun-399552205/'
                        className='linkedin'>
                        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                    </a> 
                    <a target="_blank" href='https://www.instagram.com/sunnyeatsfoods/'
                        className='instagram'>
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </a>
                    <a target="_blank" href='https://github.com/jadensun537'
                        className='github'>
                        <FontAwesomeIcon icon={faGithub} size='2x'/>
                    </a>
                    <a target="_blank" href={resume}
                        className='resume'>
                        <FontAwesomeIcon icon={faFile} size='2x'/>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}