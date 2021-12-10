import { Route, Routes } from "react-router";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import Signup from "./Components/Signup";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
