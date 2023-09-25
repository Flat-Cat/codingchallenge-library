import "./NavBar.scss"
import { useState, createRef, useEffect } from 'react';


function NavBar() {

    const burger = createRef<HTMLAnchorElement>();

    useEffect(() => {

        const current = burger.current as HTMLAnchorElement;

        current.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = current.dataset.target as string;
            const $target = document.getElementById(target) as HTMLDivElement;

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            current.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        })
    }, [])

    const [isBurgerActive, setIsDropdownActive] = useState(true);

    const handleDropdownClick = () => {
        setIsDropdownActive(!isBurgerActive);
    };

    return (

        <nav className="navbar is-dark is-transparent is-fixed-top">
            <div className="navbar-brand">

                <a className="navbar-item" href="/">
                    <img src="favicon.png" height="28"></img>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="burgerDataTarget" ref={burger}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="burgerDataTarget" className="navbar-menu">
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
            </div>
        </nav>

    )
}

export default NavBar;