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
import ProjectFeaturesAndValues from './Components/Features/ProjectFeaturesAndValues';
import BoardOfDirectors from './Components/Features/BoardOfDirectors';
import ProjectLocationMap from './Components/Features/ProjectLocationMap';
import ProjectAmenities from './Components/Features/ProjectAmenities';
import TermsAndConditions from './Components/Features/Termsconditions';
import MyInformation from './Components/Features/MyInformation';
import OurProducts from './Components/Features/OurProducts';


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
        <Route path='/company-values' element={<ProjectFeaturesAndValues />}>Company Values</Route>
        <Route path='/board-of-directors' element={<BoardOfDirectors />}>Company Values</Route>
        <Route path='/project-location-map' element={<ProjectLocationMap />}>Project Locations</Route>  
        <Route path='/project-amenities' element={<ProjectAmenities />}>Company Values</Route>  
        <Route path='/terms-conditions' element={<TermsAndConditions />}>Company Values</Route>  
        <Route path='/my-information' element={<MyInformation />}>My Information</Route>  
 
       <Route path='/our-products' element={<OurProducts />}>My Products</Route>  


      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
