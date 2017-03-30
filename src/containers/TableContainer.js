import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import UsersTable from '../components/UsersTable.js';
import {removeUser} from '../actions/users';

class TableContainer extends Component {
  constructor() {
    super();

    this.state = {
      filter: ''
    }

    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e) {
    this.setState({filter: e.target.value})
  }

  handleRemoveItem(id) {
    this.props.removeUser(id);
  }

  render() {
    return (
      <div>
        <h3>Submited users</h3>
        <input
          type="text"
          className="form-control"
          placeholder="Enter filter value (first name, last name, phone, gender or age)"
          onChange={this.handleFilterChange}
          value={this.state.filter}/>
        <UsersTable
          filterBy={this.state.filter}
          users={this.props.users}
          handleRemoveItem={this.handleRemoveItem}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return (
    bindActionCreators({removeUser}, dispatch)
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
