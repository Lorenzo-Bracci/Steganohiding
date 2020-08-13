import React, {Component} from 'react';
import Header from './LandingPageSubcomponents/Header.js';
import Description from './LandingPageSubcomponents/Description.js';
import Routing from './LandingPageSubcomponents/Routing.js';
import Footer from './LandingPageSubcomponents/Footer.js';
import './LandingPageSubcomponents/LandingPage.css';




  class LandingPage extends Component {
state = {
  showBackToHomePage : false
}
  
render(){
  return (
    <div className="Site">
    <div className="Site-content">
    <Header/> 
    <Description/>
    <Routing/>
    </div>
    <div  className="Site-footer">
    <Footer />
    </div>
    </div>
  );
}
}

export default LandingPage;