import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const Nav = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/notebooks">Notebooks</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/pcs">PC's</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/remeras">Remeras</Link>
                    </li>
                  </ul>
                </div>
            </div>
          </nav>

          <CartWidget />
        </>         
    )
}

export default Nav