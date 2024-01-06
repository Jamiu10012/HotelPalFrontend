import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Layout from "./Layout";
import ContactUs from "./pages/ContactUs";
import Properties from "./pages/Properties";
import PropDetail from "./pages/PropDetail";
import ListProp from "./pages/ListProp";
import Dashboard from "./pages/dashboard";
import AllBlog from "./pages/AllBlog";
import BlogDetail from "./pages/BlogDetail";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EditProfile from "./pages/editProfile";
import VerifySucc from "./pages/verifySucc";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="appl">
      <ScrollToTop />

      <Navbar />
      <Routes>
        {/* <Route element={<Layout />}> */}
        <Route index path={"/"} element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<SignupPage />} />
        <Route path={"/contact"} element={<ContactUs />} />
        <Route path={"/properties"} element={<Properties />} />
        <Route path={"/propdet"} element={<PropDetail />} />
        <Route path={"/listp"} element={<ListProp />} />
        <Route path={"/dash"} element={<Dashboard />} />
        <Route path={"/all-blog"} element={<AllBlog />} />
        <Route path={"/blog-det"} element={<BlogDetail />} />
        <Route path={"/edit-das"} element={<EditProfile />} />
        <Route path={"/user-verified"} element={<VerifySucc />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
