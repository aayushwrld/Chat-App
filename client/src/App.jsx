import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";


function App() {
  return (
      <BrowserRouter>
    <div className="absolute inset-0 -z-10 h-full w-full bg-white-500 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>
      <AllRoutes />
      </BrowserRouter>
  );
}

export default App;
