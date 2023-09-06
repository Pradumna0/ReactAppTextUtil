import React,{useState} from 'react'


export default function TextForm(props) {
    const[text, setText]= useState('');

   const handleUpClick =()=>{
    console.log("UpperCase was Clicked"+text);
   let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To upperCase!","success");
   }
   const handleLowClick =()=>{
    console.log("LowerCase was Clicked"+text);
   let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To lowerCase!","success");
   }
   const clearText =()=>{
    console.log("clear text was Clicked"+text);
   let newText= '';
    setText(newText);
    props.showAlert("Text cleared SuccessFully","success");
   }

   const handleCopy =()=>{
    console.log("I am Copy");
    var text = document.getElementById('mybox');
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied","success");
   }

   const handleExtraSpaces =()=>{
    console.log("Handle Etra  Spaces was Clicked");
   let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces remove successfully!","success");
   }


   const handleOnChanged =(event)=>{
    console.log("Handle On changed");
    setText(event.target.value);
    
   }
    
  return (
    <>
    <div className='conatainer' style={{color:props.mode==='dark'?'white':'#042743'}}>
     <h1>{props.heading}</h1>
     
  <div className="mb-3" >
  <textarea className="form-control" id= "mybox" value={text} onChange={handleOnChanged}  style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'#042743'}} cols="30" rows="10"></textarea>
     </div>
     <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
     <button type="submit" className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
     <button type="submit" className="btn btn-primary mx-2" onClick={clearText}>ClearText</button>
     <button type="submit" className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
     <button type="submit" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Etxra Spaces</button>





     </div>
     <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minute read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something  in the textboxabove to preview it here"}</p>
     </div>
     </>
  )
}
