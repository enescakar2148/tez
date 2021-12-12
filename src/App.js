import { Route, Routes } from "react-router";
import Blog from "./Components/Blog";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import About from "./Components/About";
import Hizmet from "./Components/Hizmet";
import Contact from "./Components/Contact";
import RandevuAl from "./Components/RandevuAl";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/hizmet" element={<Hizmet/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/randevu-al" element={<RandevuAl/>}/>

      </Routes>
    </div>
  );
}

export default App;
