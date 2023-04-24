import React, {useState, useEffect} from "react";
import Games from "./Games";

export default function PCGames() {
    const [games, setGames] = useState([]);
        useEffect(() => {
            const options = {
                method: 'GET', 
                headers: {
                    'X-RapidAPI-Key': '74ea64a7f2msha8d91ed253a7d29p1a24adjsn4c7d407eca27',
                    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
                }
            };
            fetch('https://mmo-games.p.rapidapi.com/games?platform=pc&category=shooter', options)
                .then(response => response.json())
                .then(response => setGames(response))
                .then(data => games = data)
                .catch(err => console.error(err));
        },[])
        return( 
            <div className="PCGames">
                 <Games games={games}  >
                 </Games>
             </div>)
}