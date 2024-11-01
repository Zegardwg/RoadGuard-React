import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Report from "./pages/report";
import User from "./pages/user";
import Monitoring from "./pages/monitoring";
import Dashboard from "./components/dashboard";
import Header from "./components/header"; // Pastikan penggunaan huruf kapital sesuai
import Footer from "./components/footer";
import Sidebar from "./components/sidebar"; // Import Sidebar
import 'leaflet/dist/leaflet.css';
function App2() {
  return (
    <Router>
      
      <div className="flex min-h-screen">
        {/* Sidebar hanya muncul di halaman Dashboard */}
        <Routes>
          <Route path="/Dashboard" element={<Sidebar />} />
          <Route path="/Report" element={<Sidebar />} />
          <Route path="/User" element={<Sidebar />} />
          <Route path="/Monitoring" element={<Sidebar />} />
        </Routes>

        <div className="flex-1">
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/User" element={<User />} />
            <Route path="/Monitoring" element={<Monitoring />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App2;
