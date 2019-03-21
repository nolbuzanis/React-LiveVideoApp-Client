import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderErrors = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
    return null;
  };

  renderInput = formProps => {
    const className = `field ${
      formProps.meta.touched && formProps.meta.error ? 'error' : ''
    }`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete='off' />
        {this.renderErrors(formProps.meta)}
      </div>
    );
  };

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        className='ui form error'
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  var errors = {};
  if (!formValues.title) {
    // User did not enter title
    errors.title = 'Required';
  }
  if (!formValues.description) {
    errors.description = 'Required';
  }
  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamCreate);
