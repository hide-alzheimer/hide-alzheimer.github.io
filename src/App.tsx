// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex p-10 w-100 border-4 black gap-5 font-caveat">
        <div className="w-1/2">         
          <div className="border-4 black">picture</div>
          <div className="my-10 border-4 black">Aboutme
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </div>
          <div className="my-10 border-4 black">education
            <li></li>
            <li></li>
          </div>
          <div className="my-10 border-4 black">experience
            <li></li>
            <li></li>
            <li></li>
          </div>
        </div>
        <div className="w-1/2">
          <div className="">Job position
            <p>Front-end Developer</p>
          </div>
          <div className="my-10 border-4 black">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum cumque earum dignissimos nihil doloremque error ducimus corporis tenetur illo aut non, quod dolorem nobis vel ipsam, nam exercitationem. Quo, consequuntur.</p>
          </div>
          <div className="my-10 border-4 black">skill</div>
          <div className="my-10 border-4 black">expertise</div>
        </div>
      </div>
    </>
  );
}

export default App;
