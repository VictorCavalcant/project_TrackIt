import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignInPage from "./pages/SignInPage";
import "./assets/reset.css"
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />}/>
        <Route path="/cadastro" element={<SignUpPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
