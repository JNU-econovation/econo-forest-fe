import styled from "styled-components";
import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

import CustomDatePicker from "../common/CustomDatePicker";
import ModalLayout from "./ModalLayout";
import CustomTimePicker from "../common/CustomTimePicker";
import LocationPicker from "./LocationPicker";
import {
  DateObjectToEpochSecond,
  EpochSecondToDateObject,
} from "../../lib/utils/EpochConverter";
import EAT_LOCATIONS from "../../constant/EAT_LOCATIONS";
import eatAPI from "../../lib/api/eatAPI";

function EditModal({ modalType, title, preModifyInfo, open, setOpen }) {
  const initialSubmitInfo = {
    eatDateTime: DateObjectToEpochSecond(new Date()),
    locationCategory: EAT_LOCATIONS.ARRAY[0],
    title: "",
  };

  const [submitInfo, setSubmitInfo] = useState(initialSubmitInfo);

  const [date, setDate] = useState(new Date());
  const [pickerDate, setPickerDate] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const [isLocationPickerOpen, setIsLocationPickerOpen] = useState(false);

  const onSubmitButton = async () => {
    console.log(submitInfo);
    console.log(EpochSecondToDateObject(submitInfo.eatDateTime));

    if (new Date() > EpochSecondToDateObject(submitInfo.eatDateTime)) {
      return;
    }

    if (preModifyInfo) {
      // edit
    } else {
      // create

      await eatAPI.createEatInfo(submitInfo);
    }
  };

  useEffect(() => {
    setSubmitInfo({
      ...submitInfo,
      eatDateTime: DateObjectToEpochSecond(date),
    });
  }, [date]);

  useEffect(() => {
    setPickerDate(EpochSecondToDateObject(submitInfo?.eatDateTime));
  }, [submitInfo?.eatDateTime]);

  useEffect(() => {
    if (!preModifyInfo) {
      return;
    } else {
      console.log(preModifyInfo);
      setSubmitInfo({
        eatDateTime: preModifyInfo?.eatInfo,
        locationCategory: preModifyInfo?.location,
        title: preModifyInfo?.title,
      });

      setDate(EpochSecondToDateObject(preModifyInfo?.eatInfo));
    }
  }, [preModifyInfo]);

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
          <textarea
            value={submitInfo?.title}
            onChange={(e) => {
              setSubmitInfo({ ...submitInfo, title: e.target.value });
            }}
            className="input-textarea"
            id="title"
          />
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

        <EditRows id="time-row">
          <div className="title" id="time">
            시간
          </div>
          <HoverInput
            onMouseOver={() => {
              setIsTimePickerOpen(true);
            }}
            onMouseOut={() => {
              setIsTimePickerOpen(false);
            }}
          >
            <div className="input" id="time">
              {`${
                date.getHours().toString().length === 1
                  ? "0" + date.getHours()
                  : date.getHours()
              }:${
                date.getMinutes().toString().length === 1
                  ? "0" + date.getMinutes()
                  : date.getMinutes()
              }`}
            </div>
            {isTimePickerOpen ? (
              <CustomTimePicker
                active={isTimePickerOpen}
                setDate={setDate}
                sx={{ padding: "5px 0" }}
              />
            ) : undefined}
          </HoverInput>
        </EditRows>

        {new Date() > EpochSecondToDateObject(submitInfo.eatDateTime) ? (
          <TimeErrorMessage>
            현재 시간 이후의 약속만 생성할 수 있습니다
          </TimeErrorMessage>
        ) : undefined}

        <EditRows>
          <div className="title" id="location">
            장소
          </div>
          <HoverInput
            onMouseOver={() => {
              setIsLocationPickerOpen(true);
            }}
            onMouseOut={() => {
              setIsLocationPickerOpen(false);
            }}
          >
            <div className="input" id="location">
              {EAT_LOCATIONS.KOREAN[submitInfo.locationCategory]}
            </div>
            {isLocationPickerOpen ? (
              <LocationPicker
                active={isLocationPickerOpen}
                sx={{ padding: "5px 0" }}
                onClick={(e) => {
                  setSubmitInfo({
                    ...submitInfo,
                    locationCategory: e.target.id,
                  });
                }}
              />
            ) : undefined}
          </HoverInput>
        </EditRows>
        <Button onClick={onSubmitButton}>{modalType}</Button>
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
              console.log(pickerDate);
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
  margin-top: 15px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 15px;
  color: ${(props) => props.theme.bodyColor};

  &:first-child {
    margin-top: 0;
  }

  .title {
    margin-right: 10px;
  }

  .input-textarea {
    width: 250px;
    height: 35px;
    padding: 8px;

    resize: none;
    border: 1px solid #aaa;
    border-radius: 3px;

    font-size: 15px;

    &::-webkit-scrollbar {
      display: none;
    }
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

const TimeErrorMessage = styled.div`
  margin-top: 10px;
  color: ${(props) => props.theme.orange};
  font-size: 12px;
`;

const HoverInput = styled.div`
  height: 100%;
  position: relative;
`;

const Button = styled.div`
  width: 100px;
  height: 35px;
  margin: 20px auto 0 auto;

  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.orange};
  font-size: 16px;
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
