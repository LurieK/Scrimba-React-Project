
import logo from "./reactjs-icon.png";

function Navbar (){
    return(
        <nav className="navbar" >
            <div className="logo">
                <img className="logo-img" alt="logo" src={logo}/>
                <h3 className="logo-heading">ReactFacts</h3>
            </div>
            <h4 className="subheading">React Course- Project 1</h4>   
        </nav>
    )
}

export default Navbar