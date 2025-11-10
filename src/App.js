import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer/Footer';

import Login from './Components/Login/Login';

import P_details from './Components/Products/P_details';
import Signup from './Components/Login/Signup';
import ContactUsPage from './Components/ContactUsPage';
import AboutUsPage from './Components/AboutUsPage';
import ChairmanMessage from './Components/ChairmanMessage';
import CEOMessage from './Components/CEOMessage';
import VisionMission from './Components/Vission';
import ServicesPage from './Components/Services';


function App() {
  return (
    <div className="App">


      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>


        <Route path='login' element={<Login />}>Login</Route>
        <Route path='signup' element={<Signup />}>Signup</Route>
        <Route path='/Product_details' element={<P_details />}>P_details</Route>
        <Route path='/contact-us' element={<ContactUsPage />}>ContactUsPage</Route>
        <Route path='/about-us' element={<AboutUsPage />}>AboutUsPage</Route>
        <Route path='/chairman-message' element={<ChairmanMessage />}>ChairmanMessage</Route>
        <Route path='/ceo-message' element={<CEOMessage />}>CeoMessage</Route>
        <Route path='/vission' element={<VisionMission />}>Vission</Route>
        <Route path='/services' element={<ServicesPage />}>Services</Route>
 

      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
