import React, { Suspense, useState } from "react";
import { RecoilRoot } from "recoil";
import Output from "./output";

function Write() {
  return (
    <div>
      <RecoilRoot>
        <Suspense fallback={<span>Loading...</span>}>
          <Output />
        </Suspense>
      </RecoilRoot>
    </div>
  );
}
export default Write;
