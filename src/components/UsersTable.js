import React, {PureComponent} from 'react';
import {Table, Tr, Td, Thead, Th} from 'reactable';

import '../styles/table.css';

class UsersTable extends PureComponent {
  static propTypes = {
    filterBy: React.PropTypes.string,
    users: React.PropTypes.array,
    handleRemoveItem: React.PropTypes.func
  }

  renderRow(user, i) {
    const {age, firstName, gender, lastName, phone} = user;
    return (
      <Tr key>
        <Td column="firstName" data={firstName}/>
        <Td column="lastName" data={lastName}/>
        <Td column="phone" data={phone}/>
        <Td column="gender" data={gender}/>
        <Td column="age" data={age}/>
        <Td column="delete">
          <button
            type="button"
            className="table-button"
            onClick={() => this.props.handleRemoveItem(i)}
          >
            Delete
          </button>
        </Td>
      </Tr>
    )
  }

  render() {
    const {filterBy, users} = this.props;

    const renderedUsers = users.map((user, i) => {
      return this.renderRow(user, i);
    });

    return (
      <Table
        filterBy={filterBy}
        filterable={['firstName', 'lastName', 'phone', 'gender', 'age']}
        sortable={['firstName', 'lastName', 'phone', 'gender', 'age']}
        className="table"
        hideFilterInput>
        <Thead>
        <Th column="firstName">First Name</Th>
        <Th column="lastName">Last Name</Th>
        <Th column="phone">Phone</Th>
        <Th column="gender">Gender</Th>
        <Th column="age">Age</Th>
        <Th column="delete" className="table-delete"></Th>
        </Thead>
        {renderedUsers}
      </Table>
    )
  }
}
export default UsersTable;
