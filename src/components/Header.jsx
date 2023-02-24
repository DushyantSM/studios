import React from 'react'
import { Link } from 'react-router-dom';
import TS from '../assets/that.png';
import ts from '../assets/studios.png';

// import  '/assets/TSlogo';
// import '//styles/header.scss';

function Header() {
  return (
    <>
    <nav>
      <div class="logo">
        <img class="that" src={TS} alt="" />
        <img class="studios" src={ts} alt="" />
      </div>
      
        <main>
            
            <Link class = "work" to={"https://drive.google.com/file/d/1ydO-6d7ncS3PByd_5VzSfJXHdkdnToWj/view"}>Our work</Link>
        </main>
        
    </nav>
    <hr></hr>
    </>
    
   )
}

export default Header