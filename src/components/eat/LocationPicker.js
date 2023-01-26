import styled, { css } from "styled-components";
import EAT_LOCATIONS from "../../constant/EAT_LOCATIONS";

function LocationPicker({ sx, active, onClick }) {
  return (
    <Section style={sx}>
      <ButtonBox active={active}>
        {EAT_LOCATIONS.ARRAY.map((location) => (
          <Button id={location} onClick={onClick}>
            {EAT_LOCATIONS.KOREAN[location]}
          </Button>
        ))}
      </ButtonBox>
    </Section>
  );
}

const Section = styled.div`
  width: 100%;

  position: absolute;
  z-index: 1;
`;

const ButtonBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
  border: 1px solid #aaa;

  ${(props) =>
    props.active &&
    css`
      animation: ${props.theme.opacityAnimationKeyframe} 0.3s ease-in-out;
    `}
`;

const Button = styled.div`
  width: 100%;
  height: 35px;
  padding: 10px;
  cursor: pointer;
`;

export default LocationPicker;
