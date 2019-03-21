import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput = formProps => {
    console.log(formProps.meta);
    return (
      <div className='field'>
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        <div>{formProps.meta.error}</div>
      </div>
    );
  };

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        className='ui form'
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
