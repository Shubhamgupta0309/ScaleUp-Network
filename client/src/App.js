import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import MentorLogin from './pages/MentorLogin';
import About from './pages/About';
import UserRegister from './pages/UserRegister';
import MentorApplication from './pages/MentorApplication';
// import Programs from './pages/Programs';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/programs" element={<Programs />} /> */}
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/mentor-login" element={<MentorLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/mentor-application" element={<MentorApplication />} />
      </Routes>
    </Router>
  );
}

export default App;