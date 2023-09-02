import { Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Dashboardpage from "./components/pages/Dashboardpage";
import Contactpage from "./components/pages/Contactpage";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboardpage" element={<Dashboardpage />} />
      <Route path="/contactpage" element={<Contactpage />} />
    </Routes>
  );
}

export default App;
