import React, {PureComponent} from 'react';

class TextInput extends PureComponent {
  static propTypes = {
    input: React.PropTypes.object.isRequired,
    type: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    touched: React.PropTypes.bool.isRequired,
    error: React.PropTypes.string
  }

  render() {
    const {touched, name, label, input, type, error} = this.props;

    return (
      <div className={touched && error ? "has-error form-group" : "form-group"}>
        <label htmlFor={`form-${name}`}>{label}</label>
        <input
          {...input}
          id={`form-${name}`}
          placeholder={label}
          type={type}
          className="form-control"/>
        {touched && error && <span className="form-error">{error}</span>}
      </div>
    )
  }
}

export default TextInput;
