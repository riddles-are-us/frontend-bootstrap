import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import "./WelcomePage.css";
import background from "../../images/scene/welcome_page/welcome_bg.png";

interface Props {
  isLogin: boolean;
  onLogin: () => void;
  onStartGame: () => void;
}

const WelcomePage = ({ isLogin, onLogin, onStartGame }: Props) => {
  const dispatch = useAppDispatch();
  const textRef = useRef<HTMLParagraphElement>(null);
  const [fontSize, setFontSize] = useState<number>(0);

  const adjustSize = () => {
    if (textRef.current) {
      const parentWidth = textRef.current.offsetWidth;
      setFontSize(parentWidth / 25);
    }
  };

  useEffect(() => {
    adjustSize();

    window.addEventListener("resize", adjustSize);
    return () => {
      window.removeEventListener("resize", adjustSize);
    };
  }, []);

  const onClickConnectWallet = () => {
    onLogin();
  };

  const onClickPlay = () => {
    onStartGame();
  };

  return (
    <div className="welcome-page-container">
      <img className="welcome-page-background" src={background} />
      {isLogin ? (
        <button
          className="welcome-page-panel-play-button"
          onClick={onClickPlay}
        >
          <p> Play </p>
        </button>
      ) : (
        <button
          className="welcome-page-panel-connect-wallet-button"
          onClick={onClickConnectWallet}
        >
          <p> Connect Wallet </p>
        </button>
      )}
    </div>
  );
};

export default WelcomePage;
