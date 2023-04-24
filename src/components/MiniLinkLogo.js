import React from "react";
import CardFronSide from "./CardFrontSide";
import CardBackSide from "./CardBackSide";


function MiniLinkLogo(props) {

    return( 
        <li className="MiniLinkLogo">
            <button class="mini_botton">
                <div class="card">
                    <CardFronSide game={props.game}/>
                    <CardBackSide game={props.game}/>
                </div>
            </button>
        </li>)
        
}
export default MiniLinkLogo;

function getGame(){
    
}