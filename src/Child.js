import React, { useReducer } from 'react';
import './App.css';
import { useContext } from "react"
import Mycontext from './Mycontext';
import numberReducer from "./numberReducer"

function Child() {
    let [state , dispatch] = useReducer(numberReducer , 0) 
    let age = useContext(Mycontext)
    
    return (
        <div >
            Child age is {age}
            <button onClick = {()=>{age[1](age[0]++)}}> click me</button>
            <p>value in reducer : {state}</p>
            <button onClick = {()=> { dispatch( {type:"INCREMENT"})}}>Increment</button>
            <button onClick = {()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
        
        
        </div>
  );
}

export default Child;