import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reset} from 'redux-form';

import AddNewForm from '../components/form/AddNewForm.js';
import {addUser} from '../actions/users';

class FormContainer extends Component {
  handleFormSubmit(values) {
    this.props.addUser(values);
    this.props.dispatch(reset('addNewForm'))
  }

  render() {
    return (
      <div>
        <h3>Add new user</h3>
        <AddNewForm
          handleFormSubmit={this.handleFormSubmit.bind(this)}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({addUser}, dispatch), dispatch
  }
}

export default connect(null, mapDispatchToProps)(FormContainer);
