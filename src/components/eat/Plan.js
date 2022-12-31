import styled from "styled-components";
import { useEffect, useState } from "react";
import PlanButton from "./PlanButton";
import PlanInfoHeader from "./PlanInfoHeader";
import PlanInfoView from "./PlanInfoView";

function Plan({ info }) {
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const now = new Date();
    if (now - 1000 < info.date) {
      setIsClosed(false);
    }
  }, [info]);

  return (
    <Section>
      <InfoSection>
        <PlanInfoHeader isClosed={isClosed} />
        <PlanInfoView info={info} />
      </InfoSection>

      <PlanButton isClosed={isClosed} info={info} />
    </Section>
  );
}

const Section = styled.div`
  width: 100%;
  height: 120px;
  padding: 10px 0;

  display: grid;
  grid-template-columns: auto 15%;

  font-family: ${(props) => props.theme.mainFont};
`;

const InfoSection = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export default Plan;
