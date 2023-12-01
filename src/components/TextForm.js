import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleCaseConversion = (conversionType) => {
    let newText =
      conversionType === "uppercase" ? text.toUpperCase() : text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    setText("");
  };

  const handleCopyFunction = () => {
    if (text !== "") {
      var copyText = document.getElementById("text");
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
    }
  };

  const handleOnChangeAlert = () => {
    alert("Cannot edit in preview");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraspaces = () => {
    if (text !== "") {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }
  };

  const styles = {
    dark: {
      color: "#fff",
      backgroundColor: "#3A3B3C",
      fontWeight: "400",
      fontSize: "20px",
    },
    light: {
      color: "#000",
      backgroundColor: "#fff",
      fontWeight: "400",
      fontSize: "18px",
    },
  };

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
        <button
          className="btn btn-primary mx-2"
          onClick={() => handleCaseConversion("uppercase")}
        >
          Convert to uppercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => handleCaseConversion("lowercase")}
        >
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraspaces}>
          Remove Extra spaces
        </button>
        <button className="btn btn-success mx-2" onClick={handleCopyFunction}>
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
        <h2>Preview</h2>
        <div className="content">
          <textarea
            className="form-control"
            id="text"
            rows="3"
            value={text}
            style={styles[props.mode] || styles.light}
            onChange={handleOnChangeAlert}
          ></textarea>
        </div>
      </div>
    </>
  );
}
