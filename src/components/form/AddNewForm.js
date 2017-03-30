import React, {PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form';

import TextInput from './TextInput.js';
import RadioInput from './RadioInput.js';
import NumberInput from './NumberInput.js';
import '../../styles/form.css';

class AddNewForm extends PureComponent {
  static propTypes = {
    handleFormSubmit: React.PropTypes.func.isRequired
  }

  renderField({input, label, type, meta}) {
    switch (type) {
      case 'text':
      case 'tel':
        return (
          <TextInput
            touched={meta.touched}
            error={meta.error}
            name={name}
            label={label}
            input={input}
            type={type}
          />
        )
      case 'radio':
        return (
          <RadioInput
            input={input}
            type={type}
            value={input.value}
            label={label}
          />
        )
      case 'number':
        return (
          <NumberInput
            name={name}
            label={label}
            input={input}
            type={type}
            touched={meta.touched}
            error={meta.error}
          />
        )
      default:
        break;
    }
  }


  render() {
    const {handleSubmit, error, submitFailed} = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.handleFormSubmit)}>
        <Field name="firstName" type="text" component={this.renderField} label="First name"/>
        <Field name="lastName" type="text" component={this.renderField} label="Last name"/>
        <Field name="phone" type="tel" component={this.renderField} label="Phone"/>
        <div className="form-group">
          <label>Gender</label>
          <Field name="gender" type="radio" component={this.renderField} value="male" label="Male"/>
          <Field name="gender" type="radio" component={this.renderField} value="female" label="Female"/>
          {submitFailed && error && <span className="form-error">{error}</span>}
        </div>
        <div className="form-age">
          <Field name="age" type="number" component={this.renderField} label="Age"/>
        </div>
        <div>
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    )
  }
}

const validate = values => {
  let errors = {};

  if (!/^[a-zA-Zа-яА-Я-`]+$/.test(values.firstName)) {
    errors.firstName = 'Provide a correct first name'
  }
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!/^[a-zA-Zа-яА-Я-`]+$/.test(values.lastName)) {
    errors.lastName = 'Provide a correct last name'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!/^[0-9+-]+$/.test(values.phone)) {
    errors.phone = 'Provide a correct phone number'
  }
  if (!values.phone) {
    errors.phone = 'Required'
  }
  if (!values.gender) {
    errors._error = 'Select Gender'
  }
  if (values.age < 1 || values.age > 200) {
    errors.age = 'Provide correct age'
  }
  if (!values.age) {
    errors.age = 'Provide your age'
  }
  return errors;
}

export default reduxForm({
  form: 'addNewForm',
  validate
})(AddNewForm)
