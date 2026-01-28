import Home from "./pages/Home";
import Nav from "./components/nav";
import Models from "./pages/Models";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
