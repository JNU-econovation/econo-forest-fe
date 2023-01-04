import styled from "styled-components";

function PlanEditor() {
  return (
    <Section>
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
          <div id="date">2022.12.17</div>
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
    </Section>
  );
}

const Section = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 16px;
`;

const EditRows = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.bodyColor};

  .title {
    margin-right: 10px;
  }

  .input-textarea {
    width: 200px;
    height: 35px;

    resize: none;
    border: 1px solid #aaa;
    border-radius: 3px;
  }

  .input {
    width: 120px;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    border: 1px solid #aaa;
    border-radius: 3px;
  }
`;

export default PlanEditor;
