import React from "react";
import ImageButton from "../common/ImageButton";
import buttonImage from "../../images/buttons/template/confirm.png";
import buttonHoverImage from "../../images/buttons/template/confirm_hover.png";
import buttonClickImage from "../../images/buttons/template/confirm_click.png";
import "./TemplateButton.css";

interface Props {
  onClick: () => void;
}

const TemplateButton = ({ onClick }: Props) => {
  return (
    <div className="template-button-scale">
      <ImageButton
        isDisabled={false}
        defaultImagePath={buttonImage}
        hoverImagePath={buttonHoverImage}
        clickedImagePath={buttonClickImage}
        disabledImagePath={buttonClickImage}
        onClick={onClick}
      />
    </div>
  );
};

export default TemplateButton;
