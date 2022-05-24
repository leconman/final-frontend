import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllInstructorsView = (props) => {
  let {allInstructors, deleteInstructor} = props;
  if (!allInstructors.length) {
    return (
    <div><p>There are no instructors.</p>
    <Link to={`/newinstructor`}>
        <button>Add New Instructor</button>
    </Link>

    </div>);
  }

  return (
    <div>
      {allInstructors.map((instructor) => {
        let name = instructor.firstname + " " + instructor.lastname;
        return (
          <div key={instructor.id}>
          <Link to={`/instructor/${instructor.id}`}>
            <h1>{name}</h1>
          </Link>
          {instructor.imageUrl ? 
      <img src={instructor.imageUrl}alt="instructor" width="75" height="75"/>:""}
          <p>{instructor.department}</p>

          <button onClick={() => deleteInstructor(instructor.id)}>Delete</button>
        </div>
        );

      })}
      <Link to={`/newinstructor`}>
        <button>Add New Instructor</button>
      </Link>
    </div>
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;