import React, { useState } from "react";
import "../Navbar/navbar.scss";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  //Function pour ouvrir navBar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  //Function pour fermer navBar
  const removeNavbar = () => {
    setActive("navBar removeNavbar");
  };

  //render
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDIv">
          <a href="true" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" /> Voyage.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="true" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="true" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItem">
              <a href="true" className="navLink">
                Boutique
              </a>
            </li>

            <li className="navItem">
              <a href="true" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="true" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItem">
              <a href="true" className="navLink">
                Actualités
              </a>
            </li>

            <li className="navItem">
              <a href="true" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn">
              <a href="true">RESERVER</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
