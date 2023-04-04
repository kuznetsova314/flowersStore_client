import React from "react";
import {BrowserRouter} from "react-router-dom"
import AppRouter from "./components/AppRouter";
import Footer from "./components/UI/footer/Footer";
import Navbar from "./components/UI/Navbar/Navbar";


function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Navbar/>
        <AppRouter/>
        <Footer />
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
