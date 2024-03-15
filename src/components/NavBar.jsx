import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar () {
    return (
        <>
           <header>
            <nav className="navbar">
                
            <ul className="menu">
                
                <Link to="/"> Home  </Link>
                <Link to="/login"> Log In  </Link>
                <Link to="/createaccount"> Create Account  </Link>
                <Link to="/projects"> Create Project  </Link>
            </ul>
            </nav>
            <Outlet />
            </header>
          
        </>

        
    );
}

export default NavBar;

//import { Link, Outlet } from "react-router-dom";

//function NavBar() {
  //return (
    //<div>
      //<nav>
        //<Link to="/">Home</Link>
        //<Link to="/login">Log In</Link>
      //</nav>
      //<Outlet />
    //</div>
  //);
//}
//export default NavBar; 









