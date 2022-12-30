import { atom } from "recoil";

const eatInfoState = atom({
  key: "eatInfoState",
  default: {
    id: "",
    title: "",
    date: "",
    location: "",
    numParticipant: "",
    participants: {},
    authorName: "",
    authorId: "",
    isAuthor: true,
    isApplied: true,
  },
});

export default eatInfoState;
