import React from "react";
import "./App.css";
import { useSelector,useDispatch } from "react-redux";
import {IncNumber,DcrNumber} from "./actions/index";
import { Multiply,Divide } from "./actions/index";

const App =() =>{

const myState=useSelector((state)=>state.changeNumber);
const mysState=useSelector((state=>state.changeNumberr));
const dispatch=useDispatch();

const c=10;

  return (
    <>
       <div className="container">
         <h1>Increment/Decrement operation for checking</h1>
         <h4>Using React and redux</h4>

         <div className="quantity">
           <a className="quantity__minus" title="Decrement" onClick={()=> dispatch(DcrNumber())}>
             <span>-</span>
           </a>
           <input name="quantity" type="text" className="quantity__input" value={myState}/>
           <a className="quantity__plus" title="Increment" onClick={()=> dispatch(IncNumber(5))}>
             <span>+</span>
           </a>
         </div>
       </div>

       <div className="container my-5" >
         <h1>Mulitplication/Divide operation for checking</h1>
         <h4>Using React and redux</h4>

         <div className="quantity">
           <a className="quantity__minus" title="Decrement" onClick={()=> dispatch(Divide())}>
             <span>/</span>
           </a>
           <input name="quantity" type="text" className="quantity__input" value={mysState}/>
           <a className="quantity__plus" title="Increment" onClick={()=> dispatch(Multiply(5))}>
             <span>*</span>
           </a>
         </div>
       </div>
    </>
  );

}

export default App;