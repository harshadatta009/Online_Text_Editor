import React, { useState } from "react";

export default function TextForm(props) {
	const [text, setText] = useState("");
	
	const handleUpClick = () => {
		// console.log("Uppercase was Clicked", text);
		let newText = text.toUpperCase();

		setText(newText);
	};
	const handleLoClick = () => {
		// console.log("Uppercase was Clicked", text);
		let newText = text.toLowerCase();

		setText(newText);
	};
	const handleClear = () => {
    //   console.log("You have clicked on clear");
    if(text !== '')
    {
      let cleartext = "";
      setText(cleartext);
      
    }
  }
  	const handlecopyfunction = () => {
    if(text !== '')
    {
      var copyText = document.getElementById("text");
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      
    }
  }
  const handleOnChangeAlert = () => {
      alert("Cannot edit in preview");
  }
	const handleOnChange = (event) => {
		// console.log("On change");
		setText(event.target.value);
	};

	const handleExtraspaces = () => {
    if(text !== '')
    {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
     
    }
    
  }


	let  styledark = {
    color: '#fff',
    backgroundColor:'#3A3B3C',
    fontWeight: '400',
    fontSize:'20px'
  }

  let stylelight = {
    color: '#000',
    backgroundColor:'#fff',
    fontWeight: '400',
    fontSize:'18px'
  }

  let style2dark = {
    color: '#fff'
  }

  let style2light = {
    color:'#000'
  }
	return (
		<>
			<div className="container">
				<h1>{props.heading}</h1>
				<div className="mb-3">
					<textarea
						className="form-control"
						value={text}
						id="myBox"
						rows="8"
						onChange={handleOnChange}
					></textarea>
				</div>
				<button className="btn btn-primary mx-2" onClick={handleUpClick}>
					Convert to uppercase
				</button>
				<button className="btn btn-primary mx-2" onClick={handleLoClick}>
					Convert to lowercase
				</button>
				<button className="btn btn-primary mx-2" onClick={handleExtraspaces}>
					Remove Extra spaces
				</button>
				<button className="btn btn-success mx-2" onClick={handlecopyfunction}>
					Copy
				</button>
				<button className="btn btn-danger mx-2" onClick={handleClear}>
					Clear
				</button>
			</div>
			<div className="container my-2">
				<h1>Your Text summary</h1>
				<p>
					{text.split(" ").length} words, {text.length} characters{" "}
				</p>
				<p>{0.008 * text.split(" ").length} Minutes read</p>
				<h2 >Preview</h2>
				<div className="content">
				<textarea
					className="form-control"
					id="text"
					rows="3"
					value={text}
					style={props.mode==='dark'?styledark:stylelight}
					onChange={handleOnChangeAlert}
				></textarea>
        </div>
			</div>
		</>
	);
}
