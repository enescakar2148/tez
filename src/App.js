import { Route, Routes } from "react-router";
import Blog from "./Components/Blog";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import About from "./Components/About";
import Hizmet from "./Components/Hizmet";
import Contact from "./Components/Contact";
import PostDetails from "./Components/PostDetails";
import RandevuAl from "./Components/RandevuAl";
import Services from "./Components/services"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/blog" element={<Blog/>}/>

        <Route path="/blog" element={<Blog/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>

        <Route path="/about" element={<About/>}/>
        <Route path="/hizmet" element={<Hizmet/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/randevu-al" element={<RandevuAl/>}/>
        <Route path="/post-details" element={<PostDetails/>}/>


      </Routes>
    </div>
  );
}

export default App;
