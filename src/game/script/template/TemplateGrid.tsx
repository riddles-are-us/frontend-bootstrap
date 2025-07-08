import "./TemplateGrid.css";
import { useEffect, useRef, useState } from "react";
import Grid from "../common/Grid";

const TemplateGrid = () => {
  const elementRatio = 432 / 159;
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [elementWidth, setElementWidth] = useState<number>(0);
  const [elementHeight, setElementHeight] = useState<number>(0);
  const columnCount = 3;
  const [rowCount, setRowCount] = useState<number>(0);
  const [elements, setElements] = useState<JSX.Element[]>([]);

  const adjustSize = () => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth / columnCount;
      const height = width / elementRatio + 10;
      setElementWidth(width);
      setElementHeight(height);
      setRowCount(Math.floor(containerRef.current.offsetHeight / height));
    }
  };

  useEffect(() => {
    adjustSize();

    window.addEventListener("resize", adjustSize);
    return () => {
      window.removeEventListener("resize", adjustSize);
    };
  }, []);

  return (
    <div className="template-grid-container">
      <div ref={containerRef} className="template-grid-grid-container">
        <Grid
          elementWidth={elementWidth}
          elementHeight={elementHeight}
          columnCount={columnCount}
          rowCount={rowCount}
          elements={elements}
        />
      </div>
    </div>
  );
};

export default TemplateGrid;
