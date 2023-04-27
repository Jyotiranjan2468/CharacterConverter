import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAleart("Converted to Upercase","Success");
  }
  const handleLoClick =()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAleart("Converted to Lowercase","Success");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const[text,setText]=useState('');
  return (
    <>
    <div style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
       <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'white':'white',color: props.mode==='dark'?'black':'black' }} id="myBox" rows="3"></textarea>
       </div>
       <button className="btn btn-secondary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-secondary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'black':'black'}}>
      <h2>TextSummary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
    </div>
    </>
  )
}
