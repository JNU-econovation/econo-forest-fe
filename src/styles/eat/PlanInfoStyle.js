import styled from "styled-components";

const Section = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 1fr 1fr 1fr 1fr 1fr;

  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.additiveColor};
  border-radius: 0 0 10px 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  div:nth-last-child(1) {
    border: none;
  }
`;

export default Section;
