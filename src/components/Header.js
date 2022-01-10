import { Link } from "react-router-dom"
import Nav from "./Nav"

const Header = () => {
    return (
        <header>
            <Nav/>

            <Link to="/">
                <h1>DevShop</h1>
            </Link>
        </header>
    )
}

export default Header
