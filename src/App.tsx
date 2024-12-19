// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Animepng from "/JEMAGER.jpg";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-5 p-10 w-screen h-screen font-Protest-Guerrilla">
        <div className="flex justify-center text-3xl order-0 h-auto border-2 border-red-700">
          <img className="" src={Animepng} alt="" />
        </div>
        <div className="order-3 my-2 text-3xl pl-3 border-2 border-rose-100">
          <div className="pl-16">ABOUT ME</div>
          <div className="text-xl font-Afacad-Flux">
            <ul className="list-outside">
              <li>
                <i className="fas fa-info-circle mx-3"></i>Wara Paisawangphant
              </li>
              <li>
                <i className="fa-solid fa-calendar mx-3"></i>08/12/1992
              </li>
              <li>
                <i className="fa-solid fa-phone mx-3"></i><a href="tel:+66909512444">090 951 2444</a>
              </li>
              <li>
                <i className="fa-solid fa-at mx-3"></i><a href="mailto:polterski@gmail.com">polterski@gmail.com</a>
              </li>
              <li>
                <i className="fab fa-github mx-3"></i><a href="https://github.com/hide-alzheimer" target="_blank">github.com/hide-alzheimer</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="order-5 text-3xl pl-3 border-2 border-rose-100">
          <div className="pl-16">EDUCATION</div>
          <div className="text-xl flex">
            <div className="w-10 flex flex-col">
              2012
              <div className="grow w-1 bg-black ml-6"></div>
            </div>
            <div className="pl-8 font-Afacad-Flux">
              Don Bosco Tecnical School{" "}
              <div>Completed the Printing Department</div>
            </div>
          </div>
          <div className="text-xl flex">
            <div className="w-10">2016</div>
            <div className="pl-8 font-Afacad-Flux">
              South East Bangkok University (IM)
              <div>Industrial Management</div>
            </div>
          </div>
        </div>
        <div className="order-6 my-2 text-4xl pl-3 border-2 border-rose-100">
          <div className="pl-16">EXPERIENCE</div>
          <div className="text-xl flex">
            <div className="w-10 flex flex-col">
              2015
              <div className="grow w-1 bg-black ml-6"></div>
            </div>
            <div className="pl-8 font-Afacad-Flux">
              OUTSOUCRE
              <div className="">IT Helpdesk</div>
            </div>
          </div>
          <div className="text-xl flex">
            <div className="w-10 flex flex-col">
              2016
              <div className="grow w-1 bg-black ml-6"></div>
            </div>
            <div className="pl-8 font-Afacad-Flux">
              RICOH
              <div className="">
                Maintenance, Machine Installation Printer, Other Project
              </div>
            </div>
          </div>
          <div className="text-xl flex">
            <div className="w-10">2022</div>
            <div className="pl-8 font-Afacad-Flux">
              AUTOBOT
              <div className="">Maintenance Machine ROBOT</div>
            </div>
          </div>
        </div>
        <div className="order-1 text-center text-4xl border-2 border-rose-100 flex flex-col justify-center">
          Job position
          <p className="font-Afacad-Flux">Front-end Developer</p>
        </div>
        <div className="order-2 my-2 border-2 border-rose-100 font-Afacad-Flux">
          <p>
            I am interested and determined to learn about web development. I started studying HTML, CSS, JavaScript, and other technologies to develop coding skills and create websites as an expert in software engineering. Currently, I am opening up opportunities to learn from work experiences to improve and develop coding skills to be more effective in the future.
          </p>
        </div>
        <div className="order-7 text-4xl border-2 border-rose-100">
          <div className="pl-16 ">EXPERTISE</div>
          <div className="flex flex-wrap justify-around mt-4">
            <div className="fa-brands fa-html5 grid justify-items-center">
              <div>
                <p className="text-sm">HTML</p>
              </div>
            </div>
            <div className="fa-brands fa-css3-alt grid justify-items-center">
              <div>
                <p className="text-sm">CSS</p>
              </div>
            </div>
            <div className="fa-brands fa-js grid justify-items-center">
              <div>
                <p className="text-sm">Javascript</p>
              </div>
            </div>
            <div className="fa-brands fa-react grid justify-items-center">
              <div>
                <p className="text-sm">React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
