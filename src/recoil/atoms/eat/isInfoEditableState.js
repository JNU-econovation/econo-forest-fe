import { atom } from "recoil";

const isInfoEditableState = atom({
  key: "isInfoEditableState",
  default: false,
});

export default isInfoEditableState;
