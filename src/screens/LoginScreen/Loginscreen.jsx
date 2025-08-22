import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";
import "./_login.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <div className="login__container">
        <img
          className="login__youtube-logo"
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt=""
        />
        <h2>U Tube : Try Something New</h2>
        <button onClick={handleLogin} className="login__google-btn">
          <img
            className="login__google-logo"
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt=""
          />
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
