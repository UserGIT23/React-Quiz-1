import "./App.css";
import Header from "./MyComponent/Header";
import Main from "./MyComponent/Main";
import Footer from "./MyComponent/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./MyComponent/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Main" element={<Main />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
