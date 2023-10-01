import React from "react";

import "./navbar.css";
// import "./MenuShrink";
import ncclogo from "../../assets/NCC Logo.png";
import clgLogo from "../../assets/NITJ Logo.png";
const Navbar = () => {
  return (
    <div>
      <div class="fixed-top">
        <div class="container-fluid navBar">
          <div class="row ncc-navBar">
            <div class="NCC-Logo">
              <img src={ncclogo} alt="NCC Logo" />
            </div>
            <div class="col-10" id="navbar_links">
              <div class="pt-3 navItem" id="ncc-heading">
                <p class="heading-ncc-hn">नेशनल कैडेट कोर</p>
                <p class="heading-ncc-en">
                  National Cadet Corps, NIT Jalandhar
                </p>
              </div>
              <nav class="navbar navbar-expand-lg navbar-dark navLinks py-0 box">
                <div class="container p-0 m-0">
                  <div class="navbar-collapse">
                    <ul class="navbar-nav d-flex justify-content-between w-100 me-auto mb-lg-0">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          aria-current="page"
                          href="#home"
                        >
                          Home
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#about">
                          About
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#events">
                          Events
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#blogs">
                          Blogs
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#faqs">
                          FAQs
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#annualreports">
                          Annual Reports
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div class="NITJ-Logo">
              <a href="https://www.nitj.ac.in/">
                <img src={clgLogo} alt="NITJ logo" id="NITJ-Logo" />
              </a>
            </div>
            <div class="toggle-icon d-none navItem">
              <button class="hamburger hamburger--collapse" type="button">
                <span class="hamburger-box ">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile-View */}
        <nav
          class="navbar navbar-expand-lg navbar-dark navLinks py-0 box"
          id="nav-mb"
        >
          <div class="container">
            <div class="navbar-collapse">
              <ul class="navbar-nav d-flex justify-content-between w-100 me-auto mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#events">
                    Events
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#blogs">
                    Blogs
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#faqs">
                    FAQs
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#annualreports">
                    Annual Reports
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
