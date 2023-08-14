import logo from './logo.svg';
import './App.scss';
import Layout from './Components/Layout/Layout';
import {Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ProjectList from './Components/ProjectList/ProjectList';
import Project2 from './Components/Project2/Project2';
import Project1 from './Components/Project1/Project1';
import Project3 from './Components/Project3/Project3';
import Project4 from './Components/Project4/Project4';
import Project5 from './Components/Project5/Project5';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    
    <>
    <Routes> 
      <Route path = "/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path ="about" element={<About/>}/>
      <Route path ="project" element={<ProjectList/>}/>
      <Route path ="project2" element={<Project2/>}/>
      <Route path ="project1" element={<Project1/>}/>
      <Route path ="project4" element={<Project4/>}/>
      <Route path ="project3" element={<Project3/>}/>
      <Route path ="project5" element={<Project5/>}/>
      <Route path ="contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </>
  );
}

      {/* <Route path="about" element={<About/>}> */}
export default App;
