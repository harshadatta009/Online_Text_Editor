// import logo from './logo.svg';
import React,{useState} from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"

function App(props) {
	const [mode,setMode] = useState("light");
	

 

    /* Auto dismissing the alert after some time : */

    
	const togglemode = () => {
	if (mode === "dark") {
		setMode("light");
		document.body.style.background =
			"linear-gradient(45deg, rgb(255, 255, 255, 1) 50%, rgb(255, 255, 255, 1) 50%)";
			document.body.style.color="black"
		
		// document.title = "TextUtils - Light Mode";
	} else {
		setMode("dark");
		document.body.style.background =
			"linear-gradient(45deg, rgb(27, 27, 27) 50%, rgb(27, 27, 27) 50%)";
		document.body.style.color="white"
		
		}
	};
	return (
		<>
			<Navbar title="TextUtils" aboutText="About" mode={mode} togglemode={togglemode}/>
			<div className="container my-3">
				<TextForm heading="Enter the text to analyze" />
			</div>
			<Footer />
			
		
	</>
	);
}

export default App;
