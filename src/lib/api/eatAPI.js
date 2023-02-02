import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_ETC_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
  },
});

const getEatInfos = async (page) => {
  const response = await client.get("/api/eatBoards", {
    params: {
      page: page,
      size: 4,
    },
  });

  return response.data.data;
};

const createEatInfo = async (info) => {
  await client.post("/api/eatBoards", info);
};

const updateEatInfo = async (id, info) => {
  const response = await client.post(`/api/eatBoards/${id}`, {
    ...info,
  });

  console.log(response);
};

const deleteEatInfo = async (id) => {
  const response = await client.delete(`/api/eatBoards/${id}`);

  console.log(response);
};

const participateInfo = async (id, info) => {
  await client.post(`api/eatBoards/${id}/participate`, { ...info });
};

const nonParticipateInfo = async (id, info) => {
  await client.post(`/api/eatBoards/${id}/non-participate`, { ...info });
};

export default {
  getEatInfos,
  createEatInfo,
  updateEatInfo,
  deleteEatInfo,
  participateInfo,
  nonParticipateInfo,
};
