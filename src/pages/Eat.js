import styled from "styled-components";

import Plan from "../components/eat/Plan";
import Layout from "../components/layout/Layout";
import LTree from "../images/L_tree@2x.webp";
import RTree from "../images/R_tree@2x.webp";
import { useEffect } from "react";
import Title from "../components/eat/Title";
import { useRecoilState } from "recoil";
import eatPlanArrayState from "../recoil/eat/eatPlanArrayState";
import eatPageState from "../recoil/eat/eatPageState";
import getEatInfos from "../lib/utils/getEatInfos";

import Pagination from "react-js-pagination";

function Eat() {
  const [eatPlanArray, setEatPlanArray] = useRecoilState(eatPlanArrayState);
  const [eatPage, setEatPage] = useRecoilState(eatPageState);

  const onPaginationChange = async (page) => {
    setEatPage(page - 1);
  };

  useEffect(() => {
    getEatInfos(eatPage, setEatPlanArray);
  }, [eatPage]);

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
          <Pagination
            activeClass={"active"}
            itemClassNext={"next"}
            itemClassPrev={"prev"}
            itemsCountPerPage={4}
            totalItemsCount={10}
            pageRangeDisplayed={5}
            onChange={onPaginationChange}
            prevPageText="‹"
            nextPageText="›"
            hideFirstLastPages
          />
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

  .pagination {
    position: absolute;
    bottom: 5%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pagination li {
    margin: 0 5px;
    width: 24px;
    height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.additiveColor};
    font-size: 12px;

    background-color: ${(props) => props.theme.white};
    border: solid 1px ${(props) => props.theme.additiveColor};
    border-radius: 3px;

    cursor: pointer;
  }

  .pagination li.active {
    color: ${(props) => props.theme.white};

    background-color: ${(props) => props.theme.orange};
    border: solid 1px ${(props) => props.theme.white};
  }

  .pagination li.prev,
  .pagination li.next {
    font-size: 24px;
    color: ${(props) => props.theme.white};
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }

  .pagination li.disabled {
    cursor: default;
  }
`;

const Section = styled.div`
  width: 100%;
  height: 100%;

  padding: 50px 7%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
`;

export default Eat;
