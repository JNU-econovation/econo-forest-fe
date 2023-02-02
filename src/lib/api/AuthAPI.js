import axios from "axios";

const reIssueTokenAPI = async ({ refreshToken }) => {
  const response = await axios.get(
    process.env.REACT_APP_IDP_API + "api/idp/accounts/re-issue",
    {
      params: { refreshToken: refreshToken },
    }
  );

  return response.data;
};

const reCheckTokenAPI = async ({ refreshToken }) => {
  const response = await axios.get(
    process.env.REACT_APP_IDP_API + "api/idp/accounts/re-check",
    {
      params: {
        refreshToken: refreshToken,
      },
    }
  );

  console.log(response);
};

const getUserInfoByToken = async () => {
  const response = await axios.request({
    method: "get",
    url: process.env.REACT_APP_IDP_API + "api/idp/users/token",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });

  // const response = await axios.get(
  //   process.env.REACT_APP_IDP_API + "api/idp/users/token",
  //   {
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("accessToken"),
  //     },
  //   }
  // );

  console.log(response);
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

const redirectToSSO = async () => {
  const params = { requestUrl: "https://naver.com" };
  await axios.post(
    process.env.REACT_APP_IDP_API + "api/idp/accounts/login",
    {},
    { params }
  );
};

export default {
  reIssueTokenAPI,
  reCheckTokenAPI,
  getUserInfoByToken,
  getUserEmailByToken,
  redirectToSSO,
};
