import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import databiz from "./assets/client-databiz.svg";
import audiophile from "./assets/client-audiophile.svg";
import maker from "./assets/client-maker.svg";
import meet from "./assets/client-meet.svg";
import hero from "./assets/image-hero-desktop.png";
import logoTab from "./assets/logoTab.png";
import { Helmet } from "react-helmet";
function App() {
  const handleClick = () => {
    const element = document.getElementById("navbar");
    element.classList.toggle("navbar-open");
  };
  return (
    <div className="app">
      <Helmet>
        <title>Home</title>
        <meta name="Home Page" content="Home" />
        <link rel="icon" href={logoTab} />
      </Helmet>
      <nav className=" px-10 py-6 max-[375px]:px-0 max-[375px]:py-0 uppernav ">
        <div className=" flex items-start max-[375px]:flex-col gap-16 ">
          <div className=" max-[375px]:flex max-[375px]:gap-[14rem] max-[375px]:py-2">
            <img src={logo} alt="logo" />
            <div id="label2" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>

          <div
            className=" flex items-start max-[375px]:flex-col max-[375px]:items-start max-[375px]:bg-white max-[375px]:rounded-lg max-[375px]:shadow-lg "
            id="navbar"
          >
            <div
              id="buttonX"
              className=" flex justify-end"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <Accordion
              allowToggle
              className=" flex items-center max-[375px]:flex-col  max-[375px]:gap-y-5 "
              columnGap={12}
            >
              <AccordionItem border={0}>
                <h2
                  style={{ position: "relative" }}
                  className=" hover:bg-transparent feature-display "
                >
                  <AccordionButton p={2}>
                    <Box className=" text-slate-500 font-bold hover:text-slate-800 transition duration-500 ease-out ">
                      Features
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  style={{ position: "absolute" }}
                  className="feature-panel"
                >
                  <div className=" bg-white shadow-xl px-6 py-3 rounded-lg leading-9 z-50 ">
                    <div className=" flex items-center gap-3 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.0"
                        stroke="currentColor"
                        class="w-4 h-4 stroke-violet-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                        />
                      </svg>
                      <h1 className=" font-semibold text-[15px] text-slate-500 hover:text-slate-700">
                        <a href="">Todo List</a>
                      </h1>
                    </div>
                    <div className=" flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.0"
                        stroke="currentColor"
                        class="w-4 h-4 stroke-cyan-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                      <h1 className="font-semibold text-[15px] text-slate-500 hover:text-slate-700">
                        <a href="">Calendar</a>
                      </h1>
                    </div>
                    <div className=" flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.0"
                        stroke="currentColor"
                        class="w-4 h-4 fill-yellow-200 stroke-yellow-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                        />
                      </svg>
                      <h1 className="font-semibold text-[15px] text-slate-500 hover:text-slate-700">
                        <a href="">Reminders</a>
                      </h1>
                    </div>
                    <div className=" flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.5"
                        stroke="currentColor"
                        class="w-4 h-4 stroke-purple-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h1 className="font-semibold text-[15px] text-slate-500 hover:text-slate-700">
                        <a href="">Planning</a>
                      </h1>
                    </div>
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={0} className=" ">
                <h2 style={{ position: "relative" }}>
                  <AccordionButton p={2}>
                    <Box className="text-slate-500 font-bold hover:text-slate-800 transition duration-500 ease-out ">
                      Company
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  style={{ position: "absolute" }}
                  className=" max-[375px]:inline-block"
                >
                  <div className=" bg-white px-6 py-3 shadow-xl rounded-lg leading-9">
                    <h1 className="font-semibold text-[15px] text-slate-500 hover:text-slate-700">
                      History
                    </h1>
                    <h1 className="font-semibold text-[15px] text-slate-500 hover:text-slate-700">
                      Our Team
                    </h1>
                    <h1 className="font-semibold text-[15px] text-slate-500 hover:text-slate-700">
                      Blog
                    </h1>
                  </div>
                </AccordionPanel>
              </AccordionItem>
              <h1 className="text-slate-500 font-bold hover:text-slate-800 transition duration-500 ease-out">
                <a href="">Careers</a>
              </h1>
              <h1 className=" text-slate-500 font-bold hover:text-slate-800 transition duration-500 ease-out">
                <a href="">About</a>
              </h1>
            </Accordion>
            <div
              className=" flex gap-12 items-center max-[375px]:flex-col max-[375px]:items-center max-[375px]:gap-2 max-[375px]:mt-10 ml-[50rem] max-[375px]:ml-0"
              id="bottom-signup"
            >
              <h1 className="  text-slate-500 font-bold hover:scale-110 transition duration-500 ease-out hover:text-slate-800">
                <a href="">Login</a>
              </h1>
              <button className=" text-slate-500 hover:text-slate-800 font-bold border-2 border-slate-500 p-2 rounded-xl hover:-translate-y-1 transition duration-300 ease-out">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex justify-evenly items-center max-[375px]:flex-col-reverse">
        <div className=" pt-[8rem] max-[375px]:pt-[1rem] ">
          <h1 className=" font-bold text-[5.5rem] leading-[5rem] max-[375px]:text-[2rem] max-[375px]:text-center">
            Make{" "}
            <span className=" block max-[375px]:inline-block">remote work</span>
          </h1>
          <p className=" text-[1.3rem] font-medium text-slate-500 mt-[4rem] max-[375px]:mt-[0.7rem] max-[375px]:text-[1rem] max-[375px]:text-center">
            Get your team in sync, no matter your location.{" "}
            <span className=" block">
              Streamline processes, create team rituals, and
            </span>
            watch productivity soar.
          </p>
          <div className="max-[375px]:text-center max-[375px]:mt-[-2rem]">
            <button className=" mt-[3.8rem] font-bold text-[1.2rem] rounded-xl transition duration-500 ease-out bg-black text-white hover:bg-white hover:text-black border-2 border-black px-7 py-3  max-[375px]:text-[1rem]  max-[375px]:px-5  max-[375px]:py-2">
              Learn more
            </button>
          </div>
          {/* Logos brand*/}
          <div className=" flex justify-between mt-28  max-[375px]:mt-[2rem]  max-[375px]:gap-4  max-[375px]:p-2">
            <div>
              <img src={databiz} alt="databiz" className=" object-contain  " />
            </div>
            <div>
              <img src={audiophile} alt="databiz" className=" object-contain" />
            </div>
            <div>
              <img src={meet} alt="databiz" className=" object-contain" />
            </div>
            <div>
              <img src={maker} alt="databiz" className=" object-contain" />
            </div>
          </div>
        </div>
        <div className="">
          <img src={hero} alt="hero" className="object-contain max-h-[40rem]" />
        </div>
      </main>
    </div>
  );
}

export default App;
