import React, {PureComponent} from 'react';

class NumberInput extends PureComponent {
  static propTypes = {
    input: React.PropTypes.object.isRequired,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    touched: React.PropTypes.bool.isRequired,
    error: React.PropTypes.string
  }

  render() {
    const {name, label, input, type, touched, error} = this.props;
    return (
      <div className="form-group">
        <label htmlFor={`form-${name}`}>{label}</label>
        <input {...input} id={`form-${name}`} min="1" max="200" type={type} className="form-control"/>
        {touched && error && <span className="form-error">{error}</span>}
      </div>
    )
  }
}

export default NumberInput;
