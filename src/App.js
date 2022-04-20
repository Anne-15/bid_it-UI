import './index.css';
import Navbar from './components/Navbar';
import Tenders from './pages/Tenders';
import Search from './components/Search';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Suppliers from './pages/Suppliers';
import Profile from './pages/Profile.js';
import AddTender from './pages/AddTender';
import AddCompany from './pages/AddCompany';
import Register from './pages/Register';
import Login from './pages/Login';

export default function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Search/>
      <Routes>
        <Route exact path = '/' element = {<Tenders/>} />
        <Route path='/suppliers' element = {<Suppliers/>} />
        <Route path='/profile' element = {<Profile/>} />
        <Route path='/tender/add' element = {<AddTender/>} />
        <Route path='/company/add' element = {<AddCompany/>} />
        <Route path='/register' element = {<Register/>} />
        <Route path='/login' element = {<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

