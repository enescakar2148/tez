import { Route, Routes } from "react-router";
import Feed from "./Components/Feed";
import Signup from "./Components/Signup";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/sign-up" element={<Signup/>}/>

      </Routes>
    </div>
  );
}

export default App;
