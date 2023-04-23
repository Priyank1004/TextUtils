import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("UpperCase Click");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);   
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
        // console.log(text)
    }
    const handleClClick = () =>{
        // let newText = text = '';
        setText('');
    }
    const handleCopyClick = () =>{
        var text = document.getElementById('Mybox');
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }
    const handleRemoveSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text,setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="Mybox" rows="8" value={text} onChange={handleOnChange} 
                    style={{backgroundColor: props.mode === 'light'?'white':'grey', 
                    color: props.mode === 'dark'?'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button> 
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy text</button>
                <button className="btn btn-primary mx-2" onClick={handleRemoveSpace}>Remove Extra Space</button>
            </div>
            <div className="conatiner my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h3>Yore Text Summry</h3>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p className='Text_proview_conatiner'>{text.length > 0 ? text:"Enter someting in the textbox above to previwe it Here"}</p>
            </div>
        </>
    )
}

