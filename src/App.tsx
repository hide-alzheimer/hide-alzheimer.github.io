// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex p-10 w-screen h-screen border-4 border-red gap-5 font-caveat">
        <div className="w-1/2">         
          <div className="border-4 w-4/4 h-1/4">picture</div>
          <div className="my-10 border-4">Aboutme
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </div>
          <div className="my-10 border-4 black h-1/4">education
            <li></li>
            <li></li>
          </div>
          <div className="my-10 border-4 black h-1/4">experience
            <li></li>
            <li></li>
            <li></li>
          </div>
        </div>
        <div className="w-1/2">
          <div className="h-1/4 text-center">Job position
            <p>Front-end Developer</p>
          </div>
          <div className="my-10 border-4 black">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum cumque earum dignissimos nihil doloremque error ducimus corporis tenetur illo aut non, quod dolorem nobis vel ipsam, nam exercitationem. Quo, consequuntur.</p>
          </div>
          <div className="my-10 border-4 black h-1/4">skill</div>
          <div className="my-10 border-4 black h-1/4">expertise</div>
        </div>
      </div>
    </>
  );
}

export default App;
