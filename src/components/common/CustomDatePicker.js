import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import styled from "styled-components";
// import "../../styles/common/CustomDatePicker.css";
import leftArrow from "../../images/LeftArrow.webp";
import rightArrow from "../../images/RightArrow.webp";

function CustomDatePicker({ date, setDate }) {
  return (
    <Section>
      <DatePicker
        selected={date}
        startDate={new Date()}
        locale={ko}
        minDate={new Date()}
        popperModifier={{ preventOverflow: { enabled: true } }}
        disabledKeyboardNavigation
        inline
        dateFormat="yyyy.MM.dd"
        nextMonthAriaLabel="dfd"
        onChange={(date) => setDate(date)}
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => {
          return (
            <div className="react-datepicker-year-header">
              <div onClick={decreaseMonth}>
                <img
                  className="arrow left-arrow"
                  src={leftArrow}
                  alt="left-arrow"
                />
              </div>
              <div className="year">
                {`${date.getFullYear()}.${date.getMonth() + 1}`}
              </div>
              <div onClick={increaseMonth}>
                <img
                  className="arrow right-arrow"
                  src={rightArrow}
                  alt="right-arrow"
                />
              </div>
            </div>
          );
        }}
      />
    </Section>
  );
}

const Section = styled.div`
  .react-datepicker {
    width: 100%;

    border-radius: 10px;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.bodyColor};
  }

  .react-datepicker-year-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 20px 0;
  }

  .react-datepicker-year-header .arrow {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .react-datepicker-year-header .year {
    font-size: 16px;
    font-weight: bold;
  }

  .react-datepicker__current-month {
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-weight: bold;
  }

  .react-datepicker__day-names {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__day-name {
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.highlightColor};
    font-size: 12px;
    font-weight: bold;
  }

  .react-datepicker__day--disabled {
    color: #ccc;
  }

  .react-datepicker__month {
    width: 100%;
  }

  .react-datepicker__week {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__day {
    width: 34px;
    height: 34px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 12px;
  }

  .react-datepicker__day--selected {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.orange};
    border-radius: 2px;
  }
`;

export default CustomDatePicker;
