import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/SearchQ?query=${encodeURIComponent(query)}`);
        }
    };

    return (
        <div>
            {/* Top Nav */}
            <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
                <div className="container text-light">
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <i className="fa fa-envelope mx-2" />
                            <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                            <i className="fa fa-phone mx-2" />
                            <a className="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
                        </div>
                        <div>
                            <a className="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored"><i className="fab fa-facebook-f fa-sm fa-fw me-2" /></a>
                            <a className="text-light" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-sm fa-fw me-2" /></a>
                            <a className="text-light" href="https://twitter.com/" target="_blank"><i className="fab fa-twitter fa-sm fa-fw me-2" /></a>
                            <a className="text-light" href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin fa-sm fa-fw" /></a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Header */}
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">
                    <a className="navbar-brand text-success logo h1 align-self-center" href="/">
                        Zay
                    </a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/About">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Shop">Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Contact">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <form onSubmit={handleSubmit} className="d-flex me-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                                onInput={(e) => {
                                    setQuery(e.target.value);
                                }}
                                value={query}
                            />
                            <button className="btn btn-outline-success ms-2" type="submit">
                                <i className="fa fa-search" />
                            </button>
                        </form>

                        {/* Icons */}
                        <div className="navbar align-self-center d-flex">
                            <a className="nav-icon position-relative text-decoration-none me-3" href="#">
                                <i className="fa fa-fw fa-cart-arrow-down text-dark" />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                            </a>
                            <a className="nav-icon position-relative text-decoration-none" href="#">
                                <i className="fa fa-fw fa-user text-dark" />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
