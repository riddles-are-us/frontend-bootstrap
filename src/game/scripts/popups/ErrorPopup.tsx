import { useEffect, useRef, useState } from "react";
import "./ErrorPopup.css";
import background from "../../images/popups/pop_frame.png";
import { useAppDispatch } from "../../../app/hooks";
import { popError } from "../../../data/error";
import { getTextShadowStyle } from "../common/Utility";
import TemplateImageTextButton from "../templates/TemplateImageTextButton";

interface Props {
  message: string;
}

const ErrorPopup = ({ message }: Props) => {
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [titleFontSize, setTitleFontSize] = useState<number>(0);
  const [descriptionFontSize, setDescriptionFontSize] = useState<number>(0);

  const adjustSize = () => {
    if (containerRef.current) {
      setTitleFontSize(containerRef.current.offsetHeight / 10);
      setDescriptionFontSize(containerRef.current.offsetHeight / 15);
    }
  };

  useEffect(() => {
    adjustSize();

    window.addEventListener("resize", adjustSize);
    return () => {
      window.removeEventListener("resize", adjustSize);
    };
  }, [containerRef.current]);

  const onClickCancel = () => {
    dispatch(popError());
  };

  return (
    <div className="error-popup-container">
      <div onClick={onClickCancel} className="error-popup-mask" />
      <div ref={containerRef} className="error-popup-main-container">
        <img src={background} className="error-popup-main-background" />
        <div className="error-popup-confirm-button">
          <TemplateImageTextButton
            onClick={onClickCancel}
            isDisabled={false}
            text={"Confirm"}
          />
        </div>
        <p
          className="error-popup-title-text"
          style={{
            fontSize: titleFontSize,
            ...getTextShadowStyle(titleFontSize / 15),
          }}
        >
          Error
        </p>
        <p
          className="error-popup-description-text"
          style={{
            fontSize: descriptionFontSize,
            ...getTextShadowStyle(titleFontSize / 30),
          }}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default ErrorPopup;
