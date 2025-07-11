import leftNormalImage from "../../image/button/template_adjustable_image_text/left.png";
import midNormalImage from "../../image/button/template_adjustable_image_text/mid.png";
import rightNormalImage from "../../image/button/template_adjustable_image_text/right.png";
import leftHoverImage from "../../image/button/template_adjustable_image_text/left_hv.png";
import midHoverImage from "../../image/button/template_adjustable_image_text/mid_hv.png";
import rightHoverImage from "../../image/button/template_adjustable_image_text/right_hv.png";
import leftClickImage from "../../image/button/template_adjustable_image_text/left_click.png";
import midClickImage from "../../image/button/template_adjustable_image_text/mid_click.png";
import rightClickImage from "../../image/button/template_adjustable_image_text/right_click.png";
import AdjustableImageTextButton from "./AdjustableImageTextButton";

interface Props {
  id?: number;
  text: string;
  onClick: () => void;
  isDisabled: boolean;
}

const TemplateAdjustableImageTextButton = ({
  id = 0,
  text,
  onClick,
  isDisabled,
}: Props) => {
  const leftRatio = 17 / 42;
  const rightRatio = 16 / 42;
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
          ...(isBold ? { fontWeight: "bold" } : {}),
          fontFamily: fontFamily,
          fontSize: `${fontSize}px`,
        }}
      >
        {text}
      </p>
    );
  };

  return (
    <AdjustableImageTextButton
      id={id}
      onClick={onClick}
      isDisabled={isDisabled}
      leftRatio={leftRatio}
      rightRatio={rightRatio}
      leftNormalImage={leftNormalImage}
      midNormalImage={midNormalImage}
      rightNormalImage={rightNormalImage}
      leftHoverImage={leftHoverImage}
      midHoverImage={midHoverImage}
      rightHoverImage={rightHoverImage}
      leftClickImage={leftClickImage}
      midClickImage={midClickImage}
      rightClickImage={rightClickImage}
      leftDisabledImage={leftClickImage}
      midDisabledImage={midClickImage}
      rightDisabledImage={rightClickImage}
      getText={getText}
    />
  );
};

export default TemplateAdjustableImageTextButton;
