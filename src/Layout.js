import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {

    const location = useLocation();

    return (
    <>
    <div className="container overflow-hidden">
        <div className="row justify-content-lg-center">
            <div className="col-lg-8 px-0">
                <header className="border border-dark bg-black">
                    <div className="position-relative">
                        <img className="img-fluid col-12" alt="Film.sg" src="/images/banner2.png" />
                        <h5 className="my-0"><span className="badge bg-warning text-dark position-absolute bottom-50 end-0 ">27 FEBRUARY 2024</span></h5>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Industry Demo Day 2024</a>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            
                            <div className="collapse navbar-collapse" id="navbarMain">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><Link className={"nav-link " + (location.pathname === "/about" ? "active" : "")} to="/about">Home</Link></li>
                                    <li className="nav-item"><Link className={"nav-link " + (location.pathname === "/speaker" ? "active" : "")} to="/speaker">Speakers</Link></li>
                                    <li className="nav-item"><Link className={"nav-link " + (location.pathname === "/program" ? "active" : "")} to="/program">Program</Link></li>
                                    <li className="nav-item"><Link className={"nav-link " + (location.pathname === "/booth" ? "active" : "")} to="/booth">Booths</Link></li>
                                    <li className="nav-item"><Link className={"nav-link " + (location.pathname === "/contact" ? "active" : "")} to="/venue">Venue</Link></li>
                                    <li className="nav-item"><Link className={"nav-link " + (location.pathname === "/submit" ? "active" : "")} to="/register">Register</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                
                <Outlet />
                
                <footer className="bg-dark font-monospace text-muted text-center small rounded-pill mt-2 py-1">
                    Singapore Data Science Consortium &#169; 2024. All Rights Reserved.
                </footer>
            </div>
        </div>
    </div>
    </>
    )
};

export default Layout;
