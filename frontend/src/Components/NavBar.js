import { Link } from "react-router-dom"


function NavBar () {
    return (
        <nav className = "navigation">
            <h3 className="home-link-logo">
                <Link to="/">
                    Home (logo)
                </Link>
            </h3>

        </nav>
    )
}

export default NavBar;