
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import blogService from "./services/blogs"

import './styles/App.css'
import { useEffect, useState } from 'react'

const Home = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    const fetchBlogs = async () => {
      const result = await blogService.getAll()
      setBlogs(result)
    }
    fetchBlogs()

  }
  
  , []
  )

  console.log(blogs)

  return(
    <>{blogs.map(x => <div>{x.content}</div>)}</>
  )
}

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Authors' element={<h1>Authors</h1>} />
        <Route path='/About' element={<h1>About</h1>} />
        <Route path='/Login' element={<h1>Login</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
