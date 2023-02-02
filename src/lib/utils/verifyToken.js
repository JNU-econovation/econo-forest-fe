import AuthAPI from "../api/AuthAPI";

const verifyToken = async (req) => {
  if (
    !localStorage.getItem("accessToken") ||
    !localStorage.getItem("refreshToken") ||
    !localStorage.getItem("expiredTime")
  ) {
    window.location.href("https://naver.com");
    return;
  }

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const time = localStorage.getItem("expiredTime");

  //토큰 만료 시간 1분 전
  const expiredTime = new Date(new Date(time) - 60000);

  if (expiredTime < new Date()) {
    const newAccessToken = await AuthAPI.reIssueTokenAPI(refreshToken);
    console.log(newAccessToken);
    localStorage.setItem("accessToken", newAccessToken);
    req.headers.Authorization = `Bearer ${newAccessToken}`;
  }
  return req;
};

export default verifyToken;
