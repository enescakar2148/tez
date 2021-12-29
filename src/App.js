import { Route, Routes } from "react-router";
import Blog from "./Components/Blog";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
<<<<<<< HEAD
import About from "./Components/about_us";
import Services from "./Components/services.js";
=======
import About from "./Components/About";
import Hizmet from "./Components/Hizmet";
import Contact from "./Components/Contact";
import PostDetails from "./Components/PostDetails";
import RandevuAl from "./Components/RandevuAl";


>>>>>>> 244635b30ef56c827f1c022924ba6f9b63be511b

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/blog" element={<Blog/>}/>
<<<<<<< HEAD
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
=======
        <Route path="/about" element={<About/>}/>
        <Route path="/hizmet" element={<Hizmet/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/randevu-al" element={<RandevuAl/>}/>
        <Route path="/post-details" element={<PostDetails/>}/>

>>>>>>> 244635b30ef56c827f1c022924ba6f9b63be511b
      </Routes>
    </div>
  );
}

export default App;
