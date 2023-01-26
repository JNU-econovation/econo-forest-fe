import styled, { css } from "styled-components";

function CustomTimePicker({ active, setDate, sx }) {
  const HOURS = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  const MINUTES = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  const onHourClick = (e) => {
    if (e.target.textContent !== "") {
      setDate(
        (date) =>
          new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            e.target.textContent,
            date.getMinutes()
          )
      );
    }
  };

  const onMinuteClick = (e) => {
    if (e.target.textContent !== "") {
      setDate(
        (date) =>
          new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            e.target.textContent
          )
      );
    }
  };

  return (
    <Section style={sx}>
      <ButtonsBox active={active}>
        <ScrollSection>
          {["", ...HOURS, ""].map((hour) => (
            <Button key={hour.toString() + "hour"} onClick={onHourClick}>
              {hour.toString().length === 1 ? `0${hour}` : hour}
            </Button>
          ))}
        </ScrollSection>
        <ScrollSection>
          {["", ...MINUTES, ""].map((minute) => (
            <Button key={minute.toString() + "minute"} onClick={onMinuteClick}>
              {minute.toString().length === 1 ? `0${minute}` : minute}
            </Button>
          ))}
        </ScrollSection>
      </ButtonsBox>
    </Section>
  );
}

const Section = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  z-index: 1;
`;

const ButtonsBox = styled.div`
  width: 100px;
  height: 102px;

  padding: 0;

  display: flex;
  justify-content: space-around;

  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
  border: 1px solid #aaa;

  ${(props) =>
    props.active &&
    css`
      animation: ${props.theme.opacityAnimationKeyframe} 0.3s ease-in-out;
    `}
`;

const ScrollSection = styled.div`
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Button = styled.div`
  width: 30px;
  height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  color: black;

  border-top: 1px solid #aaaaaa;
  cursor: pointer;

  &:first-child {
    border-top: none;
    cursor: inherit;
  }
  &:last-child {
    cursor: inherit;
  }
`;

export default CustomTimePicker;
