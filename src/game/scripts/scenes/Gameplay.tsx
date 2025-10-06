import React, { useEffect, useRef, useState, MouseEvent } from "react";
import Popups from "./Popups";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useWalletContext } from "zkwasm-minirollup-browser";
import "./Gameplay.css";
import { selectUserState } from "../../../data/state";
import { sendTransaction } from "zkwasm-minirollup-browser/";
import { selectUIState, UIState } from "../../../data/ui";

const Gameplay = () => {
  const dispatch = useAppDispatch();
  const { l2Account } = useWalletContext();
  const userState = useAppSelector(selectUserState);
  const uIState = useAppSelector(selectUIState);

  return (
    <>
      <Popups />
      <p>Gameplay</p>
    </>
  );
};

export default Gameplay;
