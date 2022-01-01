import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import logo from './homepage/images/header-logo.png';
import './homepage/bootstrap/css/bootstrap.min.css';
import './App.css';
import './homepage/Style.css';
import './homepage/css/Tooplate-main.css';
import './homepage/css/Owl.css';
import './homepage/css/Fontawesome.css';
import './homepage/css/Flex-slider.css';
// import React from 'react';
import React,{Component} from "react";
import ReactDOM from "react-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import ScriptTag from 'react-script-tag';
import Contact from "./pages/Contact";
import Header from "./pages/header";
import Footer from "./pages/footer";
import NoPage from "./pages/nopage";
import Aboutus from "./pages/aboutus";
import Home from "./pages/home";
import Products from "./pages/products";


function App() {
  return (
        <BrowserRouter>
          <div className="App">
            <Header />
           
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Aboutus" element={<Aboutus />} />
            <Route path="Products" element={<Products />} />
            <Route element={<NoPage />} />
            {/* </Route> */}
          </Routes>
          
          <div className="App">
            <Footer />
          </div>
        </BrowserRouter>
  );
}

export default App;

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//           <Route path="contact" element={<Contact />} />
//         {/* <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="*" element={<NoPage />} />
//         </Route> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }
