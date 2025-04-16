import logo from './logo.svg';
import './App.css';
import Stack from "@mui/material/Stack";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Button from "@mui/material/Button"
import Home from './pages/Home';
import Profile from './pages/Profile';
import Engage from './pages/Engage';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Layout from './pages/Layout';
import SignUp from './pages/Signup';
import LogIn from './pages/LogIn';


function App() {
  return (
    <>
    <BrowserRouter>
 
      <Navbar/>
        <div className='App-header'> 
        <Routes> 
        <Route path="/" element={<Layout />}></Route>
          <Route index element={<Home />}></Route>
          <Route path="Profile" element={<Profile />}></Route>
          <Route path="Engage" element={<Engage />}></Route>
          <Route path="Cart" element={<Cart />}></Route>
          <Route path="SignUp" element={<SignUp />}></Route>
          <Route path="LogIn" element={<LogIn />}></Route>
        </Routes>
        </div>
    </BrowserRouter>
    </>
 
  );
}

export default App;
