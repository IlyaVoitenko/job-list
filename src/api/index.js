import axios from "axios";
import { getDataListJob } from "../store/createActions";

const url =
  "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

export function getData() {
  return (dispatch) => {
    return axios.get(url).then(({ data }) => {
      dispatch(getDataListJob(data));
    });
  };
}
