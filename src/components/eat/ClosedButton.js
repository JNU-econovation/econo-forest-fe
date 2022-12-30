import styled from "styled-components";
import InfoButtonStyle from "../../styles/eat/InfoButtonStyle";

function ClosedButton() {
  return <Button>마감</Button>;
}

const Button = styled(InfoButtonStyle)`
  background-color: ${(props) => props.theme.grey};
`;

export default ClosedButton;
