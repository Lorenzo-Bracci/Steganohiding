import React from 'react';
import { Link } from 'react-router-dom';

function Routing() {
  return (
    <div style={{'margin-top': '20px', 'margin-bottom': '20px',}}>
        <div className="container-fluid">
      <div className="row justify-content-center align-items-center no-gutters">
      <div className="col-6">
<Link to='/HideData' className="btn btn-primary btn-lg">HIDE DATA</Link>
</div>  
<div className="col-6">
<Link to='/RevealData' className="btn btn-primary btn-lg">REVEAL DATA</Link>
</div>    
</div> </div> </div>
  );
}

export default Routing;

/*export default withRouter(props => (
  <div>
        <div className="container-fluid">
      <div className="row justify-content-center align-items-center no-gutters">
      <div className="col-6">
<button onClick={() => props.history.push('/HideData')} className="btn btn-primary btn-lg">HIDE DATA</button>
</div>  
<div className="col-6">
<button onClick={() => props.history.push('/RevealData')} className="btn btn-primary btn-lg">REVEAL DATA</button>
</div>    
</div> </div> </div>
));*/