import eatAPI from "../api/eatAPI";

const getEatInfos = async (eatPage, setEatPlanArray) => {
  const data = await eatAPI.getEatInfos(eatPage);
  setEatPlanArray(() => [...data]);
};

export default getEatInfos;
