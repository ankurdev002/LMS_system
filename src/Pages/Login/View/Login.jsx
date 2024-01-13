import { useState } from "react";
import CircularButton from "../../../Components/Buttons/CircularButton/CircularButton";
import LoginForm from "./LoginForm";

const Login = () => {
  const [clickCount, setClickCount] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [backgroundSecond, setBackgroundSecond] = useState("");
  const [isAnimated, setIsAnimated] = useState(false);

  const handleClickCount = () => {
    setIsAnimated(true);

    // Optionally, you can reset the animation after a certain duration
    setTimeout(() => {
      setIsAnimated(false);
    }, 1000);
    setClickCount(clickCount + 1);
    setButtonDisabled(true);
    setBackgroundSecond("var(--bgtextgradient)");
  };
  return (
    <>
      <div className="login-screen-background">
        <div className="logo-firm">LOGO</div>
        <div className="login-container">
          <CircularButton
            handleClick={handleClickCount}
            buttonDisabled={buttonDisabled}
          />
        </div>
        <div
          className={`login-container3 ${isAnimated ? "animated" : ""}`}
          style={{ background: backgroundSecond }}
        ></div>
        <div
          className="login-container2"
          style={{ background: backgroundSecond }}
        >
          {clickCount > 0 && <LoginForm />}
        </div>
      </div>
    </>
  );
};

export default Login;
