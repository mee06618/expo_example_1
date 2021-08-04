import { selector } from "recoil";
import { currentTextIDState } from "./atom";
import { getText, getTextById } from "./text";

export const textQuery = selector({
  key: "texts",
  get: async () => {
    const response = await getText();
    return response;
  },
});
export const currentTextQuery = selector({
  key: "currentText",
  get: async ({ get }) => {
    const response = await getTextById(get(currentTextIDState));
    return response;
  },
});
