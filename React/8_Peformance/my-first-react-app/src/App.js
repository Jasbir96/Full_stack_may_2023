// import logo from './logo.svg';
import './App.css';

import { useState, lazy, Suspense, } from "react";
import Navbar from './component/Navbar';
import Home from './pages/Home';

import { Route, Routes } from "react-router-dom";
// import About from './pages/About';
// import Products from './pages/Product';
const About = lazy(() => { return import("./pages/About") });
const Products = lazy(() => { return  import("./pages/Product") });
function App() {
  // const [visibility, setVisibility] = useState("none");
  const [posts, setPosts] = useState([]);
  const handleClick = () => {
    // dynmaic import
    import("./posts.js").then((module) => {
      // console.log(module);
      setPosts(module.default);
    })
    // if (visibility == "none") {
    //   setVisibility("block");
    //   // dynmaic import

    // } else {
    //   setVisibility("none");
    // }
    // // console.log("handleClick");


  }

  return (
    <>
      {/* <h1>I am App</h1>
      <button onClick={handleClick}> Add Image</button>
      <ul >{
        posts.map((post, idx) => {
          return <p key={idx}>{JSON.stringify(post)}</p>
        })
        
      }</ul> */}
      <Suspense fallback={<h2>...Loading</h2>}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path='/products' element={<Products />}></Route>
        </Routes>
      </Suspense>

    </>
  );
}

export default App;
