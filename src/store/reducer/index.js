import { setJobList, setSelectedJob } from "../createTypes";

const initialState = {
  listJob: [],
  selectedJob: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case setJobList:
      return { ...state, listJob: action.payload };
    case setSelectedJob:
      return { ...state, selectedJob: action.payload };
    default:
      return state;
  }
};
export default reducer;
