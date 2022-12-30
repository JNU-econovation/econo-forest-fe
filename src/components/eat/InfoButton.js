import AuthorButton from "./AuthorButton";
import ClosedButton from "./ClosedButton";
import ParticipateButton from "./ParticipateButton";
import CancelButton from "./CancelButton";

function InfoButton({ isClosed, info }) {
  if (isClosed !== false) {
    return <ClosedButton />;
  } else if (info.isAuthor !== false) {
    return <AuthorButton info={info} />;
  } else if (info.isApplied !== false) {
    return <CancelButton info={info} />;
  } else {
    return <ParticipateButton info={info} />;
  }
}

export default InfoButton;
