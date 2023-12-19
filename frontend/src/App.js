import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import BrowserRouter from "./BrowserRouter";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <BrowserRouter />
      <Footer />
    </Router>
  );
}
