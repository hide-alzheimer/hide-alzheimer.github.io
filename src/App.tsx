// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex p-10 w-screen h-screen border-4 border-black  gap-5 font-Protest-Guerrilla">
        <div className="w-1/2">
          <div className="border-4 w-4/4 h-1/3 text-3xl">Picture</div>
          <div className="my-5 border-4 text-3xl pl-3">
            <div className="pl-16">ABOUTME</div>
            <div className="text-xl">
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
          <div className="my-5 border-4 black h-1/6 text-3xl pl-3">
            <div className="pl-16">EDUCATION</div>
            <div className="text-xl flex">
              <div className="w-10 flex flex-col">
                2012
                <div className="grow w-1 bg-black ml-6"></div>
              </div>
              <div className="pl-8 ">
                Don Bosco Tecnical School{" "}
                <div>Completed the Printing Department</div>
              </div>
            </div>
            <div className="text-xl flex">
              <div className="w-10">2016</div>
              <div className="pl-8">
                South East Bangkok University (IM)
                <div>Industrial Management</div>
              </div>
            </div>
          </div>
          <div className="my-5 border-4 black h-100 text-4xl pl-3">
            <div className="pl-16 ">EXPERIENCE</div>
            <div className="text-xl flex">
              <div className="w-10 flex flex-col">
                2015
                <div className="grow w-1 bg-black ml-6"></div>
              </div>
              <div className="pl-8">
                OUTSOUCRE
                <div className="">IT Helpdesk</div>
              </div>
            </div>
            <div className="text-xl flex">
              <div className="w-10 flex flex-col">
                2016
                <div className="grow w-1 bg-black ml-6"></div>
              </div>
              <div className="pl-8">
                RICOH
                <div className="">
                  Maintenance,  Machine Installation Printer, Other Project
                </div>
              </div>
            </div>
            <div className="text-xl flex">
              <div className="w-10">2022</div>
              <div className="pl-8">
                AUTOBOT
                <div className="">Maintenance Machine ROBOT</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="h-1/4 text-center text-4xl ">
            Job position
            <p>Front-end Developer</p>
          </div>
          <div className="my-5 border-4 black">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              cumque reiciendis dolor quidem suscipit iste enim delectus
              molestiae atque exercitationem vero consequuntur recusandae
              nesciunt voluptatum dignissimos iusto doloremque, adipisci itaque
              quae? Vitae harum nemo autem necessitatibus dicta modi debitis
              ipsa placeat ducimus hic dolores doloribus odio cupiditate,
              voluptatibus, aliquam accusantium.
            </p>
          </div>
          <div className="my-5 border-4 black h-1/4 text-4xl">SKILL</div>
          <div className="my-5 border-4 black h-1/4 text-4xl">
            <div className="">EXPERTISE</div>
            <div className="flex justify-evenly mt-4">
              <div className="fa-brands fa-html5 pl-3 grid justify-items-center">
                <div>
                  <p className="text-sm">HTML</p>
                </div>
              </div>
              <div className="fa-brands fa-css3-alt grid justify-items-center">
                <div><p className="text-sm">CSS</p></div>
              </div>
              <div className="fa-brands fa-js grid justify-items-center">
                <div><p className="text-sm">Javascript</p></div>
              </div>
              <div className="fa-brands fa-react grid justify-items-center">
                <div><p className="text-sm">React</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
