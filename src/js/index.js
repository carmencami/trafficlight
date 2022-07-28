//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Trafficlight from "./component/Trafficlight.jsx";

//render your react application
ReactDOM.render(<Trafficlight />, document.querySelector("#app"));
