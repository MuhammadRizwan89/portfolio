import React from "react";
import { useNavigate } from "react-router-dom";
import dialPad from "/images/Baner/dialPad.svg";
import { Link } from "react-router-dom";
import facebook from "/images/Baner/facebook.png";
import instagram from "/images/Baner/instagram.png";
import twitter from "/images/Baner/twitter.png";
import linkedin from "/images/Baner/linkedin.svg";
import arrow from "/images/Baner/arrow.png";
import {SectionHding } from "../components/Globle";

export default function Home() {
  const navigate = useNavigate();
  const agyJao = () => {
    navigate(1);
  };
  return (
    <>
      <section className="home">
        <div className="banner">
          <div className="container mx-auto">
            <div className="max-w-[1536px] grid grid-cols-12 main_bner">
              <div className=" col-span-1"></div>
              <div className="bannerText grid place-items-center col-span-10">
                <div className="bannerTextHeading">
                  <h1>
                    HI THERE I'AM <br /> RIZWAN SAEED
                  </h1>
                  <div className="bannerTextPoint">
                    <div className="bannerParis">Creative Vistual Designer</div>
                    <div className="bannerParis">Based in Paris,France.</div>
                  </div>
                </div>
                <div className="contactSec">
                  <div className="contactIcon">
                    <img src={dialPad} alt="" />
                  </div>
                  <div className="contactNum">
                    <span>+91 0369 2001 003</span>
                  </div>
                  <div className="contactScroll">
                    <span>SCROLL</span>
                    <img src={arrow} alt="" />
                  </div>
                </div>
                <div className="contactSec right-as">
                  <div className="contactScroll">
                    <span>FOLLOW ME</span>
                    <img src={arrow} alt="" />
                  </div>
                  <div className="socialMediaContactSec">
                    <ul>
                      <li>
                        <Link>
                          <img src={facebook} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <img src={instagram} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <img src={twitter} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <img src={linkedin} alt="" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div classNameName="col-span-1"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutMe">
          <div className="container mx-auto px-3 sm:px-[2rem] md:px-[4rem] lg:px-[8rem]">
            <div className="aboutMe_1">
             <SectionHding newclass="about_hd" extr="section-heading" btntext="About Me" 
             sechdingtext="Hello world! I'm Rizwan Saeed, a 3D & motion designer Based in France. I enjoy creating meaningful narratives through motion graphics and experimenting with new technology to convey stories."
               />
            </div>
          </div>
      </section>
      <section className="aboutMe">
          <div className="container mx-auto px-3 sm:px-[2rem] md:px-[4rem] lg:px-[8rem]">
            <div className="aboutMe_1">
             <SectionHding extr="section-heading" btntext="My Skills Here " 
             sechdingtext="Over a decade of experience in interactive design and working with some of the most talented people in the business "
               />
            </div>
          </div>
      </section>
      <section className="aboutMe">
          <div className="container mx-auto px-3 sm:px-[2rem] md:px-[4rem] lg:px-[8rem]">
            <div className="aboutMe_1">
             <SectionHding extr="section-heading" btntext="My Portfolio " 
             sechdingtext="Here are some select projects that showcase my passion for creating memorable web experiences,products, and brands to life."
               />
            </div>
          </div>
      </section>

      
    </>
  );
}
