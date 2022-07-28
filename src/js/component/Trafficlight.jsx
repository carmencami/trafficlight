import React,{useState} from "react";
import "./trafficlight.css"

//include images into your bundle


//create your first component
const TrafficLight = () => {
	const [color, SetColor]=useState("")
	return (
		<div className="Baselight">
			<div className="lights">
			<div className={"green " + (color==="green" ? "lightyellow" : "")} onClick={()=>SetColor("green")}></div>
			<div className={"orange " + (color==="orange" ? "lightyellow" : "")} onClick={()=>SetColor("orange")}></div>
			<div className={"red " + (color==="red" ? "lightyellow" : "")} onClick={()=>SetColor("red")}></div>
			</div>
		</div>
		
	);
};


export default TrafficLight;
