import React, { useRef, useEffect, useState } from "react";
import ImageButton from "./ImageButton";
import leftNormalImage from "../../images/buttons/template/left.png";
import midNormalImage from "../../images/buttons/template/mid.png";
import rightNormalImage from "../../images/buttons/template/right.png";

import leftHoverImage from "../../images/buttons/template/left_hv.png";
import midHoverImage from "../../images/buttons/template/mid_hv.png";
import rightHoverImage from "../../images/buttons/template/right_hv.png";

import leftClickImage from "../../images/buttons/template/left_click.png";
import midClickImage from "../../images/buttons/template/mid_click.png";
import rightClickImage from "../../images/buttons/template/right_click.png";
import "./AdjustableImageButton.css";
import ElementButton from "./ElementButton";

interface Props {
  text: string;
  onClick: () => void;
  isDisabled: boolean;
}

const AdjustableImageButton = ({ text, onClick, isDisabled }: Props) => {
  const leftRatio = 17 / 42;
  const rightRatio = 16 / 42;

  const containerRef = useRef<HTMLParagraphElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [fontSize, setFontSize] = useState<number>(0);

  const adjustSize = () => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContainerHeight(containerRef.current.offsetHeight);
      setFontSize(containerRef.current.offsetHeight / 2);
    }
  };

  useEffect(() => {
    adjustSize();

    window.addEventListener("resize", adjustSize);
    return () => {
      window.removeEventListener("resize", adjustSize);
    };
  }, []);

  const getText = () => {
    return (
      <p
        className="adjustable-image-button-text"
        style={{
          fontSize: `${fontSize}px`,
        }}
      >
        {text}
      </p>
    );
  };

  const getElement = (
    leftImage: string,
    midImage: string,
    rightImage: string
  ) => {
    const eps = 0.05;
    const leftHeight = containerHeight;
    const leftWidth = leftHeight * leftRatio;
    const rightHeight = containerHeight;
    const rightWidth = rightHeight * rightRatio;
    const middleHeight = containerHeight;
    const middleWidth = containerWidth - (leftWidth + rightWidth) * (1 - eps);
    const middleLeft = leftWidth * (1 - eps);

    return (
      <>
        <img
          src={midImage}
          className="adjustable-image-button-element-container"
          style={{ width: middleWidth, height: middleHeight, left: middleLeft }}
        />
        <img
          src={leftImage}
          className="adjustable-image-button-element-container"
          style={{ width: leftWidth, height: leftHeight, left: 0 }}
        />
        <img
          src={rightImage}
          className="adjustable-image-button-element-container"
          style={{ width: rightWidth, height: rightHeight, right: 0 }}
        />
        {getText()}
      </>
    );
  };

  return (
    <div ref={containerRef} className="adjustable-image-button-container">
      <ElementButton
        isDisabled={isDisabled}
        defaultElement={getElement(
          leftNormalImage,
          midNormalImage,
          rightNormalImage
        )}
        hoverElement={getElement(
          leftHoverImage,
          midHoverImage,
          rightHoverImage
        )}
        clickedElement={getElement(
          leftClickImage,
          midClickImage,
          rightClickImage
        )}
        disabledElement={getElement(
          leftClickImage,
          midClickImage,
          rightClickImage
        )}
        onClick={onClick}
      />
    </div>
  );
};

export default AdjustableImageButton;
