import React, { useContext, useEffect, useState } from "react";
import {BrowserRouter} from "react-router-dom"
import AppRouter from "./components/AppRouter";
import Footer from "./components/UI/footer/Footer";
import Navbar from "./components/UI/Navbar/Navbar";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { check } from "./http/userAPI";
import Spinner from "./components/UI/spinner/Spinner";


const App = observer(() => {
  const {user} = useContext(Context);
  const {loading, setLoading} = useState(true);

  useEffect(() => {
    
    check().then(data => {
      user.setIsAuth(true);
      
      user.setUser(data)
      console.log(data)
      data.role === "admin" ? 
        user.setIsAdmin(true) 
        : data.role === "worker" ? 
        user.setIsWorker(true) 
        : user.setIsUser(true);
      

    })/*.finally(() => setLoading(false))*/
  }, [])
  console.log(user.isAuth)
  return (
    <BrowserRouter>
      
      {/* {loading ? 
        <div className="page"><Spinner/></div>
        : */}
        <div className="page">
          <Navbar/>
          <AppRouter/>
          <Footer />
        </div>
      {/* } */}
        
      
    </BrowserRouter>
    
  );
})

export default App;
