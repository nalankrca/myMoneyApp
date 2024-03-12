import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Singup from "./page/singup/Singup";
import Navbar from "./components/Navbar";

function App() {
  const {authIsReady,user} =useAuthContext()
  return (
    <div className="App">

   {authIsReady && (<BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={user ? <Home/> : <Login/>}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>}/>
        <Route path="/singup"element={user ? <Navigate to="/" /> : <Singup/>}/>
      </Routes>
      </BrowserRouter>)}

    </div>
  );
}

export default App;
