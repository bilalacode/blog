// import blogService from "../services/blogs";
import { Link } from "react-router-dom";
import "../styles/BlogsView.css";

const BlogsView = ({blogs}) => {


  return (
    <div className="blogs">
      {blogs ? (
        blogs.map((blog) => (
          <div className="blogindividual" key={blog.id}>
            <h1 className="blogtitle">{blog.title}</h1>
            <h3 className="author">{blog.author}</h3>
            <p className="metadescription">{blog.metaDescription}</p>
            <Link to={`/${blog.id}`}>Read full article.</Link>
          </div>
        ))
      ) : (
        <p>Loading blogs...</p>
      )}
    </div>
  );
};

export default BlogsView;
