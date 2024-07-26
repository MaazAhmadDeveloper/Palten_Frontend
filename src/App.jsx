import react, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/pages/home/Home";
import NaveBar from "./Components/pages/home/pages/header/navbar";
import Footer from "./Components/pages/home/pages/footer/Footer";
import Pricing from "./Components/pages/home/pages/sitePages/Pricing";
import AboutUs from "./Components/pages/home/pages/sitePages/AboutUs";
import ContactUs from "./Components/pages/home/pages/sitePages/ContactUs";
import Login from "./Components/pages/home/pages/sitePages/Login";
import SignUp from "./Components/pages/home/pages/sitePages/SignUp";
import TermsOfService from "./Components/pages/home/pages/sitePages/TermsOfService";
import NotFound from "./Components/pages/home/pages/sitePages/NotFound";
import Faqs from "./Components/pages/home/pages/sitePages/Faqs";
import Documentations from "./Components/pages/home/pages/sitePages/Documentations";
import Blogs from "./Components/pages/home/pages/sitePages/Blogs";
import BlogPage from "./Components/pages/home/pages/sitePages/BlogPage";
import Images from "./Components/pages/home/pages/sitePages/Images";
import Spreadsheet from "./Components/pages/home/pages/sitePages/Spreadsheet";
import Document from "./Components/pages/home/pages/sitePages/Document";
import { useDataSelection } from "./context/ContextApi"; 


function App() {
const [user, setUser] = useState("");
const {blogsData, setblogsData} = useDataSelection();

    return <Router>
    <NaveBar setUser={setUser} user={user} />
    <div>
      <Routes>
        <Route path="/" element={<Home setUser={setUser} />} />
        <Route path="/pricing" element={<Pricing user={user} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/documentation" element={<Documentations />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/image" element={<Images setUser={setUser}/>} />
        <Route path="/spreadsheet" element={<Spreadsheet setUser={setUser}/>} />
        <Route path="/document" element={<Document setUser={setUser}/>} />
        {user === "" ? <Route path="/login" element={<Login />} /> : null}
        {user === "" ? <Route path="/signup" element={<SignUp />} /> : null}
        <Route path="/termsofservice" element={<TermsOfService />} />
 
        {blogsData.map(blog =>(
          <Route path={blog.route} element={<BlogPage {...blog} />} />
        ))}

        {/* This will catch any other paths not matched above */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </Router>
};

export default App;