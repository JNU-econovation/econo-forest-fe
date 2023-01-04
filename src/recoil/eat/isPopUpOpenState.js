import { atom } from "recoil";

const isPopUpOpenState = atom({
  key: "isPopUpOpenState",
  default: false,
});

export default isPopUpOpenState;
