
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BlogsView from './components/BlogsView'
import BlogFullView from './components/BlogFullView'
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "./reducers/blogSlice";
import { useEffect } from "react";


import './styles/App.css'


const App = () => {

  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <>

      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<BlogsView blogs={blogs} />} />
        <Route path='/Authors' element={<h1>Authors</h1>} />
        <Route path='/About' element={<h1>About</h1>} />
        <Route path='/Login' element={<LoginForm />} />
        <Route path="/:id" element={<BlogFullView blogs={blogs}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
