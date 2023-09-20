import "./NavBar.scss"

function NavBar() {

    return (

        <nav className="navbar is-dark is-transparent is-fixed-top">
            <div className="navbar-brand">
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu is-active">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        Home
                    </a>
                    <a className="navbar-item" href="/new">
                        Create a new Entry
                    </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            About
                        </a>
                        <div className="navbar-dropdown is-boxed">
                            <a className="navbar-item" href="https://flatcat.netlify.app/">
                                Developer
                            </a>

                            <hr className="navbar-divider" />
                            <a className="navbar-item" href="https://github.com/Flat-Cat/codingchallenge-library/">
                                Project
                            </a>

                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item is-left">
                        <div className="control">
                            <h4 className="subtitle is-6">LibraEye </h4>
                        </div>

                        <div className="field is-grouped">
                            <div className="control mx-3">
                                <span className="icon">
                                    <figure className="image is-36x36">
                                        <img src="favicon.png" alt="LibraEye" />
                                    </figure>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}


export default NavBar;