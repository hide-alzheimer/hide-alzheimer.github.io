// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex p-10 w-screen h-screen border-4 gap-5 font-Protest-Guerrilla">
        <div className="w-1/2">
          <div className="border-4 w-4/4 h-1/4 text-3xl">Picture</div>
          <div className="my-5 border-4 text-3xl">
            <div className="pl-16">ABOUTME</div>
            <div className="text-xl">
              <ul className="list-outside">
                <li><i className="fa-solid fa-calendar mx-3"></i>08/12/1992</li>
                <li><i className="fa-solid fa-phone mx-3"></i>090 951 2444</li>
                <li><i className="fa-solid fa-at mx-3"></i>polterskii@gmail.com</li>
                <li><i className="fa-solid fa-thumbs-up mx-3"></i>instagram.com/peter</li>
              </ul>
            </div>
          </div>
          <div className="my-5 border-4 black h-1/4 text-3xl">
            <div className="pl-16">EDUCATION</div>
            <div className="text-xl flex">
              <div className="w-10 flex flex-col">
                2020
                <div className="grow w-1 bg-black ml-6"></div>
              </div>
              <div className="pl-8 ">
                HCM City University of Fine Arts (HCMUFA) Completed the
                Polyart's trainning program: Graphic Designer Pro
              </div>
            </div>
            <div className="text-xl flex">
              <div className="w-10">2021</div>
              <div className="pl-8">Industrial</div>
            </div>
          </div>
          <div className="my-5 border-4 black h-1/4 text-4xl">
            <div className="pl-16">EXPERIENCE</div>
            <li></li>
            <li></li>
            <li></li>
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
          <div className="my-5 border-4 black h-1/4 text-4xl">EXPERTISE</div>
        </div>
      </div>
    </>
  );
}

export default App;
