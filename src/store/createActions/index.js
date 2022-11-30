import { setJobList } from "../createTypes";

export function getDataListJob(payload) {
  return { type: setJobList, payload };
}
