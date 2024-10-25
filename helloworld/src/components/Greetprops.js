import React from "react";

const Greetprops=(props)=>{
    console.log(props)
    return (
    <><h1>Hello {props.name}</h1><h1>{props.heroname}</h1>
    <h1>{props.child}</h1>
    </> 
    )
} 
export default Greetprops;