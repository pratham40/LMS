import "./App.css"

import { Route, Routes } from "react-router-dom"

import RequireAuth from "./Components/Auth/RequireAuth"
import AboutUs from "./Pages/AboutUs"
import Contact from "./Pages/Contact"
import CourseDescription from "./Pages/Courses/CourseDescription"
import CourseList from "./Pages/Courses/CourseList"
import CreateCourse from "./Pages/Courses/CreateCourse"
import Denied from "./Pages/Denied"
import HomePage from "./Pages/HomePage"
import Login from "./Pages/Login"
import NotFound from "./Pages/NotFound"
import Signup from "./Pages/Signup"
function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutUs/>}/> 
      <Route path="/courses" element={<CourseList/>}/>
      <Route path="/courses/:courseId" element={<CourseDescription/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/denied" element={<Denied/>}/>

      <Route element={<RequireAuth allowedRoles={['ADMIN']}/>}>
        <Route path="/course/create" element={<CreateCourse/>}/>
      </Route>

      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
    
  )
}

export default App
