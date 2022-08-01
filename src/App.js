import React,{useState, createContext} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import AuthLogin from './modules/auth/auth-login/auth-login.screen';
import AuthRecovery from './modules/auth/auth-recovery/auth-recovery.screen';
import AuthResetPassword from './modules/auth/auth-reset-password/auth-reset-password.screen';
import AuthSignup from './modules/auth/auth-signup/auth-signup.screen';
import PrivateRoutes from "./PrivateRoutes";
import Cartegories from "./modules/cartegories/Cartegories";
import { AuthContext } from "./modules/auth/AuthContext";

function App() {
  const[auth, setAuth] = useState("")
  console.log(auth);
  const token = localStorage.getItem('token')
  
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route exact path="/" element={<Cartegories/>} />
          </Route>
          <Route path="/login" element={<AuthLogin/>} />
          <Route path="/signup" element={<AuthSignup/>} />
          <Route path="/recovery" element={<AuthRecovery/>} />
          <Route exact path={`/reset-password`} element={<AuthResetPassword/>} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
