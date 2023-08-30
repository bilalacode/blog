import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogsView from "./components/BlogsView";
import BlogFullView from "./components/BlogFullView";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "./reducers/blogSlice";
import { useEffect } from "react";
import Notification from "./components/Notification";
import Logout from "./components/Logout";
import { loginUser } from "./reducers/authSlice";
import "./styles/App.css";

const App = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  useEffect(() => {
    if(window.localStorage.userData){
      console.log(window.localStorage.userData)
      const userData = JSON.parse(window.localStorage.userData)
      dispatch(loginUser({user: userData.user, token: userData.token}))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BlogsView blogs={blogs} />} />
          <Route path="/Authors" element={<h1>Authors</h1>} />
          <Route path="/About" element={<h1>About</h1>} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/:id" element={<BlogFullView blogs={blogs} />} />
        </Routes>
      </Router>
      <Notification />
    </>
  );
};

export default App;
