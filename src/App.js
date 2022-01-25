import { Route, Routes } from "react-router";
import Blog from "./Components/Blog";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Contact from "./Components/Contactt";
import PostDetails from "./Components/PostDetails";
import RandevuAl from "./Components/RandevuAl";
import Services from "./Components/Services"
import About_us from "./Components/About_us";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/tez" exact element={<Feed/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/blog" element={<Blog/>}/>

        <Route path="/feed" element={<Feed/>}/>
        <Route path="/about-us" element={<About_us/>}/>
        <Route path="/services" element={<Services/>}/>

        <Route path="/contact" element={<Contact/>}/>
        <Route path="/randevu-al" element={<RandevuAl/>}/>
        <Route path="/post-details" element={<PostDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
