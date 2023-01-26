import axios from "axios";

const reIssueTokenAPI = async ({ refreshToken }) => {
  const response = await axios.get(
    process.env.REACT_APP_IDP_API + "api/accounts/re-issue",
    {
      params: { refreshToken: refreshToken },
    }
  );

  return response.data;
};

const reCheckTokenAPI = async ({ refreshToken }) => {
  const response = await axios.get(
    process.env.REACT_APP_IDP_API + "api/accounts/re-check",
    {
      params: {
        refreshToken: refreshToken,
      },
    }
  );

  console.log(response);
};

const getUserInfoByToken = async () => {
  const response = await axios.get(
    process.env.REACT_APP_IDP_API + "api/idp/users/token",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }
  );

  return response;
};

const getUserEmailByToken = async () => {
  const response = await axios.get(
    process.env.REACT_APP_IDP_API + "api/idp/users/find-email",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      params: {
        year: "20",
        userName: "이서현",
      },
    }
  );

  console.log(response);
};

export default {
  reIssueTokenAPI,
  reCheckTokenAPI,
  getUserInfoByToken,
  getUserEmailByToken,
};
