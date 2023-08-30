import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/CreateBlog.css";

const CreateBlog = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
  const authCheck = useSelector((state) => state.auth); // Assuming you want to check if user is logged in before allowing to create a blog

  const handleBlogSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;

    try {
      // Dispatch your action to add the blog
      // For example:
      // dispatch(addBlog({ title, content }));
    } catch (error) {
      // Handle any errors, for example:
      // dispatch(manageNotification(error.message));
    }
  };

  //   useEffect(() => {
  //     if (!authCheck.isLoggedIn) {
  //       navigate("/login"); // Redirect to login if user is not logged in
  //     }
  //   }, [authCheck.isLoggedIn, navigate]);

  if (!authCheck.isLoggedIn) {
    return (
      <p>
        In order to create a blog, you need to <Link to="/Login">login</Link>{" "}
        first.
      </p>
    );
  }

  return (
    <div className="create-blog">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleBlogSubmit}>
        <div className="input-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" placeholder="Enter blog title" />
        </div>
        <div className="input-group">
          <label htmlFor="content">Content:</label>
          <textarea id="content" placeholder="Enter blog content"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
