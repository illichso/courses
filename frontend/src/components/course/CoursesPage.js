import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import {shouldShowList, sortCoursesByTitle} from '../../selectors/selectors';
import toastr from 'toastr';

class CoursePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      deleting: false
    };

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
  }

  courseRow (course, index) {
    <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    this.context.router.push('/course');
//    browserHistory.push('./course');
  }

  deleteCourse(event, course) {
    event.preventDefault();

    this.setState({course: course});
    this.setState({deleting: true});

    this.props.actions.deleteCourse(course)
      .then(() => this.notifySuccessfulCourseDeletion(course))
      .catch(error => {
        console.log(error);
        toastr.error(error);
        this.resetDeleteingValueInState();
      });

  }

  notifySuccessfulCourseDeletion (course) {
    this.resetDeleteingValueInState();
    toastr.success(course.title+ ' is deleted');
  }

  resetDeleteingValueInState() {
    this.setState({deleting: false});
  }

  render () {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input  type="submit"
                value="Add Course"
                className="btn btn-primary"
                onClick={this.redirectToAddCoursePage}/>
                {shouldShowList(courses)
                  ? <CourseList
                      courses={courses}
                      onDelete={this.deleteCourse}
                      deleting={this.state.deleting}/>
                  : null
                }
      </div>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  course: PropTypes.object
};

CoursePage.contextTypes = {
  router: PropTypes.object
};

const  mapStateToProps = (state, ownProps) => {
  return {
    courses: sortCoursesByTitle(state)
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
