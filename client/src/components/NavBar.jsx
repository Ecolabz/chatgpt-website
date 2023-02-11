import "../assets/sass/styles.css";
import Logo from "../assets/images/logo.svg";
import ArrowDown from "../assets/icons/keyboard-arrow-down.svg";
import { useRef, useState } from "react";

const NavBar = () => {
  const menuBtn = useRef(null);
  const nav = useRef(null);
  const navItem = useRef(null);

  const menuHandler = () => {
    menuBtn.current?.classList.toggle("active");
    nav.current?.classList.toggle("active");
    navItem.current?.classList.toggle("active");
  };

  const [fixed, setFixed] = useState(false);

  const fixedHeader = () => {
    if (window.scrollY >= 80) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", fixedHeader);
  const blogLink = "https://ecolabz.medium.com";

  return (
    <>
      {/* Navigation */}
      <nav className={fixed ? "fixed-header" : ""} ref={nav}>
        <div className="nav-item-container">
          <a className="navbar-brand logo-image" href="">
            <img src={Logo} alt="Ecolabz brand logo" />
          </a>

          <ul ref={navItem} className="nav-item-list">
            <li className="nav-item" onClick={menuHandler}>
              <a href="https://ecolabz.io/" className="nav-link">
                Home
              </a>
            </li>

            <li className="nav-item" onClick={menuHandler}>
              <a className="nav-link" href="https://ecolabz.io/about-us">
                About us
              </a>
            </li>

            <li className="nav-item" onClick={menuHandler}>
              <a href="https://ecolabz.io/portfolio" className="nav-link">
                Portfolio
              </a>
            </li>

            <li className="nav-item" onClick={menuHandler}>
              <a className="nav-link" href="https://ecolabz.io/team">
                Team
              </a>
            </li>

            <li className="nav-item" onClick={menuHandler}>
              <a
                href={blogLink}
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                Blog
              </a>
            </li>



            <li className="nav-item" onClick={menuHandler}>
              <a className="nav-link" href="https://ecolabz.io/contact">
                Contact us <img src={ArrowDown} alt="" />
              </a>
            </li>

            <li className="nav-item" onClick={menuHandler}>
            <a className="nav-link" href="/">
              Email
            </a>
          </li>
          </ul>

 

          <div ref={menuBtn} className="menu-btn">
            <div onClick={menuHandler} className="menu-btn__burger"></div>
          </div>
        </div>
      </nav>
      {/* End of Navigation */}
    </>
  );
};

export default NavBar;
