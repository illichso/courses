import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {Router, Route, withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorForm  from './AuthorForm';
import toastr from 'toastr';
import {getById, getFullAuthorName} from '../../selectors/selectors';
import {minimumLength} from '../common/Validation';

export const firstNameErrorMsg = 'Author should have a first name.';
export const lastNameErrorMsg = 'Author should have a last name.';
export const emptyAuthor = {id: '', firstName: '', lastName: ''};

export class ManageAuthorPage extends Component {
  constructor(props, context){
    super (props, context);

    this.state = {
      author: Object.assign({}, this.props.author),
      errors: {},
      saving: false,
      isSaved : true
    };

    this.updateAuthorState = this.updateAuthorState.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
    this.routerWillLeave = this.routerWillLeave.bind(this);
  }

  componentDidMount() {
    if(this.props.router) {
      this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
    }
   }

  componentWillReceiveProps(nextProps) {
    if(this.props.author.id != nextProps.author.id ) {
      // Necessary to populate from when existing author if loaded directly.
      this.setState({author: Object.assign({}, nextProps.author)});
    }
  }

  routerWillLeave(nextLocation) {
      // return false to prevent a transition w/o prompting the user,
      // or return a string to allow the user to decide:
      if (!this.state.isSaved){
        return 'Your work is not saved! Are you sure you want to leave?';
      }
    }

  updateAuthorState(event) {
    const field = event.target.name;
    let author = this.state.author;
    author[field] = event.target.value;

    const authorHasAllEmptyInputFields =
    author.firstName.length == 0 &&
    author.lastName.length == 0;

    return this.setState({author: author, isSaved : authorHasAllEmptyInputFields});
  }

  validateFirstName(errors, formIsValid) {
    if(this.state.author.firstName.length < minimumLength) {
      errors.firstName = firstNameErrorMsg;
      formIsValid = false;
    }
  }

  validateLastName(errors, formIsValid) {
    if(this.state.author.lastName.length < minimumLength) {
      errors.lastName = lastNameErrorMsg;
      formIsValid = false;
    }
  }

  authorFormIsValid() {
    let formIsValid = true;
    let errors = {};

    this.validateFirstName(errors, formIsValid);
    this.validateLastName(errors, formIsValid);

    this.setState({errors: errors});
    return formIsValid;
  }

  saveAuthor(event) {
    event.preventDefault();

    if(!this.authorFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    const author = this.state.author;

    this.props.actions.saveAuthor(author)
      .then(() => {
        this.setState({isSaved: true});
        this.redirect(author);})
      .catch(error => {
        console.log(error);
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect (author) {
    this.setState({saving: false});
    toastr.success(getFullAuthorName(author) + ' is saved');
    if(this.context.router) {
      this.context.router.push('/authors');
    }
  }

  render () {
    return (
      <AuthorForm
        onChange={this.updateAuthorState}
        onSave={this.saveAuthor}
        author={this.state.author}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageAuthorPage.propTypes = {
  author: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  route: PropTypes.object,
  router: PropTypes.object
};

//Pull in the React Router context so router is avaliable on this.context.router
ManageAuthorPage.contextTypes = {
  router: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const authorId = ownProps.params.id; // from the path `/author/:id`

  let author = emptyAuthor;

  if (authorId && state.authors.length > 0) {
    author = getById(state.authors, authorId);
  }

  return {
    author: author
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage));
