import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hero from "./pages/home/sections/Hero/Hero";
import './global.css';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/hero" element={<Hero />} />
        </Routes>
    );
}

export default App;