import React, { useState } from 'react'
import logo from './00900.png';
import { FaBars,FaTimes,FaTwitter   } from "react-icons/fa";
import {links,socials} from './data';

function Navbar() {
    const[showLink,setShowLinks] = useState(false);
  return (
    <nav>
        <div className="container">
        <div className="nav-logo">
                <button className='nav-toggle' onClick={()=>setShowLinks(!showLink)}>
                    <FaBars/>
                </button>
                <img src={logo} ali=''/>
        </div>
      {
        showLink &&
        <div className="nav-links">
              <ul className='list'>
                  {
                      links.map((link) =>{
                          const {id,url,text} = link;
                          return(
                              <li key={id}>
                                  <a href={url}>{text}</a>
                              </li>
                          )
                          
                      })
                  }
              </ul>
        </div>
      }
      <div className="nav-social">
        {
            socials.map((social)=>{
                const {id,url,icon}= social;
                return(
                    <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                )
            })
        }
      </div>
        </div>
    </nav>
  )
}

export default Navbar