import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import logo from "./assets/logo.svg";
import heroImg from "./assets/heroImg.webp";
import questionImg from "./assets/question.svg";
import thumbRight from "./assets/thumbRight.webp";
import thumbLeft from "./assets/thumb.webp";
import assistant from "./assets/assistant.webp";
import card1 from "./assets/card1.webp";
import card2 from "./assets/card2.webp";
import card3 from "./assets/card3.webp";
import card4 from "./assets/card4.webp";
import bulb from "./assets/bulb.svg";
import artLeft from "./assets/artLeft.webp";
import artRight from "./assets/artRight.webp";
import rocket from "./assets/rocket.svg";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import linkedin from "./assets/linkedin.svg";
import "./App.css";

function App() {
  const [navVisible, setNavVisible] = useState(false);
  const [seeAssistantText, setSeeAssistantText] = useState(true);
  return (
    <div>
      <header>
        <nav className="flex items-center justify-between relative pt-[26px] ml-[40px] mr-[70px]">
          <img src={logo} alt="logo" className="lg:pl-[80px] xl:mt-[10px]" />
          {navVisible === false ? (
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setNavVisible(true)}
              size="lg"
              className=" sm:hidden"
            />
          ) : null}
          {navVisible ? (
            <FontAwesomeIcon
              icon={faXmark}
              size="lg"
              onClick={() => setNavVisible(false)}
            />
          ) : null}
          {navVisible ? (
            <ul className="flex  gap-4 absolute w-full justify-center top-20">
              <li className="text-customGray cursor-pointer">
                <ScrollLink to="startups" smooth={true} duration={500}>
                  Startups
                </ScrollLink>
              </li>
              <li className="text-customGray cursor-pointer">
                <ScrollLink to="contact" smooth={true} duration={500}>
                  Contact
                </ScrollLink>
              </li>
              <li className="text-customGray cursor-pointer">
                <ScrollLink to="workWithUs" smooth={true} duration={500}>
                  Work with Us
                </ScrollLink>
              </li>
            </ul>
          ) : null}
          <ul className="hidden sm:flex justify-center items-center gap-4 xl:gap-[40px] xl:pr-[50px]">
            <li className="text-customGray cursor-pointer">
              <ScrollLink to="startups" smooth={true} duration={500}>
                Startups
              </ScrollLink>
            </li>
            <li className="text-customGray cursor-pointer">
              <ScrollLink to="contact" smooth={true} duration={500}>
                Contact
              </ScrollLink>
            </li>
            <li className="text-customGray cursor-pointer">
              <ScrollLink to="workWithUs" smooth={true} duration={500}>
                Work with Us
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <div
          id="startups"
          className="flex wrapper mt-[80px] relative w-full justify-between lg:pl-[100px] xl:mt-[145px] 2xl:pl-[130px]"
        >
          <div className=" w-3/5 flex flex-col  sm:gap-2  lg:gap-4 ">
            <h1 className="text-customGray text-[18px] font-bold leading-tight sm:text-[28px] lg:text-[38px] xl:text-[80px] xl:font-bold xl:leading-[85px]">
              We Create <br /> Startups.
            </h1>
            <p className="text-orange">
              We are startup studio that develops and launches new companies.
            </p>
            <button className="p-0 w-[117px] h-[25px] mb-[30px] bg-Blue rounded-[32.50px] text-white text-[12px] sm:text-[16px] sm:w-[157px] sm:h-[35px] sm:mb-[60px] md:mb-[80px] lg:mb-[130px] xl:w-[157px] xl:h-[45px] xl:mb-[239px]">
              See our works
            </button>
          </div>
          <div className="w-1/2 absolute right-0 bottom-0 flex justify-end">
            <img
              src={heroImg}
              alt="hero img"
              className="max-w-[185px] sm:max-w-[350px] md:max-w-[380px] lg:max-w-[520px] xl:max-w-full"
            />
          </div>
        </div>
      </header>
      <section className="bg-Stone pb-[80px] lg:pb-[160px] xl:flex xl:flex-col xl:justify-center xl:items-start 2xl:items-center">
        <div className="pt-[50px] flex items-start w-full justify-center xl:justify-between xl:pt-[130px] xl:max-w-[1440px] 2xl:pl-[50px]">
          <div className="wrapper ">
            <h1 className="section-title ">Who we are</h1>
            <p className="text-orange xl:pt-[20px]">
              We create products that have innovation and technology at their
              core. <br /> We value working with talented people that understand
              the possibilities of today.
            </p>
          </div>
          <img
            src={questionImg}
            alt="question mark image"
            className="w-[35px] mr-[20px] md:mr-[100px] xl:w-[75px] xl:mr-[158px] xl:pt-[10px]"
          />
        </div>
        <div className="wrapper  2xl:p-0">
          <div className="flex  flex-col justify-center gap-10  items-center  mt-4 md:flex-row xl:justify-start xl:pt-[60px] xl:gap-[40px] xl:p-0">
            <div className="flex flex-col justify-center  items-center gap-1 md:items-start xl:gap-4 ">
              <p className="orange-number">01</p>
              <div className=" gray-line"></div>
              <p className="des-text">
                We develop innovative <br /> products, systems and <br />{" "}
                services
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 md:items-start xl:gap-4 xl:pl-[40px]">
              <p className="orange-number">02</p>
              <div className=" gray-line"></div>
              <p className="des-text">
                Next we build teams <br /> to scale them into <br /> companies
              </p>
            </div>
            <div className="flex flex-col justify-center items-center  gap-1 md:items-start xl:gap-4 xl:pl-[80px]">
              <p className="orange-number">03</p>
              <div className=" gray-line"></div>
              <p className="des-text">
                Each startup solving <br /> one problem <br /> at a time
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-[50px] flex flex-col justify-center items-center lg:flex-row lg:relative lg:my-[100px] xl:my-[150px]">
        <div className="flex justify-center items-center gap-4">
          <img
            src={thumbLeft}
            alt="thumb"
            className="w-[30px] md:w-[35px] xl:w-[50px]"
          />
          <h1 className="text-Orange font-bold leading-[50px] md:text-[28px] md:pt-2 xl:text-[40px] xl:leading-[50px] xl:pt-4">
            We love solving problems!
          </h1>
          <img
            src={thumbRight}
            alt="thumb"
            className="w-[30px] md:w-[35px] xl:w-[50px]"
          />
        </div>
        <div className="flex flex-col justify-center items-start relative mt-8 max-w-[480px] lg:absolute lg:right-[100px] lg:top-[-100px] xl:right-[200px] xl:top-[-120px]">
          {seeAssistantText ? (
            <>
              <div className="bg-Blue w-[280px] rounded-[25px] rounded-br-none shadow-gray-300 shadow-xl">
                <p className="text-white text-[12px] px-6 py-2 lg:py-3 lg:text-sm">
                  Hi! I am Ben, your virtual assistant. <br /> How can I make
                  your day better?
                </p>
              </div>
              <FontAwesomeIcon
                icon={faXmark}
                size="sm"
                className="absolute top-0 right-[-40px] cursor-pointer"
                onClick={() => setSeeAssistantText(false)}
              />
            </>
          ) : null}
          <div className="absolute right-[-30px] top-[50px] lg:right-[-80px] lg:top-[50px]">
            <div
              className="mt-4 w-[100px] h-[100px] flex justify-center items-center rounded-full shadow-lg cursor-pointer"
              onClick={() => setSeeAssistantText(true)}
            >
              <div className=" rounded-full bg-Stone w-[90px] h-[90px] flex justify-center items-center">
                <img
                  src={assistant}
                  alt="assistant"
                  className=" rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-Stone pb-[80px] lg:pb-[160px] mt-40 xl:flex xl:flex-col xl:justify-center xl:items-start 2xl:items-center">
        <div className="pt-[50px] flex items-start w-full justify-center gap-[140px] md:gap-[440px]   xl:mx-0 xl:justify-between xl:pt-[130px] xl:max-w-[1440px] 2xl:pl-[50px]">
          <div className="wrapper">
            <h1 className="section-title  ">Our core values</h1>
          </div>
          <img
            src={bulb}
            alt="question mark image"
            className="w-[35px] mr-[20px] md:mr-[100px] xl:w-[75px] xl:mr-[158px] xl:pt-[10px]"
          />
        </div>
        <div className="wrapper 2xl:p-0">
          <div className="flex flex-col justify-center  items-center  gap-4 mt-4 md:flex-row xl:justify-start xl:pt-[60px] xl:gap-[40px] xl:p-0">
            <div className="flex flex-col justify-center  items-center gap-1 md:items-start xl:gap-6">
              <p className="orange-number">01. Innovation</p>
              <div className=" gray-line"></div>
              <p className="des-text">
                Startupz operates where entrepreneurship <br />
                and technology intersect. We design solutions <br /> and turn
                them into businesses models.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 md:items-start xl:gap-6">
              <p className="orange-number">02. People</p>
              <div className=" gray-line"></div>
              <p className="des-text">
                Talent is what enable us <br /> to create great <br />{" "}
                companies.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-[70px] xl:mb-[130px] xl:mt-[160px] ">
        <h1 className="text-customGray mb-[55px] font-bold text-[30px] xl:text-[50px]">
          Our Works
        </h1>
        <div className="flex flex-col justify-center items-center gap-10 xl:flex-row xl:flex-wrap xl:max-w-[1440px]">
          <div
            id="tolq"
            className="flex flex-col justify-center items-center rounded-xl w-[340px] p-[20px] shadow-lg sm:w-[588px] xl:h-[554px] gap-4"
          >
            <h2 className="text-Green font-bold text-[26px] xl:text-[32px]">
              Tolq
            </h2>
            <p className="text-customGray text-center">
              Tolq is the translation solution built for e-commerce. <br /> It
              provides all pieces of the localization puzzle in one <br />{" "}
              single integrated solution.
            </p>
            <img src={card1} alt="laptop img" />
            <button className="w-[107px] h-[45px] rounded-[32.50px] border border-Blue text-Blue mt-4 cursor-pointer">
              More
            </button>
          </div>
          <div
            id="feedbackLabs"
            className="flex flex-col justify-center items-center rounded-md w-[340px] p-[20px] shadow-lg sm:w-[588px] xl:h-[554px] gap-4"
          >
            <h2 className="text-LightBlue font-bold text-[26px] xl:text-[32px]">
              Feedback Labs
            </h2>
            <p className="text-customGray text-center">
              Feedback Labs turns feedback into actionable insights <br /> for
              your team.
            </p>
            <img src={card2} alt="laptop img" />
            <button className="w-[107px] h-[45px] rounded-[32.50px] border border-Blue text-Blue mt-4 cursor-pointer">
              More
            </button>
          </div>
          <div
            id="codekeeper"
            className="flex flex-col justify-center items-center rounded-md w-[340px] p-[20px] shadow-lg sm:w-[588px] xl:h-[554px] gap-4"
          >
            <h2 className="text-Cyan font-bold text-[26px] xl:text-[32px]">
              Codekeeper
            </h2>
            <p className="text-customGray text-center">
              Codekeeper is an all-in-one solution for software <br />{" "}
              developers and publishers to provide source code escrow <br /> as
              part of service level and license agreements.
            </p>
            <img src={card3} alt="laptop img" />
            <button className="w-[107px] h-[45px] rounded-[32.50px] border border-Blue text-Blue mt-4 cursor-pointer">
              More
            </button>
          </div>
          <div
            id="legalSite"
            className="flex flex-col justify-center items-center rounded-md w-[340px] p-[20px] shadow-lg sm:w-[588px] xl:h-[554px] gap-4"
          >
            <h2 className="text-Purple font-bold text-[26px] xl:text-[32px]">
              LegalSite
            </h2>
            <p className="text-customGray text-center">
              Protected against legal risks, privacy compliant and <br /> always
              up-to-date with the latest regulatory <br /> developments.
            </p>
            <img src={card4} alt="laptop img" />
            <button className="w-[107px] h-[45px] rounded-[32.50px] border border-Blue text-Blue mt-4 cursor-pointer">
              More
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-20 gap-10 mb-10 max-w-[1200px] xl:mt-[150px]">
          <img src={thumbLeft} alt="thumb" />
          <p className="text-orange text-center font-bold xl:text-[40px] xl:leading-[45px]">
            Startups create a world that actually is better. <br /> Any problem
            that can be solved, will be solved <br /> by a startup, and that is
            a huge opportunity.
          </p>
          <img src={thumbRight} alt="thumb" />
        </div>
      </section>
      <section
        id="workWithUs"
        className="bg-Stone bt-[100px] relative flex justify-center py-[80px] xl:py-[150px] "
      >
        <img
          src={artLeft}
          alt="art"
          className="absolute left-0 w-[100px] md:w-[200px] xl:w-max"
        />
        <div className="flex flex-col justify-center items-center gap-4 xl:gap-6">
          <h1 className="text-customGray text-[30px] font-bold xl:text-[50px]">
            We are hiring!
          </h1>
          <p className="text-orange text-center">
            We're always looking for talented people <br /> to join and help
            build our startups. <br /> Check out our current openings
          </p>
          <button className="w-[203px] h-[35px] text-sm bg-Blue  text-white rounded-[32.50px] md:text-lg  md:w-[243px] md:h-[45px]">
            See current openings{" "}
          </button>
        </div>
        <img
          src={artRight}
          alt="art"
          className="absolute right-0 w-[100px] md:w-[200px] xl:w-max"
        />
      </section>
      <section
        id="contact"
        className="bg-OrangeSectionBg py-[60px] xl:py-[80px] relative"
      >
        <div className="flex flex-col justify-center items-center lg:items-start gap-10 lg:pl-[124px]">
          <h1 className="text-white text-[30px] px-4 text-center lg:text-left lg:px-0 lg:text-6xl font-bold  leading-[55px]">
            Are you ready <br /> to board this rocket ship?
          </h1>
          <p className=" text-white text-xl text-center lg:text-left lg:text-2xl font-medium ">
            Share your excitement with us.
          </p>
          <form
            action="submit"
            className="flex flex-col justify-center items-center rounded-[10px] shadow bg-Zinc py-[70px] gap-4 w-[360px] lg:w-[519px]"
          >
            <input
              type="text"
              placeholder="Name*"
              className="w-[309px] h-[44px] lg:w-[429px] lg:h-[54px] bg-white rounded-[10px] shadow pl-[18px]"
            />
            <input
              type="text"
              placeholder="Email*"
              className="w-[309px] h-[44px] lg:w-[429px] lg:h-[54px] bg-white rounded-[10px] shadow pl-[18px]"
            />
            <textarea
              name=""
              id=""
              placeholder="Message*"
              className="w-[309px] h-[150px] lg:w-[429px] lg:h-[270px] bg-white rounded-[10px] shadow pl-[18px] pt-4"
            ></textarea>
            <button className="w-[243px] h-[45px] mt-4 bg-customGray rounded-[32.50px] border border-customGray text-white">
              Shoot us a message
            </button>
          </form>
        </div>
        <img
          src={rocket}
          alt="rocket"
          className="absolute bottom-0 right-[100px] hidden xl:block"
        />
      </section>
      <footer className="flex flex-col-reverse gap-10 justify-between my-[90px] mx-[120px] xl:flex-row">
        <div className="flex flex-col gap-16 justify-center items-center">
          <img src={logo} alt="logo" />
          <p className="text-neutral-400 text-lg font-normal leading-[30px]">
            © 2020 Startupz. All rights reserved.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center">
          <p className="text-customGray text-lg font-normal  leading-[18px]">
            Companies
          </p>
          <ul>
            <li className="text-Blue text-lg font-normal leading-[35px] cursor-pointer">
              <ScrollLink to="tolq" smooth={true} duration={500}>
                Tolq
              </ScrollLink>
            </li>
            <li className="text-Blue text-lg font-normal leading-[35px] cursor-pointer">
              <ScrollLink to="legalSite" smooth={true} duration={500}>
                LegalSite
              </ScrollLink>
            </li>
            <li className="text-Blue text-lg font-normal leading-[35px] cursor-pointer">
              <ScrollLink to="codekeeper" smooth={true} duration={500}>
                Codekeeper
              </ScrollLink>
            </li>
            <li className="text-Blue text-lg font-normal leading-[35px] cursor-pointer">
              <ScrollLink to="feedbackLabs" smooth={true} duration={500}>
                Feedback Labs
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center">
          <p className="text-customGray text-lg font-normal  leading-[18px]">
            Contact
          </p>
          <p>
            World Trade Center - The Hague <br /> Prinses Margrietplantsoen 33{" "}
            <br /> 2595 AM The Hague <br /> The Netherlands
          </p>
          <p className="text-Blue text-lg font-normal leading-[35px] cursor-pointer">
            Send us an email
          </p>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center">
          <p className="text-customGray text-lg font-normal  leading-[18px]">
            Follow us
          </p>
          <div className="flex  xl:flex-col gap-4">
            <img src={twitter} alt="twitter" className="w-[24px]" />
            <img src={linkedin} alt="linkedIN" className="w-[24px]" />
            <img src={instagram} alt="instagram" className="w-[24px]" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
