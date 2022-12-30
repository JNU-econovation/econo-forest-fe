import styled from "styled-components";

const InfoButtonStyle = styled.div`
  margin-left: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${(props) => props.theme.black};
  border-radius: 10px;

  font-weight: bold;
  color: ${(props) => props.theme.highlightColor};
`;

export default InfoButtonStyle;
