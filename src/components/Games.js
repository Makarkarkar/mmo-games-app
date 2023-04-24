import React from "react";
import  MiniLinkLogo from "./MiniLinkLogo";

function Games(props){
    return(
        <div className="Games">
            <ul>
                {
                    props.games.map(function(oneGame){
                        return <MiniLinkLogo key={oneGame.title} game={oneGame}></MiniLinkLogo>
                    })
                }
            </ul>
        </div>
    )
    
}
export default Games;