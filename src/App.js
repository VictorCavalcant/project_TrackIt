import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignInPage from "./pages/SignInPage";
import "./assets/reset.css"
import SignUpPage from "./pages/SignUpPage";
import HobbiesPage from "./pages/HobbiesPage";
import HistoryPage from "./pages/HistoryPage";
import TodayPage from "./pages/TodayPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />}/>
        <Route path="/cadastro" element={<SignUpPage />}/>
        <Route path="/habitos" element={<HobbiesPage />}/>
        <Route path="/historico" element={<HistoryPage />}/>
        <Route path="/hoje" element={<TodayPage />}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
