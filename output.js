import React, { Suspense } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { textQuery } from "./selectors";
import { currentTextIDState } from "./atom";
import CurrentText from "./currentText";

const output = () => {
  const texts = useRecoilValue(textQuery);
  const [currentTextID, setCurrentTextID] = useRecoilState(currentTextIDState);

  /*
   * as an alternative, we could declare them separately:
   * const currentSongID = useRecoilValue(currentSongIDState);
   * const setCurrentSongID = useSetRecoilState(currentSongIDState);
   */

  return (
    <>
      <div>
        <h2>글 목록</h2>
        {texts.map((text) => (
          <div key={text.id}>
            <div onClick={() => setCurrentTextID(text.id)}>
              {text.title} {text.id === currentTextID && "*"}
            </div>
          </div>
        ))}
        {currentTextID && (
          <Suspense fallback={<span>Loading...</span>}>
            <CurrentText />
          </Suspense>
        )}
      </div>
    </>
  );
};
export default output;
