import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import routes from "../../routes";

function Person({ isHere, profileImgSrc, generation, name, isSelf }) {
  const navigate = useNavigate();

  const handleLogOut = () => {};

  return (
    <Section isHere={isHere}>
      <InfoSection>
        <ProfileImg>
          {!profileImgSrc ? (
            <div className="no-image" />
          ) : (
            <img
              className="profile-image"
              src={profileImgSrc}
              alt="profile image"
            />
          )}
        </ProfileImg>
        <TextBox>
          <div className="generation">{generation}기</div>
          <div className="name">{name}</div>
        </TextBox>
      </InfoSection>
      {!isSelf ? undefined : (
        <ButtonSection>
          <Button>
            <IoMdSettings
              className="icon"
              onClick={() => {
                navigate(routes.setting);
              }}
            />
            <div className="text">설정</div>
          </Button>
          <Button>
            <FiLogOut className="icon" onClick={handleLogOut} />
            <div className="text">로그아웃</div>
          </Button>
        </ButtonSection>
      )}
    </Section>
  );
}

const Section = styled.div`
  width: 100%;
  height: 70px;

  padding: 15px 20px;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) =>
    !props.isHere ? "#FFF3DB" : props.theme.white};
  border-radius: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 42px;
  height: 42px;
  object-fit: cover;

  .no-image {
    width: 100%;
    height: 100%;
    border-radius: 1000px;
    background-color: #898989;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    border-radius: 1000px;
    object-fit: cover;
  }
`;

const TextBox = styled.div`
  padding-left: 10px;

  .generation {
    color: ${(props) => props.theme.additiveColor};
    font-size: ${(props) => props.theme.captionFontSize};
  }

  .name {
    padding-top: 1px;
    color: ${(props) => props.theme.bodyColor};
    font-size: 15px;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.additiveColor};

  &:last-child {
    margin-left: 20px;
  }

  .icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  .text {
    padding-top: 4px;
    font-size: ${(props) => props.theme.captionFontSize};
  }
`;

export default Person;
