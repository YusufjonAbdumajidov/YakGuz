import Main from "./Components/Main";
import "./style.scss";
import { Routes, Route } from "react-router-dom";
import Malumotlar from "./Components/Malumotlar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />

        <Route path="/malumotlar" element={<Malumotlar/>} />
      </Routes>
      {/* <Main /> */}
    </div>
  );
}

export default App;
