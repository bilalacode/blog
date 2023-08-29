import "../styles/LoginForm.css";
// import loginService from "../services/login";
import { manageNotification } from "../reducers/notificationSlice";
import { useDispatch } from "react-redux";
import { manageUserLogin } from "../reducers/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleLogin = (event) => {
    event.preventDefault();
    try {
      dispatch(
        manageUserLogin({
          username: event.target.username.value,
          password: event.target.password.value,
        })
      );
    } catch (error) {
      dispatch(manageNotification(error.message));
    }
  };
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
