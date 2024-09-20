import Labs from "./Labs";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Kanbas from "./Kanbas";
import Home from "./Home";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}


export default App;
