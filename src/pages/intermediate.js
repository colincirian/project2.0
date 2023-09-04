import React from "react";

function Intermediate() {
    
    const game = {
        width: "700px",
        height: "700px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",    
        position: "fixed",      
        top: 0,                 
        left: 0,                 
        right: 0,                
        bottom: 0,               
        margin: "auto",         
    };

    const h1 = {
        color: "black"
    };

    return (
        <div>
            <h1 style = {h1}>Hello World</h1>
            <div style={game}>
            </div>
        </div>
    )
}

export default Intermediate;
