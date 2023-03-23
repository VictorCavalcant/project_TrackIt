import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignInPage from "./pages/SignInPage";
import "./assets/reset.css"
import SignUpPage from "./pages/SignUpPage";
import HobbiesPage from "./pages/HobbiesPage";
import HistoryPage from "./pages/HistoryPage";
import TodayPage from "./pages/TodayPage";
import TokenContext from "./contexts/TokenContext";
import UserImgContext from "./contexts/UserImgContext";
import LoadingContext from "./contexts/LoadingContext";

function App() {

  const [token, setToken] = useState(null);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  return (
  <TokenContext.Provider value={{token, setToken}}>
      <UserImgContext.Provider value={{image, setImage}}>
        <LoadingContext.Provider value={{loading, setLoading}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignInPage />}/>
              <Route path="/cadastro" element={<SignUpPage />}/>
              <Route path="/habitos" element={<HobbiesPage />}/>
              <Route path="/historico" element={<HistoryPage />}/>
              <Route path="/hoje" element={<TodayPage />}/>
            </Routes> 
          </BrowserRouter>
      </LoadingContext.Provider>
    </UserImgContext.Provider>
  </TokenContext.Provider>
  );
}

export default App;
