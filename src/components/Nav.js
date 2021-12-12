const Nav = () => {
    return (
        <header>
         
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="index.html">Inicio</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="index.html">Productos</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="index.html">Contacto</a>
                    </li>
                  </ul>
                </div>
            </div>
          </nav>
          <a href="index.html">
            <h1>DevShop</h1>
          </a>
        </header>
    )
}

export default Nav