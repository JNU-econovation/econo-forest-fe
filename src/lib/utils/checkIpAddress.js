import axios from "axios";

async function checkIpAddress() {
  const response = await axios.get("https://geolocation-db.com/json/");
  return response.data.IPv4;
}

export default checkIpAddress;
