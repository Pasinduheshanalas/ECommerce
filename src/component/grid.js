import React from "react";

function Grid(props){

    console.log(props);
    return(
        <>
        <h1>{props.children}</h1>
        </>
    )
}
export default Grid