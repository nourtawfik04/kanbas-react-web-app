import Labs from "./Labs";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Kanbas from "./Kanbas";
import Home from "./Home";
import store from "./Kanbas/store";
import { Provider } from "react-redux";

function App() {
  return (
    <HashRouter>
     <Provider store={store}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
      </Provider>
    </HashRouter>
  );
}


export default App;
