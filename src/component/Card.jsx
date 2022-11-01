import React from "react"; 
import { useState } from "react";
import "./Card.css"
const Card=()=>{
    const [result,setResult]=useState("");
    const type=(event)=>{
        setResult(result.concat(event.target.name));
    }
    const clear=()=>{
        setResult("");
    }
    const calculate=()=>{
        try{
            setResult(eval((result).toString()))
        }catch(err){
            setResult("Error")
        }
    }
   
 return (
    <div className="frame">
        <div className="head">
        <h1>Calculator</h1>
        </div>
        <div>
        <input type="text/number" value={result} className="res"/>
        <button onClick={clear} id="clear" className="operation">C</button>
        </div>
        
        <div  className="keypad">
            <button name="1" onClick={type} className="numb">1</button>
            <button name="2" onClick={type} className="numb">2</button>
            <button name="3" onClick={type} className="numb">3</button>
            <button name="/" onClick={type} className="operation" >/</button>
            <br/>
            <button name="4" onClick={type} className="numb">4</button>
            <button name="5" onClick={type} className="numb">5</button>
            <button name="6" onClick={type} className="numb">6</button>
            <button name="-" onClick={type} className="operation">&ndash;</button>
            <br/>
            <button name="7" onClick={type} className="numb">7</button>
            <button name="8" onClick={type} className="numb">8</button>
            <button name="9" onClick={type} className="numb">9</button>
            <button name="+" onClick={type} className="operation">+</button>
            <br/>
            <button name="." onClick={type} className="numb">.</button>
            <button name="0" onClick={type} className="numb">0</button>
            <button onClick={calculate} className="numb">=</button>
            <button name="*" onClick={type} className="operation">&times;</button>
        </div>
    </div>
 );
}
export default Card;