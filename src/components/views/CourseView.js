import { Link } from "react-router-dom";

const CourseView = (props) => {
  const { course } = props;
  return (
    <div>
      <h1>{course.title}</h1>
      {course.instructor ? 
      <Link to={`/instructor/${course.instructor.id}`}>
        <h3>{course.instructor.firstname + " " + course.instructor.lastname}</h3>
      </Link>: <h3>staff</h3>}
      <h4>{course.timeslot ? course.timeslot: ""}</h4>
      <h4>{course.location ? course.location: ""}</h4>
      <Link to={`/editcourse/${course.id}`}>
        <button>Edit Course</button>
      </Link>
    </div>
    );

};

export default CourseView;