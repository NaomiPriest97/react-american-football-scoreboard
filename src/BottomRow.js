import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

const BottomRow = () => {
  const [Down, setDown] = useState(0);
  console.log(useState());

  const [Togo, setTogo] = useState(0);
  console.log(useState());

  const [BallOn, setBallOn] = useState(0);
  console.log(useState());

  const [Quarter, setQuarter] = useState(0);
  console.log(useState());

  
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{Down}</div>
        <button onClick = {() => setDown(Down + 1)} className ="down_button">Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{Togo}</div>
        <button onClick = {() => setTogo(Togo + 1)} className = "togo_button">To Go</button>
      </div>
      <div className ="ballOn">
        <h3 className ="ballOn__title">Ball on</h3>
        <div className ="ballOn__value">{BallOn}</div>
        <button  onClick = {() => setBallOn(BallOn + 1)} className = "ballon_button">Ball On</button>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{Quarter}</div>
        <button onClick = {() => setQuarter(Quarter + 1)} className = "quarter_button">Quarter</button>
      </div>
     
    </div>
  );
};

export default BottomRow;

const rootElement = document.getElementById("root");
ReactDOM.render(<BottomRow />, rootElement);
