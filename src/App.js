import Head from "./components/Head";
import Search from "./pages/Search";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="flex flex-col">
      <Head />
      <Router>
        <Routes>
          <Route path="/" exact element={<Search/>} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
