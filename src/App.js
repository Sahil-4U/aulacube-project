import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Contactpage from "./components/pages/Contactpage";
const Dashboardpage = lazy(() => import('./components/pages/Dashboardpage'));



function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/dashboardpage" element={
        <Suspense fallback={<center><h3>loading...</h3></center>}><Dashboardpage /></Suspense>
      }
      />

      <Route path="/contactpage" element={<Contactpage />} />
    </Routes>
  );
}

export default App;
