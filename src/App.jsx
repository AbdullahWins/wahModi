import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Conversation from "./pages/Conversation"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conversation" element={<Conversation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
