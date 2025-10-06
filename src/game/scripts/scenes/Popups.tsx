import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectUIState, UIStateType } from "../../../data/ui";
import TemplatePopup from "../templates/TemplatePopup";

const Popups = () => {
  const uIState = useAppSelector(selectUIState);

  return <>{uIState.type == UIStateType.TemplatePopup && <TemplatePopup />}</>;
};

export default Popups;
