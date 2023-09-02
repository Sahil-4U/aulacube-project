import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 mb-3 bg-body-tertiary rounded header">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarTogglerDemo01">
                        <div><Link className="navbar-brand" to={"https://www.aulacube.com/"}><span className="badge text-bg-dark brand-name pt-2">AULA CUBE</span>
                        </Link>
                        </div>
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/dashboardpage'}>Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                    <NavLink className="nav-link" aria-disabled="true" to={'/contactpage'}>Contact Us</NavLink>
                            </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header