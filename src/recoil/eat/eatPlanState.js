import { atom } from "recoil";

const eatPlanState = atom({
  key: "eatPlanState",
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

export default eatPlanState;
