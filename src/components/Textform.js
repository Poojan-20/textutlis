import React ,{useState}from 'react'

export default function Textform(props) {
    const handleUppercaseClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted into Uppercase","success")
    }
    const handleLowercaseClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted into Lowercase","success")
    }
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied","success")
    }
    const handleextraspace =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces were Removed","success")
    }
    const handleOnchange =(event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#2e353e':'white',color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3 p-2" onClick= {handleUppercaseClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-3 p-2" onClick= {handleLowercaseClick} >Convert to lowercase</button>
            <button className="btn btn-primary mx-3 p-2" onClick= {handleCopy} >Copy</button>
            <button className="btn btn-primary mx-3 p-2" onClick= {handleextraspace} >Remove extra space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} Characters</p>
            <p>{0.008*text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text to Preview here"}</p>
        </div>
        </>

    )
}
