import AuthorButton from "./AuthorButton";
import ClosedButton from "./ClosedButton";
import ParticipateButton from "./ParticipateButton";
import CancelButton from "./CancelButton";
import EAT_MEMBER_TYPES from "../../constant/EAT_MEMBER_TYPES";

function PlanButton({ isClosed, info }) {
  return <AuthorButton info={info} />;

  // if (isClosed !== false) {
  //   return <ClosedButton />;
  // } else {
  //   switch (info.eatMemberType) {
  //     case EAT_MEMBER_TYPES.AUTHOR:
  //       return <AuthorButton info={info} />;
  //       break;
  //     case EAT_MEMBER_TYPES.PARTICIPANT:
  //       return <CancelButton info={info} />;
  //       break;
  //     case EAT_MEMBER_TYPES.NONPARTICIPATE:
  //       return <ParticipateButton info={info} />;
  //       break;
  //     default:
  //       return;
  //   }
  // }
}

export default PlanButton;
