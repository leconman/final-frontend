import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCourseView from '../views/EditCourseView';
import { editCourseThunk} from '../../store/thunks';

class EditCourseContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: this.props.title, 
          timeslot: this.props.timeslot,
          //location: this.props.location, 
          instructorId: this.props.instructorId, 
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

        let course = {
            title: this.state.title,
            timeslot: this.state.timeslot,
            location: this.state.location,
            instructorId: this.state.instructorId,
            id: this.state.id
        };
        
        await this.props.editCourse(course);

        
        this.setState({
          title: this.state.title,
          timeslot: this.state.timeslot,
          location: this.state.location,
          instructorId: null, 
          redirect: true, 
          id: this.state.id
        });
        
    }

    componentWillUnmount() {
        this.setState({redirect: false, id: null});
    }

    render() {

      //go to single course view of newly created course
        if(this.state.redirect) {
          return (<Redirect to={`/course/${this.state.id}`}/>)
        }
        return (
          <EditCourseView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
    
    
   
}

    
const mapDispatch = (dispatch) => {
    return({
        editCourse: (course) => dispatch(editCourseThunk(course)),
    })
}

export default connect(null, mapDispatch)(EditCourseContainer);