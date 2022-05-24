import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditInstructorView from '../views/EditInstructorView';
import { editInstructorThunk } from '../../store/thunks';


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
          lastname: this.state.lastname,
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

    })
}

export default connect(null, mapDispatch)(EditInstructorContainer);