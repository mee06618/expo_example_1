import React from "react";
import { useRecoilValue } from "recoil";
import { currentTextQuery } from "./selectors";

const CurrentText = () => {
  const currentText = useRecoilValue(currentTextQuery);

  return currentText ? (
    <>
      <h2>Current Text Details:</h2>
      <p>Title: {currentText.body}</p>
      <p>Released: {currentText.recent}</p>
    </>
  ) : null;
};

export default CurrentText;
