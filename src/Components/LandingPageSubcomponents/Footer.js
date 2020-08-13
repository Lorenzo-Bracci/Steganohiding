
import React from 'react';
import Logo from './logo.png';

function Footer() {
  return (
      //style={{height:'20vh'}}
      //bg-dark text-white
      
    <div className="container-fluid" style={{padding:'0', 'margin-top': '10px'}} >
        <div className="h-100 page-footer border-top border-secondary text-center" >
        <img src={Logo}/>
            <h6 className="text-center">Author: Lorenzo Bracci</h6>
            <h6 className="text-center">Contact me at <a href="mailto:steganohiding@outlook.com" rel="noopener noreferrer" target="_blank">steganohiding@outlook.com</a></h6>
            </div>
        </div>
  );
}

export default Footer;