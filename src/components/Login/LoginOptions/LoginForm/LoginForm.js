import React from 'react';
import { Form } from 'react-final-form';
import Joi from '@hapi/joi';
import generateValidation from 'utils/generateValidation';
import EmailInput from 'components/Auth/Form/EmailInput';
import PasswordInput from 'components/Auth/Form/PasswordInput/PasswordInput';
import SubmitButton from '../../../Auth/Form/Submit/SubmitButton';
import './LoginForm.scss';

const schema = Joi.object().keys({
  email: Joi.string().min(3).max(255).email({ tlds: false }).required(),
  password: Joi.string().min(5).max(255).required(),
});

const validate = generateValidation(schema);

const onSubmit = values => {
  console.log(values);
};

const LoginForm = () => {
  return (
    <Form
      validate={validate}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} className="login__form" noValidate>
          <EmailInput />
          <PasswordInput />
          <SubmitButton submitting={submitting} value="Sign In" />
        </form>
      )}
    />
  );
};

export default LoginForm;
