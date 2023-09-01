import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/CommentSection.css";

const CommentSection = ({ comments }) => {
  const authCheck = useSelector((state) => state.auth);

  const handleAddComment = () => {
    console.log("Hello")
  };

  return (
    <div className="comments-section">
      <h3>Comments:</h3>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <p>{comment.content}</p>
          <span>By {comment.user.name}</span>
        </div>
      ))}
      {authCheck.isLoggedIn && (
        <div className="add-comment-section">
          <h4>Add a Comment:</h4>
          <input type="text" placeholder="Your comment here..." />
          <button onClick={handleAddComment}>Post Comment</button>
        </div>
      )}

      {!authCheck.isLoggedIn && (
        <div className="login-prompt">
          In order to comment and like <Link to="/Login">please login.</Link>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
