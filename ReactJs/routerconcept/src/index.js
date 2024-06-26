
import ReactDOM  from "react-dom/client";
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
export default function App()
{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="blogs" element={<Blogs/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="*" element={<NoPage/>}/>
     </Route> 
    </Routes>
    </BrowserRouter>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)

