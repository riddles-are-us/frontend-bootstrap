import normalImage from "../../images/buttons/template_image_text/tab.png";
import hoverImage from "../../images/buttons/template_image_text/tab_hv.png";
import clickImage from "../../images/buttons/template_image_text/tab_click.png";
import ImageTextButton from "../common/ImageTextButton";

interface Props {
  id?: number;
  text: string;
  onClick: () => void;
  isDisabled: boolean;
}

const TemplateImageTextButton = ({
  id = 0,
  text,
  onClick,
  isDisabled,
}: Props) => {
  const fontSizeRatio = 1;
  const fontFamily = "Allerta";
  const isBold = false;
  const color = "white";

  const getText = (fontBaseSize: number) => {
    const fontSize = fontBaseSize * fontSizeRatio;
    return (
      <p
        className="adjustable-image-text-button-text"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "90%",
          height: "auto",
          transform: "translate(-50%, -50%)",
          margin: "0px",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
          color: color,
          fontFamily: fontFamily,
          fontSize: `${fontSize}px`,
          whiteSpace: "pre",
          ...(isBold ? { fontWeight: "bold" } : {}),
        }}
      >
        {text}
      </p>
    );
  };

  return (
    <ImageTextButton
      id={id}
      onClick={onClick}
      isDisabled={isDisabled}
      normalImage={normalImage}
      hoverImage={hoverImage}
      clickImage={clickImage}
      disabledImage={clickImage}
      getText={getText}
    />
  );
};

export default TemplateImageTextButton;
