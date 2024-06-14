import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container mx-auto">
          <div className="max-w-[1536px] gap-5 grid place-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="footer-24  ">
              <span>©2024 - All Rights Reserved Rizwan</span>
            </div>
            <div className="footerbtn-social  ">
              <ul>
                <li>
                  {" "}
                  <Link>Facebook</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>Twitter</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>Behance</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>Dribble</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="footer-policy  ">
              <span>Term & Conditon</span>
              <span>Privacy policy</span>
            </div>
          </div>
        </div>
        <div className="policy-btn">
                <a href="#"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
</svg>
                </a>
              </div>
      </div>
    </>
  );
};

export default Footer;
