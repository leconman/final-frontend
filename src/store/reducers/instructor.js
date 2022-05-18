import { FETCH_INSTRUCTOR, EDIT_INSTRUCTOR } from "../actions/actionTypes";

const initialState = {
  courses: [],
};

const instructor = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INSTRUCTOR:
      return action.payload;
    case EDIT_INSTRUCTOR:
      return state.map(instructor => { 
        return (
          instructor.id===action.payload.id ? action.payload : instructor
        );
      });
    default:
      return state;
  }
};

export default instructor;