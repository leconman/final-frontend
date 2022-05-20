import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditInstructorView from '../views/EditInstructorView';
import { editInstructorThunk, 
  editCourseThunk, 
  addCourseThunk,
  deleteCourseThunk, 
  fetchAllCoursesThunk } from '../../store/thunks';


class EditInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          redirect: false, 
          id: this.props.match.params.id
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();
        let instructor = {
          firstname: this.state.firstname,
          lasntame: this.state.lastname,
          department: this.state.department,
          imageUrl: this.state.imageUrl, 
          id: this.state.id
        }

        
        await this.props.editInstructor(instructor);

        this.setState({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          department: this.state.department,
          imageUrl: this.state.imageUrl, 
          //courses:  this.state.courses,
          redirect: true, 
          id: this.state.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false});
    }

    render() {
      //go to single instructor view of newly created course
        if(this.state.redirect) {
          return (<Redirect to={`/instructor/${this.state.id}`}/>)
        }
        //console.log(this.state.firstname);
        return (
          <EditInstructorView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        editInstructor: (instructor) => dispatch(editInstructorThunk(instructor)),
        addCourse: (course) => dispatch(addCourseThunk(course)),
        editCourse: (course) => dispatch(editCourseThunk(course)),
        deleteCourse: (courseId) => dispatch(deleteCourseThunk(courseId)),
        fetchAllCourses: () => dispatch(fetchAllCoursesThunk())

    })
}

export default connect(null, mapDispatch)(EditInstructorContainer);