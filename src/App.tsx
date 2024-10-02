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
          <div className="pl-16">ABOUTME</div>
          <div className="text-xl font-Afacad-Flux">
            <ul className="list-outside">
              <li>
                <i className="fa-solid fa-calendar mx-3"></i>08/12/1992
              </li>
              <li>
                <i className="fa-solid fa-phone mx-3"></i>090 951 2444
              </li>
              <li>
                <i className="fa-solid fa-at mx-3"></i>polterskii@gmail.com
              </li>
              <li>
                <i className="fa-solid fa-thumbs-up mx-3"></i>
                instagram.com/peter
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
        <div className="order-1 text-center text-4xl border-2 border-rose-100">
          Job position
          <p>Front-end Developer</p>
        </div>
        <div className="order-2 my-2 border-2 border-rose-100 font-Afacad-Flux">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            cumque reiciendis dolor quidem suscipit iste enim delectus molestiae
            atque exercitationem vero consequuntur recusandae nesciunt
            voluptatum dignissimos iusto doloremque, adipisci itaque quae? Vitae
            harum nemo autem necessitatibus dicta modi debitis ipsa placeat
            ducimus hic dolores doloribus odio cupiditate, voluptatibus, aliquam
            accusantium.
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
