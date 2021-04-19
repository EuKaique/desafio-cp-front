import React, { Component } from 'react'

export class Navbar extends Component {

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand navbar-light">
                <a className="navbar-brand" href="/">Bookstore</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link1" href="#top">books</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link2" href="#top">audiobooks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link3" href="#top">stationery e gifts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link4" href="#top">blog</a>
                        </li>
                        <li>
                            <a href="#top">
                            <img className="user" src="img/user.svg" alt="user"/>
                            </a>
                        </li>
                        <li>
                            <a href="#top">
                            <img className="search" src="img/search.svg" alt="search"/>
                            </a>
                        </li>
                        <li>
                            <a href="#top">
                            <img className="bag" src="img/shop bag.svg" alt="bag"/>
                            </a>
                        </li>
                    </ul>
                </div>
                </nav>
            </header>
        )
    }
}

export default Navbar;
