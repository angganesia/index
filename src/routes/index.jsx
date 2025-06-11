//import react router dom
import { Routes, Route } from "react-router-dom";

//import page homepage
import Home from "@pages/home.jsx";

//import page toram online tools
import ToramHome from "@pages/toramtools";
import Cbc from "@pages/toramtools/cbc";
import KodeBuff from "@pages/toramtools/kodebuff";
import Equipments from "@pages/toramtools/equipments";
import MonstersTo from "@pages/toramtools/monsters";

//import page osrs tools
import OsrsHome from "@pages/osrs";

//import page not found
import PageNotFound from "@pages/pageNotFound.jsx";

function RoutesIndex() {
  return (
    <Routes>
      {/* route "/" */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* route "/toramtools" */}
      <Route
        path="/toramtools"
        element={<ToramHome />}
      />
      <Route
        path="/toramtools/cbc"
        element={<Cbc />}
      />
      <Route
        path="/toramtools/kodebuff"
        element={<KodeBuff />}
      />
      <Route
        path="/toramtools/equipments"
        element={<Equipments />}
      />
      <Route
        path="/toramtools/monsters"
        element={<MonstersTo />}
      />

      {/* route "/osrs" */}
      <Route
        path="/osrs"
        element={<OsrsHome />}
      />

      {/* route "PageNotFound" */}
      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Routes>
  );
}

export default RoutesIndex;
