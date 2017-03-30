import React, {Component} from 'react';

import '../styles/layout.css';

class Layout extends Component {
  static propTypes = {
    leftSide: React.PropTypes.element.isRequired,
    rightSide: React.PropTypes.element.isRequired
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="row layout">
        <div className="col-md-6">{this.props.leftSide}</div>
        <div className="col-md-6">{this.props.rightSide}</div>
      </div>
    )
  }
}

export default Layout;
