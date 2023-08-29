import React, { useEffect } from 'react';
import '../styles/BlogFullView.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleBlog } from '../reducers/blogSlice';

const BlogFullView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === id)
  );

  useEffect(() => {
    // Check if the blog data is available in Redux store
    if (!blog) {
      // If not, fetch the individual blog data by ID
      dispatch(fetchSingleBlog(id));
    }
  }, [dispatch, blog, id]);

  if (!blog) {
    return <p>Loading blog...</p>;
  }

  return (
    <div className="blog-full-view">
      <h1 className="blog-title">{blog.title}</h1>
      <div className="blog-meta">
        <span className="blog-author">By {blog.author}</span>
        <span className="blog-likes">{blog.likes} Likes</span>
      </div>
      <div className="blog-content">{blog.content}</div>
    </div>
  );
};

export default BlogFullView;