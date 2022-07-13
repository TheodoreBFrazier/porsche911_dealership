import { Link } from "react-router-dom"


function NavBar () {
    return (
        <nav className = "navigation">
            <h3 className="home-link-logo">
                <Link to="/">
                    Home (logo)
                </Link>
            </h3>

            <h4 className="navigation-links">
            <Link to="/992carrera">
                    The New Carrera!
                </Link>
                <Link to="/turbo">
                    Carrera Turbo 
                </Link>
                <Link to="/gt3">
                    GT3 
                    </Link>
                <Link to="/">
                    Home (logo)
                </Link>

            </h4>

        </nav>
    )
}

export default NavBar;