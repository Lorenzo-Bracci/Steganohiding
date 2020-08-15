import React, {Component} from 'react';
import './HideSequence.css';
import axios from 'axios';
import FormData from 'form-data';

class HidingSequence extends Component {

    state = {
      selectedFile: localStorage.getItem('file') || null,
        fileName: localStorage.getItem('fileName') || "Choose File",
        hiddenText: localStorage.getItem('hiddenText') || '',
        progress: localStorage.getItem('progress-stage') || 0,
        finalImage: null,
        errorMsg: '',
        badRequest: localStorage.getItem('bad-hide') || 0
    }
  /* <div class="custom-file w-75">
  <input type="file" id="customFile"/>
  <label className="submitFile" for="customFile">Choose file</label>
</div> */  
    
/*
<div class="button-wrap">
      <input id="upload" type="file" />
  <label class ="new-button" for="upload"> Upload CV</label>
</div>
 */



handleHiddenText = (e)=> {
    this.setState({hiddenText: e.target.value
    },    () => {
            localStorage.setItem('hiddenText', this.state.hiddenText)
          });
  }


handleChange = (e)=> {
  
    this.setState({
      selectedFile: e.target.files[0],
        fileName: e.target.files[0].name
      }, () => {
        localStorage.setItem('file', this.state.selectedFile)
        localStorage.setItem('fileName', this.state.fileName)
      }); 
  }

  resetState = (e)=> {     
    this.setState({
          selectedFile: null,
          fileName: "Choose File",
          progress: 0,
          finalImage: null,
          badRequest: 0
      } ,() => {
        localStorage.removeItem('bad-hide');
        localStorage.removeItem('file');
  localStorage.removeItem('fileName');
        localStorage.setItem('progress-stage', this.state.progress)
      });
  }



  submitFile = (e)=> {
    e.preventDefault();
    var _validFileExtensions = [".jpg", ".gif", ".png"];   
        var sFileName = this.state.fileName;
         if (sFileName.length > 0) {
            var blnValid = false;
            for (var j = 0; j < _validFileExtensions.length; j++) {
                var sCurExtension = _validFileExtensions[j];
                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;
                    break;
                }
            }
             
            if (!blnValid) {
              this.setState({
                errorMsg: 'accepted formats: .png, .jpg, .gif'
            })
            }else{
              this.setState({
                progress: 1,
                errorMsg: ''
            } ,() => {
              localStorage.setItem('progress-stage', this.state.progress)
            });
            }
        }else{
          this.setState({
            errorMsg: 'accepted formats: .png, .jpg, .gif'
        })
        }

  }

  hideData = (e)=> {
  //const data = {hei: this.state.hiddenText, hej: this.state.hiddenText};
    e.preventDefault();
    let data = new FormData(); 
    data.append('file', this.state.selectedFile);
    data.append('secretData', this.state.hiddenText);
    axios.post(global.config.serverHide, data, {
      responseType: 'blob', 
      headers: {
        'Accept': 'application/png',
        'Content-Type': 'multipart/form-data; boundary=${data._boundary}',
      }
    }).then (response => {
      const finalBlob = new Blob([response.data]);
    this.setState({
      hiddenText: '',
      progress: 2,
      finalImage: finalBlob
  } ,() => {
      localStorage.removeItem('hiddenText');
    localStorage.setItem('progress-stage', this.state.progress)
  });    
    })
      .catch(err => {
       // console.log(err)
        this.setState({
          hiddenText: '',
      progress: 2,
          badRequest: 1
      } ,() => {
        localStorage.removeItem('hiddenText');
        localStorage.setItem('progress-stage', this.state.progress)
        localStorage.setItem('bad-hide', this.state.badRequest)
      }); 
      });
    
}

reverse = (str) => { 
  return str.split('').reverse().join('') 
} 

downloadFile = (e) =>{
  const url = window.URL.createObjectURL(this.state.finalImage);
  const link = document.createElement('a');
  link.href = url;
  var name = this.reverse(this.state.fileName);
  var pos = 0;
  while(name.charAt(pos) != '.')
pos++;

  link.setAttribute('download', 'sh' + this.reverse(name.substring(pos, name.length)) + 'png');
  document.body.appendChild(link);
  link.click();
  this.setState({
    selectedFile: null,
    fileName: "Choose File"
} ,() => {
  localStorage.removeItem('file');
  localStorage.removeItem('fileName');
});    
}

    render(){
  if(this.state.progress == 0){
  return (
<form style={{'marginBottom': '5vh', 'marginTop': '5vh'}} onSubmit={this.submitFile}>
<div className="container-fluid">
      <div className="row">
      <div className="col-10 text-center">
  <div className="custom-file w-50">
    <input type="file" className="custom-file-input" id="inputGroupFile02" onChange={this.handleChange} required />
    <label className="custom-file-label" htmlFor="inputGroupFile02">{this.state.fileName}</label>
  </div>    
  <h6>{this.state.errorMsg}</h6>
  </div>
  <div className="col-2">
  <input className="btn btn-success" type="submit" />
  </div>

  </div>
  </div>
</form>
);
}else if(this.state.progress == 1){
return(
    <form style={{'marginBottom': '5vh', 'marginTop': '5vh'}} onSubmit={this.hideData}>
        <div className="container" >
      <div className="row">
      <div className="col-10 text-center">
        <div className="w-100">
    <label style={{'boxSizing' : 'border-box', color: '#495057'}} htmlFor="Textarea"><b>Text to hide</b></label>
    <textarea style={{'boxSizing' : 'border-box', 'borderColor': '#4CAF50'}} className="form-control" id="FormControlTextarea" value={this.state.hiddenText} onChange={this.handleHiddenText} rows="3"  required  maxLength="10000"></textarea>
  </div>
  </div>
  <div className="col-2" style={{position: 'relative'}}>
  <input className="btn btn-success" type="submit" style={{position: 'absolute', bottom: '0', right: '0'}}/>
  </div>
    </div>
    </div>
    </form>
);
}else{
  if(this.state.badRequest == 0){
    return(
        <div className="container" style={{'marginBottom': '5vh', 'marginTop': '5vh'}}>
      <div className="row">
      <div className="col-6 final-step">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <button className="btn-download" onClick={this.downloadFile}><i className="fa fa-download"></i> Download image</button>
        </div>
        <div className="col-6 final-step">
        <button type="button" className="btn-lg btn-success" onClick={this.resetState}>HIDE NEW DATA</button>
        </div>
        </div>
        </div>
    );}else{
      return(
      <div className="container" style={{'marginBottom': '5vh', 'marginTop': '5vh'}}>
      <div className="row">
      <div className="col-6 final-step">
        <h5>SOMETHING WENT WRONG, TRY USING ANOTHER IMAGE OR SHORTER TEXT</h5>
        </div>
        <div className="col-6 final-step">
        <button type="button" className="btn-lg btn-success" onClick={this.resetState}>HIDE NEW DATA</button>
        </div>
        </div>
        </div>
    );}
}
    }
}

export default HidingSequence;