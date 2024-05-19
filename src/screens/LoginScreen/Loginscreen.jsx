import  { useEffect } from "react";
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
    <div className='login'>
      <div className='login__container'>
        <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt='' />
        <h1>U Tube : Try Something New</h1>
        <button onClick={handleLogin}>Login With Google</button>
      </div>
    </div>
  );
};

export default LoginScreen;
