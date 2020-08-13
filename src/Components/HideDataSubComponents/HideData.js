import React, {Component} from 'react';
import Header from './../LandingPageSubcomponents/Header.js';
import Footer from './../LandingPageSubcomponents/Footer.js';
import HidingDescription from './HidingDescription.js';
import HidingSequence from './HidingSequence.js';
import './HideData.css';

class HideData extends Component {
    
   
    
    render(){
  return (
    <div className="Site">
    <div className="Site-content">
    <Header/> 
    <HidingDescription/>
    <HidingSequence/>
    </div>
    <div  className="Site-footer">
    <Footer />
    </div>
    </div>
  );
}
}

export default HideData;