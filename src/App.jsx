import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import SignIn  from "./Pages/SignIn";
import TeamCards from"./Pages/TeamCards";
import Author from "./Pages/Author";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Benefits from "./Pages/Benefits";
import Pricing from "./Pages/Pricing";
import Blog from "./Pages/Blog";
import ForgotPassword from "./Pages/ForgotPassword";
import SignUp from "./Pages/SignUp";
import CoursePlayer from "./Pages/CoursePlayer";






function App() {
  return (

    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/author/:name" element={<Author/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/courses"  element ={<Courses  />}/>
      <Route path="/benefits" element={<Benefits />}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/blog" element={<Blog />}/> 
      <Route path="/forgot-password"  element={<ForgotPassword/>}  />
      <Route path="/signup"  element={<SignUp/>}  />
      <Route path="/course/:id" element={<CoursePlayer/>} />
      
    </Routes>
   
    <Footer/>

    </>
  );
}

export default App;
