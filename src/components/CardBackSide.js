import React from "react";


function CardBackSide(props) {
    const game = props.game
    return( 
        <div class="back_side" >
        <p class ="title_back">{game.title}</p>
        <a href={game.game_url} class = "game_url">
            <img class="max_img" href={game.game_url} src = {game.thumbnail} />
        </a>
        <p class="back_text">{game.release_date}</p>
        <p class = "back_text">{game.platform}</p>
        <p class ="back_text">{game.short_description}</p>
    </div>)
        
}
export default CardBackSide;

function getGame(){
    
}