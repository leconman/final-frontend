import { FETCH_COURSE, EDIT_COURSE } from "../actions/actionTypes";

const initialState = {
  instructor: {},
};

// REDUCER;
const course = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE:
      return action.payload;
    case EDIT_COURSE:
      return state.map(course => { 
        return (
          course.id===action.payload.id ? action.payload : course
        );
      });
    default:
      return state;
  }
};

export default course;