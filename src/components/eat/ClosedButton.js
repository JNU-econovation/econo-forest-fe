import styled from "styled-components";
import PlanButtonStyle from "../../styles/eat/PlanButtonStyle";

function ClosedButton() {
  return <Button>마감</Button>;
}

const Button = styled(PlanButtonStyle)`
  background-color: ${(props) => props.theme.grey};
`;

export default ClosedButton;
