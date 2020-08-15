import React, {Component} from 'react';
import './RevealingSequence.css';
import axios from 'axios';
import FormData from 'form-data';

class RevealingSequence extends Component {


  /**<div className="col-2" style={{position: 'relative'}}>
  <button type="button" className="btn-lg btn-success" style={{position: 'absolute', bottom: '0', right: '0'}} onClick={this.resetState}>FIND NEW DATA</button>
  </div> */
    state = {
      selectedImage: localStorage.getItem('image') || null,
        imageName: localStorage.getItem('imageName') || "Choose File",
       // secretText: localStorage.getItem('secretText') || '',
       secretText: '',
        progress: localStorage.getItem('progress-reveal') || 0,
        errorMsg: '',
        badRequest: localStorage.getItem('bad-reveal') || 0
    }



handleChange = (e)=> {
    this.setState({
      selectedImage: e.target.files[0],
        imageName: e.target.files[0].name
      }, () => {
        localStorage.setItem('image', this.state.selectedImage)
        localStorage.setItem('imageName', this.state.imageName)
      }); 
      e.target.setCustomValidity('')
  }

  resetState = (e)=> {
         this.setState({
           secretText : '',
          progress: 0,
          badRequest: 0
      } ,() => {
       // localStorage.removeItem('secretText');
       localStorage.removeItem('bad-reveal');
        localStorage.setItem('progress-reveal', this.state.progress)
      });
  }


  submitFile = (e)=> {
    e.preventDefault();
    var _validFileExtension = '.png';   
    var sFileName = this.state.imageName;
     if (sFileName.length > 0) {
        var blnValid = false;
                if (sFileName.substr(sFileName.length - _validFileExtension.length, _validFileExtension.length).toLowerCase() == _validFileExtension.toLowerCase()) 
                blnValid = true;

        if (!blnValid) {
          this.setState({
            errorMsg: 'accepted format: .png'
        })
        }else{
          let data = new FormData(); 
          data.append('file', this.state.selectedImage);
          axios.post(global.config.serverReveal, data, {
            //responseType: 'blob', 
            headers: {
              //'Accept': 'application/png',
              'Content-Type': 'multipart/form-data; boundary=${data._boundary}',
            }
          }).then (response => {
          //  console.log(response);  
          this.setState({
              selectedImage: null,
              imageName: "Choose File",
              secretText : response.data,
                progress: 1,
                errorMsg: ''
            } ,() => {
              localStorage.removeItem('image');
              localStorage.removeItem('imageName');
              //localStorage.setItem('secretText', this.state.progress)
              localStorage.setItem('progress-reveal', this.state.progress)
            });
          }).catch(err => {
            // console.log(err)
             this.setState({
              selectedImage: null,
              imageName: "Choose File",
                progress: 1,
                errorMsg: '',
               badRequest: 1
           } ,() => {
            localStorage.removeItem('image');
            localStorage.removeItem('imageName');
            //localStorage.setItem('secretText', this.state.progress)
            localStorage.setItem('progress-reveal', this.state.progress)
             localStorage.setItem('bad-reveal', this.state.badRequest)
           }); 
           });
        }
    }else{
      this.setState({
        errorMsg: 'accepted formats: .png, .jpg, .gif'
    })
    }


  }



    render(){
  if(this.state.progress == 0){
  return (
<form style={{'marginBottom': '5vh', 'marginTop': '5vh'}} onSubmit={this.submitFile}>
<div className="container-fluid">
      <div className="row">
      <div className="col-10 text-center">
  <div className="custom-file w-50">
    <input type="file" className="custom-file-input" id="inputGroupFile02" onChange={this.handleChange} 
    onInvalid={(e) => { e.target.setCustomValidity('please enter a .png file') }} onChange={this.handleChange} required />
    <label className="custom-file-label" htmlFor="inputGroupFile02">{this.state.imageName}</label>
  </div> 
  <h6>{this.state.errorMsg}</h6>   
  </div>
  <div className="col-2">
  <input className="btn btn-success" type="submit"/>
  </div>

  </div>
  </div>
</form>
);
}else if(this.state.progress == 1){
  if(this.state.badRequest == 0){
return(
        <div className="container" style={{'marginBottom': '5vh', 'marginTop': '5vh'}} >
      <div className="row">
      <div className="col-8 text-center">
        <div className="w-100">
    <label style={{'boxSizing' : 'border-box', color: '#495057'}} htmlFor="Textarea"><b>Secret Text</b></label>
    <textarea style={{'boxSizing' : 'border-box', 'borderColor': '#4CAF50'}} className="form-control" id="FormControlTextarea" value={this.state.secretText} readOnly></textarea>
  </div>
  </div>
  <div className="col-4" style={{position: 'relative'}}>
        <button type="button" className="btn btn-success" onClick={this.resetState} style={{position: 'absolute', bottom: '0', right: '0'}}>REVEAL NEXT</button>
        </div>
  
    </div>
    </div>
);
}else{
  return(
    <div className="container" style={{'marginBottom': '5vh', 'marginTop': '5vh'}} >
  <div className="row">
  <div className="col-8 text-center">
    <h5>SOMETHING WENT WRONG, MAKE SURE THAT YOU USED AN IMAGE CREATED WITH THIS WEBSITE</h5>
</div>
<div className="col-4" style={{position: 'relative'}}>
    <button type="button" className="btn btn-success" onClick={this.resetState} style={{position: 'absolute', bottom: '0', right: '0'}}>REVEAL NEXT</button>
    </div>

</div>
</div>
);
}
}
    }
}

export default RevealingSequence;