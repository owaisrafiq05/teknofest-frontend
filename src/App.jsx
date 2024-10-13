import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home  from "./pages/Home"
import ContactUs from "./pages/ContactUs";
import NavBarComponent from "./components/GlobalComponents/NavBarComponent";
import Navbar2 from "./components/GlobalComponents/Navbar2";
import FooterComponent from "./components/GlobalComponents/FooterComponent";
import Loader from "./components/GlobalComponents/LoaderComponent"; // Import the loader
import { useState, useEffect } from 'react';

import CategoryPage from "./components/CategoryPage";
import Competition from "./components/Competition";
import Form from './components/Register'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Router>
        {loading ? (
          <Loader />
        ) : (
          <>
            <NavBarComponent />
            {/* <div className="flex justify-center items-center w-[100%] mx-auto">
              <Navbar2/>
            </div> */}
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/competitions" element={<CategoryPage/>} />
                <Route path="/competitions/:id" element={<Competition/>} />
                <Route path="/register" element={<Form />} />
              </Routes>
            </div>
            <FooterComponent />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;