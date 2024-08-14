import Cookies from "universal-cookie";

const cookie = new Cookies();
const token = cookie.get("token");
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export default config;
