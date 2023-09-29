import './App.css';
import 'flowbite';
import { BrowserRouter as Router, Switch, 
  Route, Redirect, BrowserRouter, Routes,} from "react-router-dom";

import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div>
        <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
  
};

export default App;
