import * as at from "../actions/actionTypes";

// REDUCER;
const allCourses = (state=[], action) => {
  switch (action.type) {
    case at.FETCH_ALL_COURSES:
      return action.payload;
    case at.ADD_COURSE:
      return [...state, action.payload]
    case at.DELETE_COURSE:
      return state.filter(course => course.id!==action.payload);
    default:
      return state;
  }
};

export default allCourses;