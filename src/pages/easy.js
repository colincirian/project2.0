import React from "react";

function Easy() {
    
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
        color: "white"
    };

    return (
        <div style={game}>
            <h1 style={h1}>Hello</h1>
        </div>
    )
}

export default Easy;
