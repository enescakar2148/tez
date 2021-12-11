import { Route, Routes } from "react-router";
import Blog from "./Components/Blog";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import Post from "./Components/Post";
import Signup from "./Components/Signup";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/post" element={<Post/>}/>
        <Route path="/blog" element={<Blog/>}/>

      </Routes>
    </div>
  );
}

export default App;
