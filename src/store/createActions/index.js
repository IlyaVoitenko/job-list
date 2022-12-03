import { setJobList, setSelectedJob } from "../createTypes";

export function getDataListJob(payload) {
  return { type: setJobList, payload };
}
export function getSelectedJob(payload) {
  return { type: setSelectedJob, payload };
}
