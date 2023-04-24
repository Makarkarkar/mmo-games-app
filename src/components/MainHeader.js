import { Link, NavLink } from 'react-router-dom';

function MainHeader(props){
    

    return(
        <div className="MainHeader">
            <p>MMO Shooters</p>
            <nav>
                <NavLink  to="/"><button >All</button></NavLink>
                <NavLink  to="/pc_games"><button >PC</button></NavLink>
                <NavLink  to="/browser_games"><button >Browser</button></NavLink>
            </nav>
        </div>
    )
}
export default MainHeader;