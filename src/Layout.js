import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {

    const location = useLocation();

    return (
    <>
    <div className="container overflow-hidden">
        <div className="row justify-content-lg-center">
            <div className="col-lg-8 px-0">
                <header className="border border-dark bg-dark">
                    <img className="img-fluid col-12" alt="Film.sg" src="/images/banner2.png" />

                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">AI Industry Forum Day</a>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            
                            <div className="collapse navbar-collapse" id="navbarMain">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><Link className={"nav-link " + (location.pathname === "/about" ? "active" : "")} to="/about">Home</Link></li>
                                    <li className="nav-item"><Link className={"nav-link " + (location.pathname === "/" ? "active" : "")} to="/">Speakers</Link></li>
                                    <li className="nav-item"><Link className={"nav-link " + (location.pathname === "/" ? "active" : "")} to="/program">Program</Link></li>
                                    <li className="nav-item"><Link className={"nav-link " + (location.pathname === "/contact" ? "active" : "")} to="/venue">Venue</Link></li>
                                    <li className="nav-item"><Link className={"nav-link " + (location.pathname === "/submit" ? "active" : "")} to="/submit">Register</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                
                <Outlet />
                
                <footer className="bg-dark font-monospace text-muted text-center small rounded-pill mt-2 py-1">
                    Singapore Data Science Consortium &#169; 2023. All Rights Reserved.
                </footer>
            </div>
        </div>
    </div>
    </>
    )
};

export default Layout;
