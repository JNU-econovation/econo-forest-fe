import styled from "styled-components";

import Plan from "../components/eat/Plan";
import Layout from "../components/layout/Layout";
import LTree from "../images/L_tree@2x.webp";
import RTree from "../images/R_tree@2x.webp";
import { useEffect, useState } from "react";
import Title from "../components/eat/Title";
import eatAPI from "../lib/api/eatAPI";

function Eat() {
  const [eatPlanArray, setEatPlanArray] = useState([]);

  useEffect(() => {
    const getEatInfos = async () => {
      const data = await eatAPI.getEatInfos();
      setEatPlanArray(() => [...data]);
    };

    getEatInfos();
  }, []);

  return (
    <Layout>
      <EatLayout>
        <Section>
          <Title />

          {eatPlanArray.map((data) => (
            <Plan planInfo={data.eatPlan} key={data.eatPlan.eatBoardId} />
          ))}

          <img className="left-tree" src={LTree} alt="left-tree" />
          <img className="right-tree" src={RTree} alt="right-tree" />
        </Section>
      </EatLayout>
    </Layout>
  );
}

const EatLayout = styled.div`
  background-color: ${(props) => props.theme.green};

  position: relative;
  z-index: 0;

  .right-tree,
  .left-tree {
    width: 10%;
    bottom: 3%;
    position: absolute;
    object-fit: contain;
    z-index: -1;
  }

  .right-tree {
    right: 2.5%;
  }

  .left-tree {
    left: 2.5%;
  }
`;

const Section = styled.div`
  width: 100%;
  height: 100%;

  padding: 80px 7%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
`;

export default Eat;
