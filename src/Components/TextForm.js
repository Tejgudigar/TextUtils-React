import React, { useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("handleOnClick is cliked");
        let newText = text.toUpperCase();
         setText(newText);
         props.showAlert("Converted to Uppercase","success");
    }
     const handleClearClick=() => {
        let newtext = '';
        setText(newtext);
        props.showAlert("Text has been cleared","success");
     }
    const handleLowClick = () => {
        // console.log("handleLowClick is cliked");
        let newText =text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }  

    const handleInvreseClick = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Text has been Inversed","success");
    }

    const handleCopyClick = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard","success");
    }

    const handleREClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space has been removed","success");
    }

    
    const handleOnChange = (event) => {
        // console.log("handleOnChange is cliked");
        setText(event.target.value);

    }


    const[text, setText] = useState('');
    let wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
  return (
        <>
            <div className="container" style = {{color: props.mode === 'dark' ? 'white' :'color'}}>
                 <h1 className='mb-3' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value = {text} onChange ={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#494747ff' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Uppercase  </button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick} >Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleInvreseClick}>Inverse</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleREClick}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{wordCount} words and {text.length} characters</p>
                <p>{0.08 * wordCount} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
  )
}
