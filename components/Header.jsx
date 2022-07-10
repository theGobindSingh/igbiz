import React, { useEffect } from "react";
import Link from "next/link";
import { ig_username, email } from "/public/globalVars";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

function Header() {
  function navi() {
    const xyz = () => {
      //toggle nav
      document.querySelector(".nav-links").classList.toggle("nav-active");
      //animate links
      document.querySelectorAll(".nav-links li").forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      });
      document.querySelector(".burger").classList.toggle("toggle");
    };
    try {
      xyz();
      document.addEventListener("scroll", function elos() {
        xyz();
        document.removeEventListener("scroll", elos);
      });
    } catch {}
  }

  return (
    <header id="header">
      <div className="img-container">
        <img src={"/ig.png"} alt="" />
      </div>
      <div className="nav-btns">
        <>
          <Link href={"/"}>
            <a className="no-mob ">
              <button
                onClick={() => {
                  navi();
                }}
              >
                Home
              </button>
            </a>
          </Link>
          <Link href={"/categories"}>
            <a className="no-mob ">
              <button
                onClick={() => {
                  navi();
                }}
              >
                Categories
              </button>
            </a>
          </Link>
          <Link href={"/creators"}>
            <a className="no-mob ">
              <button
                onClick={() => {
                  navi();
                }}
              >
                Creators
              </button>
            </a>
          </Link>
        </>
        <div
          className="burger no-pc"
          onClick={() => {
            navi();
          }}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <nav className="headNav" role="navigation">
          <ul className="nav-links">
            <li>
              <Link href={"/"}>
                <a
                  onClick={() => {
                    navi();
                  }}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/categories"}>
                <a
                  onClick={() => {
                    navi();
                  }}
                >
                  Categories
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/creators"}>
                <a
                  onClick={() => {
                    navi();
                  }}
                >
                  Creators
                </a>
              </Link>
            </li>
            <li className="nav-icons">
              <a
                href={`http://www.instagram.com/${ig_username}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  navi();
                }}
                aria-label="Visit our instagram page"
              >
                <AiFillInstagram />
              </a>
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  navi();
                }}
                aria-label="Email us"
              >
                <MdEmail />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
