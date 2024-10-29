import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Added alias for Router
import Index from "./pages/index";
import Login from "./pages/login";

function App2() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App2;
