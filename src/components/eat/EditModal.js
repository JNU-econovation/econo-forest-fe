import styled from "styled-components";
import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

import CustomDatePicker from "../common/CustomDatePicker";
import ModalLayout from "./ModalLayout";

function EditModal({ modalType, title, open, setOpen }) {
  const [date, setDate] = useState(new Date());
  const [pickerDate, setPickerDate] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  useEffect(() => {
    setPickerDate(date);
  }, [date]);

  if (!isDatePickerOpen) {
    return (
      <ModalLayout
        modalType={modalType}
        title={title}
        open={open}
        setOpen={setOpen}
      >
        <EditRows>
          <div className="title" id="title">
            제목
          </div>
          <textarea className="input-textarea" id="title" />
        </EditRows>

        <EditRows>
          <div className="title" id="date">
            날짜
          </div>
          <div className="input" id="date-picker">
            <div id="date">
              {`${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`}
            </div>
            <div
              id="icon"
              onClick={() => {
                setIsDatePickerOpen(true);
              }}
            >
              <FaCalendarAlt />
            </div>
          </div>
        </EditRows>

        <EditRows>
          <div className="title" id="time">
            시간
          </div>
          <div className="input" id="time">
            16:00
          </div>
        </EditRows>

        <EditRows>
          <div className="title" id="location">
            장소
          </div>
          <div className="input" id="location">
            후문
          </div>
        </EditRows>
      </ModalLayout>
    );
  } else {
    return (
      <ModalLayout open={open} setOpen={setOpen}>
        <CustomDatePicker date={pickerDate} setDate={setPickerDate} />
        <ButtonSection>
          <div
            className="button button-cancel"
            onClick={() => {
              setIsDatePickerOpen(false);
            }}
          >
            취소
          </div>
          <div
            className="button button-apply"
            onClick={() => {
              setDate(pickerDate);
              setIsDatePickerOpen(false);
            }}
          >
            적용
          </div>
        </ButtonSection>
      </ModalLayout>
    );
  }
}

const EditRows = styled.div`
  margin-bottom: 15px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 15px;
  color: ${(props) => props.theme.bodyColor};

  .title {
    margin-right: 10px;
  }

  .input-textarea {
    width: 200px;
    height: 35px;
    padding: 8px 10px;

    resize: none;
    border: 1px solid #aaa;
    border-radius: 3px;

    font-size: 15px;
  }

  .input {
    width: 120px;
    height: 35px;

    padding: 8px 10px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    border: 1px solid #aaa;
    border-radius: 3px;
  }

  #date-picker {
    display: flex;
    justify-content: space-between;
    align-items: center;

    #icon {
      color: ${(props) => props.theme.additiveColor};
      font-size: 14px;
      cursor: pointer;
    }
  }
`;

const ButtonSection = styled.div`
  width: 100%;
  padding-top: 15px;

  display: flex;
  justify-content: right;
  color: darkred;

  .button {
    width: 65px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    cursor: pointer;
  }

  .button-cancel {
    margin-right: 8px;
    border: solid 1px #ccc;
    color: ${(props) => props.theme.bodyColor};
  }

  .button-apply {
    background-color: ${(props) => props.theme.orange};
    color: ${(props) => props.theme.brightColor};
  }
`;

export default EditModal;
