import { atom } from "recoil";

const eatInfoState = atom({
  key: "eatInfoState",
  default: {
    id: '',
    title: '',
    date: '',
    location: '',
    numParticipant: '',
    participants: {},
    authorName: '',
    authorId: '',
    isAuthor: false,
  },
});

export default eatInfoState;
