import Main from "./Components/Main";
import "./style.scss";
import { Routes, Route } from "react-router-dom";
import Malumotlar from "./Components/Malumotlar";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/malumotlar" element={<Malumotlar/>} />
      </Routes>
      {/* <Main /> */}
    </div>
  );
}

export default App;
