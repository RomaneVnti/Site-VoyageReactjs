import React, { useEffect } from "react";
import "../Footer/footer.scss";
import image from "../Assets/img1.jpg";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  // Créer une animation au scroll
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  //render

  return (
    <section className="footer">
      <div className="imgDiv">
        <img src={image} alt="" />
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Voyage avec nous</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Entrer votre adresse mail"
              className="inputText"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              ENVOIE
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" /> Voyage.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Nous sommes là pour vous aider à créer des souvenirs qui dureront
              toute une vie. Réservez dès maintenant et embarquez pour votre
              prochaine aventure!
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          {/* Groupe 1 */}
          <div className="footerLinks grid">
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">VOTRE AGENCE</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Assurances
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agence
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourisme
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Paiement
              </li>
            </div>

            {/* Groupe 2 */}

            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">NOS PARTENAIRES</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tripadvasor
              </li>
            </div>

            {/* Groupe 3 */}

            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Londres
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Californie
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonésie
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Océanie
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVAL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
