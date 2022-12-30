const EAT_INFO_BUTTON = {
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  PARTICIPATE: "PARTICIPATE",
  CANCEL: "CANCEL",
};

const KOREAN = {
  DELETE: "삭제",
  UPDATE: "수정",
  PARTICIPATE: "참여",
  CANCEL: "불참",
};

Object.freeze(EAT_INFO_BUTTON);
Object.freeze(KOREAN);

const EAT_INFO_BUTTONS = { ...EAT_INFO_BUTTON, KOREAN };
Object.freeze(EAT_INFO_BUTTONS);

export default EAT_INFO_BUTTONS;
