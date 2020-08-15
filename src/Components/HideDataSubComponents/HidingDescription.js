import React from 'react';

function HidingDescription() {
  //className="container-fluid" style={{padding:'0'}}
    return (
      //class="list-unstyled"
      //"entry-content"
    <div>
        <b>HOW TO HIDE TEXT IN AN IMAGE:</b>
        <ul className="entry-content" style={{'listStyleType': 'circle !important'}}>
  <li style={{border:'0', padding:'0'}} >Choose the image (only accepted format: .png) where you want to hide your data (no other multimedia file is supported by this website) and then click submit</li>
  <li style={{border:'0', padding:'0'}} >Type the text that you want to hide inside the box that pops up after that you chose your image, afterwards click submit</li>
  <li style={{border:'0', padding:'0'}} >Now you can download the image containing the hidden data clicking on download, or by clicking on HIDE NEXT you can start the process all over again for another file</li>
</ul>
<b>IMPORTANT: do not change the extension of the generated file when downloaded (.png), if you change the extension the algorithm might not be able to retrieve the concealed data in it.</b>
        
        </div>
  );
}



export default HidingDescription;