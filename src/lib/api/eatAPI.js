import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_ETC_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
  },
});

const getEatInfos = async () => {
  const response = await client.get("/api/eatBoards", {
    params: {
      page: 0,
      size: 4,
    },
  });

  return response.data.data;
};

const createEatInfo = async (info) => {
  const response = await client.post("/api/eatBoards", {
    eatReqDto: info,
  });
  console.log(response);
};

const updateEatInfo = async (id, info) => {
  const response = await client.put(`/api/eatBoards/${id}`, {
    eatReqDto: info,
  });

  console.log(response);
};

const deleteEatInfo = async (id) => {
  const response = await client.delete(`/api/eatBoards/${id}`);

  console.log(response);
};

export default { getEatInfos, createEatInfo, updateEatInfo, deleteEatInfo };
