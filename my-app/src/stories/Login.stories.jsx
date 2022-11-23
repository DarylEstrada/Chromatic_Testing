import React from 'react';

import { screen, userEvent } from '@storybook/testing-library';

import Login from '../components/Login';

export default {

  title: 'Form/Login',
  component: Login,
};

const Template = (args) => <Login {...args} />;

export const EmptyForm = Template.bind({});


export const FilledForm = Template.bind({});

FilledForm.play = async () => {

  const passwordInput = screen.getByLabelText('Password', {
    selector: 'input'
  });

  const emailInput = screen.getByLabelText('Username', {
    selector: 'input'
  });

  const buttonBtn = screen.getByRole('button', {
    selector: 'button'
  });

  await userEvent.type(emailInput, 'test@gmail.com', {
    delay: 200
  });

  await userEvent.type(passwordInput, 'test@gmail.com', {
    delay: 200
  });

  await userEvent.click(buttonBtn)
};