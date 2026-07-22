import "./App.css";
import Card from "./components/card";
import Employee from "./components/table";
import Home from "./components/home";
import Comments from "./components/comment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsDashboard from "./components/NewsDashboard";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/cards" element={<Card />} />
      <Route path="/employees" element={<Employee />} />
      <Route path="/comments" element={<Comments />} />
      <Route path="/news" element={<NewsDashboard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;