import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (
        <div>
           <h1 className="home-h1">Aim Trainer</h1>

            <div id="box-container">
                <div className="box">
                    <Link to="./pages/easy">
                        <button>Easy</button>
                    </Link>
                </div>

                <div className="box">
                    <Link to="./pages/intermediate">
                        <button>Intermediate</button>
                    </Link>
                </div>

                <div className="box">
                     <Link to="./pages/hard">
                        <button>Hard</button>
                    </Link>
                </div>
           </div>
        </div>
    )
}

export default Home;