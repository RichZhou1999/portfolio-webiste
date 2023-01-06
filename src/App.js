import logo from './logo.svg';
import './App.scss';
import Layout from './Components/Layout/Layout';
import {Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {
  return (
    
    <>
    <Routes> 
      <Route path = "/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path ="about" element={<About/>}/>
      </Route>
    </Routes>
    </>
  );
}

      {/* <Route path="about" element={<About/>}> */}
export default App;
