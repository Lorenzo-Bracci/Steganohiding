import React, {Component} from 'react';
import Header from './../LandingPageSubcomponents/Header.js';
import Footer from './../LandingPageSubcomponents/Footer.js';
import RevealingDescription from './RevealingDescription.js';
import RevealingSequence from './RevealingSequence.js';
import './RevealData.css';

class RevealData extends Component {
    render(){
  return (
    <div className="Site">
    <div className="Site-content">
    <Header/> 
    <RevealingDescription/>
    <RevealingSequence/>
    </div>
    <div  className="Site-footer">
    <Footer />
    </div>
    </div>
  );
}
}

export default RevealData;