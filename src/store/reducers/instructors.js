import * as at from "../actions/actionTypes";

// REDUCER;
const allInstructors = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_INSTRUCTORS:
      return action.payload;
    case at.ADD_INSTRUCTOR:
      return [...state, action.payload]
    case at.DELETE_INSTRUCTOR:
      return state.filter(course => course.id!==action.payload);
    default:
      return state;
  }
};

export default allInstructors;