import React from "react";

function Input(props){
    function changeOccured(event){
        props.handleChange(event.target.name,event.target.value);
    }

    return (
        <div className="inputItems">
        <label > {props.name} </label>
        <input type="range" name={props.name} min="0" max="256" onChange={changeOccured}  />
        </div>
    );
}

export default Input;