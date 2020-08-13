import React, {Component} from 'react';
import './Header.css';
import {ReactComponent as Logo} from './Lock_pending.svg';
import { Link } from 'react-router-dom';
import Title from './name.png';
//import {Container, Row, Col} from  "react-bootstrap";

class Header extends Component {

  resetReveal = (e)=> {
   localStorage.removeItem('progress-reveal');
   localStorage.removeItem('bad-reveal');
}

resetHide = (e)=> {
  localStorage.removeItem('fileName');
  localStorage.removeItem('progress-stage');
  localStorage.removeItem('bad-hide');
}


  /**
   * <div className="col-3 col-md-2 col-lg-1">
<button type="button" className="btn btn-primary btn-block">Register</button> 
    </div>
    <div className="col-3 col-md-2 col-lg-1">
    <button type="button" className="btn btn-primary btn-block">Login</button>
    </div> 
   */
  /**
   * <div className="col-6 col-md-4 col-lg-2">
<Link to='/' className="btn btn-primary btn-block">BACK TO HOMEPAGE</Link>
    </div> 
   */

   /**
    * <div className="col-10 col-md-9 col-lg-9">
         <h1> STEGANOHIDING </h1>
        </div>
        <div className="col-2 col-md-3 col-lg-3">
    <Logo />     
        </div> 
    */
  render(){
  
    if(window.location.href == "http://steganohiding.com/"){
      return (
        <div>
          <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
        <div className="col-12">
        <img src={Title} style={{'width': '30%' 
  }}/>
        </div>
      </div>
      </div>
        </div>
      );
    }else if(window.location.href == "http://steganohiding.com/HideData"){
      return (
    <div>
      <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
      <div className="d-none d-sm-block col-md-8 col-lg-8 text-center">
 <img src={Title}/>
</div>
 
<div className="col-4 col-md-2 col-lg-2"> 
<Link to='/' className="btn btn-primary btn-block" onClick={this.resetHide}>TO HOMEPAGE</Link>
</div>
<div className="col-4 col-md-2 col-lg-2">
<Link to='/RevealData' onClick={this.resetHide} className="btn btn-primary btn-block">REVEAL DATA</Link>
</div>  
  </div>
  </div>
    </div>
  );
}else if(window.location.href == "http://steganohiding.com/RevealData"){
  return (
<div>
  <div className="container-fluid">
  <div className="row justify-content-center align-items-center">
<div className="d-none d-sm-block col-md-8 col-lg-8 text-center">
<img src={Title}/>
</div>
 
<div className="col-4 col-md-2 col-lg-2"> 
<Link to='/' className="btn btn-primary btn-block" onClick={this.resetReveal}>TO HOMEPAGE</Link>
</div>
<div className="col-4 col-md-2 col-lg-2">
<Link to='/HideData' onClick={this.resetReveal} className="btn btn-primary btn-block">HIDE DATA</Link>
</div>  
</div>
</div>
</div>
);
}
}
}

export default Header;