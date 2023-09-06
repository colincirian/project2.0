import React from "react-router-dom";

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

function Hard() {
    return(
        <div style={game}>
            <h1 style={h1}>Hello</h1>
        </div>
    )
};

export default Hard;