import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home"
import {HelmetProvider } from "react-helmet-async";
import './styles/App.scss';
import './styles/header.scss';

import './styles/footer.scss';
import './styles/home.scss';

function App() {
  return (
    <HelmetProvider>
      <Router>
      <Header />
      <Routes>

        <Route path="/" element={<Home />}/>
        {/* <Route path="/"/> */}

      </Routes>
      <Footer />
    </Router>
    </HelmetProvider>
    
  );
}

export default App;
