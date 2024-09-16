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
                2020
                <div className="grow w-1 bg-black ml-6"></div>
              </div>
              <div className="pl-8 ">
                HCM City University of Fine Arts (HCMUFA) <div>
                Completed the Polyart's trainning 
                program: Graphic Designer Pro
                </div>
              </div>
            </div>
            <div className="text-xl flex">
              <div className="w-10">2021</div>
              <div className="pl-8">
                Industrial University of HCM city (IUH)
                <div>Marketing major</div>
              </div>
            </div>
          </div>
          <div className="my-5 border-4 black h-100 text-4xl pl-3">
            <div className="pl-16 ">EXPERIENCE</div>
            <div className="text-xl flex">
              <div className="w-10 flex flex-col">
                2020
                <div className="grow w-1 bg-black ml-6"></div>
              </div>
              <div className="pl-8">
                Sen Vang
                <div className="">
                  Internship in Marketing Department Designing Social media post
                  Designing PowerPoint presentation, Content creation for
                  Facebook's fanpages
                </div>
              </div>
            </div>
            <div className="text-xl flex">
            <div className="w-10 flex flex-col">
                2020
                <div className="grow w-1 bg-black ml-6"></div>
              </div>
              <div className="pl-8">
                Minh Bo Studio
                <div className="">
                  Designing Social media post, Catalogue,...
                </div>
              </div>
            </div>
            <div className="text-xl flex">
              <div className="w-10">New</div>
              <div className="pl-8">
                Freelancer
                <div className="">
                  Designing Social media post, branding,print ads, cover
                  artwork, T-shirt
                </div>
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
          <div className="my-5 border-4 black h-1/4 text-4xl">EXPERTISE</div>
        </div>
      </div>
    </>
  );
}

export default App;
