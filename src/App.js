import Head from "./components/Head";
import Search from "./pages/Search";
import Read from "./pages/Read";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="flex flex-col">
      
      <Router>
        <Head />
        <Routes>
          <Route path="/" exact element={<Search/>} />
          <Route path="/read" exact element={<Read />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
