import { setJobList } from "../createTypes";

const initialState = {
  listJob: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case setJobList:
      return { ...state, listJob: action.payload };
    default:
      return state;
  }
};
export default reducer;
