import React, {PropTypes, Component} from "react";
import {connect} from "react-redux";
import {Router, Route, withRouter} from "react-router";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import CourseForm  from "./CourseForm";
import {getById, authorsFormattedForDropdown} from "../../selectors/selectors";
import toastr from "toastr";
import {minimumLength, durationPattern} from "../common/Validation";
import {emptyCourse} from "../../constants/emptyEntities";

export const titleErrorMsg = "Course should have a title.";
export const authorErrorMsg = "Course should have an author.";
export const categoryErrorMsg = "Course should have a category.";
export const lengthErrorMsg = "Course should have a valid length with pattern HH:MM:SS";

export class ManageCoursePage extends Component {
  constructor(props, context){
    super (props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false,
      isSaved : true
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
    this.routerWillLeave = this.routerWillLeave.bind(this);
  }

  componentDidMount() {
    if(this.props.router){
       this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
     }
   }

  componentWillReceiveProps(nextProps) {
    if(this.props.course.id != nextProps.course.id ) {
      // Necessary to populate from when existing course if loaded directly.
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  routerWillLeave(nextLocation) {
      // return false to prevent a transition w/o prompting the user,
      // or return a string to allow the user to decide:
      if (!this.state.isSaved){
        return "Your work is not saved! Are you sure you want to leave?";
      }
    }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;

    const courseHasAllEmptyInputFields =
    course.title.length == 0 &&
    course.authorId.length == 0 &&
    course.length.length == 0 &&
    course.category.length == 0;

    return this.setState({course: course, isSaved : courseHasAllEmptyInputFields});
  }

  validateTitle(errorReport) {
    if(this.state.course.title.length < minimumLength) {
      errorReport.errors.title = titleErrorMsg;
      errorReport.formIsValid = false;
    }
  }

  validateAuthor(errorReport) {
    if(this.state.course.authorId < minimumLength) {
      errorReport.errors.authorId = authorErrorMsg;
      errorReport.formIsValid = false;
    }
  }

  validateCategory(errorReport) {
    if(this.state.course.category.length < minimumLength) {
      errorReport.errors.category = categoryErrorMsg;
      errorReport.formIsValid = false;
    }
  }

  validateLength(errorReport) {
    if(!durationPattern.test(this.state.course.length)) {
      errorReport.errors.length = lengthErrorMsg;
      errorReport.formIsValid = false;
    }
  }

  courseFormIsValid () {
    const errorReport = {
      formIsValid: true,
      errors: {}
    };

    this.validateTitle(errorReport);
    this.validateAuthor(errorReport);
    this.validateCategory(errorReport);
    this.validateLength(errorReport);

    this.setState({errors: errorReport.errors});
    return errorReport.formIsValid;
  }

  saveCourse(event) {
    event.preventDefault();

    if(!this.courseFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveCourse(this.state.course)
      .then(() => {
        this.setState({isSaved: true});
        this.redirect();})
      .catch(error => {
        console.log(error);
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect () {
    this.setState({saving: false});
    toastr.success("Course saved");
    if(this.context.router) {
      this.context.router.push("/courses");
    }
  }

  render () {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  route: PropTypes.object,
  router: PropTypes.object
};

//Pull in the React Router context so router is avaliable on this.context.router
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const courseId = ownProps.params.id; // from the path `/course/:id`

  let course = emptyCourse;

  if (courseId && state.courses.length > 0) {
    course = getById(state.courses, courseId);
  }

  return {
    course: course,
    authors: authorsFormattedForDropdown(state.authors)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage));
