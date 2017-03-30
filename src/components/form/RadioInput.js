import React, {PureComponent} from 'react';

class RadioInput extends PureComponent {
  static propTypes = {
    input: React.PropTypes.object.isRequired,
    type: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
  }

  render() {
    const {input, type, value, label} = this.props;
    return (
      <div className="radio">
        <label>
          <input {...input} type={type} value={value}/>
          {label}
        </label>
      </div>
    )
  }
}

export default RadioInput;
