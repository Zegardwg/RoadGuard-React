import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Removed extra BrowserRouter import
import Index from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";

import Header from "./components/header"; // Changed to uppercase 'Header'
import Footer from "./components/footer";

function App2() {
  return (
    <div>
      <Router>
        <Header /> {/* Corrected header element */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/" element={<Index />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer /> {/* Assuming you want to include Footer as well */}
      </Router>
    </div>
  );
}

export default App2;
