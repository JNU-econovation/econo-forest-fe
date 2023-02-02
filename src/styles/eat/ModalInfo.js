import styled from "styled-components";

const ModalInfo = styled.div`
  display: flex;
  margin-bottom: 12px;
  font-size: 16px;

  .title {
    color: ${(props) => props.theme.highlightColor};
    margin-right: 10px;
  }

  .text {
    color: ${(props) => props.theme.additiveColor};
  }
`;

export default ModalInfo;
