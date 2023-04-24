import React from "react";
import MainHeader from "./MainHeader"
import PCGames from "./PCGames"
import AllGames from "./AllGames"
import BrowserGames from "./BrowserGames"
import { Route, Routes } from "react-router-dom";

function MainPage() {
    
    return( 
        <div className="MainPage">
            <MainHeader />
            <Routes>
                <Route path="/" element={<AllGames />}/>
                <Route path="/pc_games" element={<PCGames />}/>
                <Route path="/browser_games" element={<BrowserGames />}/>
            </Routes>
         </div>)
                          
}

export default MainPage;