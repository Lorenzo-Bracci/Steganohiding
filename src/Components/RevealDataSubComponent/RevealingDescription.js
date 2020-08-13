import React from 'react';

function RevealingDescription() {
  //className="container-fluid" style={{padding:'0'}}
    return (
      //class="list-unstyled"
      //"entry-content"
    <div>
        <b>HOW TO RETRIEVE TEXT FROM AN IMAGE:</b>
        <ul className="entry-content" style={{'listStyleType': 'circle !important'}}>
  <li style={{border:'0', padding:'0'}} >Choose the image that you created using the HIDE DATA part of the website and then click submit</li>
  <li style={{border:'0', padding:'0'}} >Now you will be able to see the text that you hid in the image, by clicking on REVEAL NEXT you can start the process all over again for another image</li>
</ul>
<b>IMPORTANT: do not change the extension of the generated file when downloaded (.png), if you change the extension the algorithm might not be able to retrieve the concealed data in it.</b>
        
        </div>
  );
}



export default RevealingDescription;