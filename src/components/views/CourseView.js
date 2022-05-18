import { Link } from "react-router-dom";

const CourseView = (props) => {
  const { course } = props;
  return (
    <div>
      <h1>{course.title}</h1>
      <h3>{course.instructor.firstname + " " + course.instructor.lastname}</h3>
      <Link to={`/editcourse/${course.id}`}>
        <button>Edit Course</button>
      </Link>
    </div>
    );

};

export default CourseView;