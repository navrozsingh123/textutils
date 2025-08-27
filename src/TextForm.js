import React,{useState} from 'react'

export default function TextForm(props) {
    
    const [text, setText] = useState("");
    const handelUpClick = ()=>{
        // console.log("upper case was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handelLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handelClearClick=()=>{
        let newText = '';
        setText(newText);
    }
    const handelCopyClick=()=>{
        navigator.clipboard.writeText(text);
       props.showAlert("Copied to Clipboard", "success");
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handelOnChange = (event)=>{
            // console.log("On Change");
            setText(event.target.value);
    }

    // text("hello ji");//wrong way to change the state;
    //setText("enter");//correct way to change the state; but we cannot call it directly here because it create infinite loop
    return (
        <>
            <div className='container' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelLoClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelClearClick}>Clear All</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelCopyClick}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h1>Your Text summary:</h1>
                {/* <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p> */}
                {/* <p>{0.008*text.split(/\s+/).filter((element) => element.length !== 0).length} minutes</p> */}
                <p>{text.split(" ").filter((element)=>{ return element.length !==0}).length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{ return element.length !==0}).length} minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0? text: "Nothing to Preview."}</p>
            </div>
        </>
    )
} 
