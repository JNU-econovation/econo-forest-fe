import axios from "axios";
import verifyToken from "../utils/verifyToken";

const client = axios.create({
  baseURL: process.env.REACT_APP_CLUB_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
  },
});

// client.interceptors.request.use(verifyToken);

const checkIsInClub = async (ip) => {
  const response = await client.post("api/clubs/entrance", {
    params: { ip: ip, Authorization: localStorage.getItem("accessToken") },
  });

  // console.log(response);
  return response.data.in;
};

const getClubMembers = async () => {
  const response = await client.get("api/clubs/members");

  // console.log(response);
  return response;
};

export default {
  checkIsInClub,
  getClubMembers,
};
