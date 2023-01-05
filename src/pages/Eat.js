import styled from "styled-components";

import Plan from "../components/eat/Plan";
import Layout from "../components/layout/Layout";
import plusIcon from "../images/Icon feather-plus-circle@2x.webp";
import LTree from "../images/L_tree@2x.webp";
import RTree from "../images/R_tree@2x.webp";
import { useEffect, useState } from "react";

function Eat() {
  const [eatPlanArray, setEatPlanArray] = useState([]);

  // const info = {
  //   id: "1",
  //   title: "하이하이 밥 먹을 사람",
  //   date: "",
  //   location: "후문",
  //   numParticipant: "0",
  //   participants: {},
  //   authorName: "김수민",
  //   authorId: "2",
  //   isAuthor: true,
  //   isApplied: true,
  // };

  useEffect(() => {
    setEatPlanArray([
      {
        id: "1",
        title: "하이하이 밥 먹을 사람",
        date: "",
        location: "후문",
        numParticipant: "1",
        participants: ["김수민"],
        authorName: "김수민",
        authorId: "2",
        isAuthor: false,
        isApplied: true,
      },
      {
        id: "2",
        title: "하이하이 쭈꾸미 먹을 사람",
        date: "",
        location: "상대",
        numParticipant: "2",
        participants: ["김수민", "경주원"],
        authorName: "경주원",
        authorId: "2",
        isAuthor: false,
        isApplied: false,
      },
      {
        id: "3",
        title: "하이하이 회 먹을 사람",
        date: "",
        location: "공대",
        numParticipant: "3",
        participants: ["김수민", "경주원", "김종준"],
        authorName: "김종준",
        authorId: "2",
        isAuthor: true,
        isApplied: true,
      },
      {
        id: "4",
        title: "하이하이 샌드위치 먹을 사람",
        date: "",
        location: "정문",
        numParticipant: "4",
        participants: ["김수민", "경주원", "김종준", "김정은"],
        authorName: "김현지",
        authorId: "2",
        isAuthor: true,
        isApplied: true,
      },
    ]);
  }, []);

  return (
    <Layout>
      <EatLayout>
        <Section>
          <TitleBox>
            <div className="title">밥먹어요</div>
            <img className="plus-icon" src={plusIcon} alt="plus-icon" />
          </TitleBox>

          {eatPlanArray.map((planInfo) => (
            <Plan planInfo={planInfo} key={planInfo.id} />
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

const TitleBox = styled.div`
  width: 100%;
  padding-bottom: 25px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  color: ${(props) => props.theme.brightColor};
  font-family: ${(props) => props.theme.logoFont};
  font-size: ${(props) => props.theme.titleFontSize};

  .title {
    padding-right: 9px;
  }

  .plus-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`;

export default Eat;
