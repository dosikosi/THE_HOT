import React from "react";
import "./footer.css";

import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="footer_nav">
          <NavLink to="/">
            <div className="footer_logo">
              <Logo />
            </div>
          </NavLink>
          <div className="footer_nav_list">
            <NavLink to="/butter">
              <div className="footer_nav_menu_item">
                <p>Баттер</p>
              </div>
            </NavLink>
            <div className="vertical_line">
              <span>|</span>
            </div>
            <NavLink to="/aroma">
              <div className="footer_nav_menu_item">
                <p>Арома саше</p>
              </div>
            </NavLink>
            <div className="vertical_line">
              <span>|</span>
            </div>
            <NavLink to="/candle">
              <div className="footer_nav_menu_item">
                <p>Свечи</p>
              </div>
            </NavLink>
            <div className="vertical_line">
              <span>|</span>
            </div>
            <NavLink to="/diffusers">
              <div className="footer_nav_menu_item">
                <p>Диффузоры</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
