import './Description.css';

import React from 'react';

function Description() {
  return (
    <div>
   <div className="jumbotron border border-secondary mb-0">
       <h1 className="innerH1">HOW TO USE STEGANOHIDING</h1>
       <p>In this webpage you can hide any text data into an image and afterwards you will be able to retrive the
           hidden data at any time you want. All you need to do to create the image file with your secret data is to click on the 
           "HIDE DATA" button which you can find in the left below this paragraph and follow the instruction. If you already created the
           image file and now you want to retrieve your data all you need to do is to click on the button "REVEAL DATA" below
           this section and follow the instructions (make sure that you do not change the format of the image generated using this website).
           <br />
           <b>A LITTLE DISCLAIMER:</b> this website can only find the hidden data in images generated using the "HIDE DATA" part of this webpage.
           <br /><b>FOR MORE DETAILS ABOUT STEGANOGRAPHY:</b> <a className="text-success" href="https://en.wikipedia.org/wiki/Steganography">Wikipedia page about Steganography</a>
       </p>
   </div>
    </div>
  );
}

export default Description;