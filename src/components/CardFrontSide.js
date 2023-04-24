import React from "react";


function CardFronSide(props) {
    const game = props.game
    return( 
            <div class="front_side">
                <img class="mini_img" src = {game.thumbnail} />
                <p class ="title_text">{game.title}</p>
            </div>)
        
}
export default CardFronSide;

function getGame(){
    
}