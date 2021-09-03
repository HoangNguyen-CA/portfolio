import React from 'react';
import styled from 'styled-components';

import SectionLayout from '../components/Section/SectionLayout';
import Button from '../components/Button';

const Layout = styled(SectionLayout)`
  background-color: ${({ theme }) => theme.bg.main};
`;

const Input = styled.input`
  font-size: 1rem;
  display: block;
  width: 100%;
  padding: 0.6em;

  color: ${({ theme }) => theme.clr.neutral[900]};
  font-family: 'Open Sans', sans-serif;
`;

const TextArea = styled.textarea`
  font-size: 1rem;
  display: block;
  width: 100%;
  height: 10em;
  padding: 0.6em;

  color: ${({ theme }) => theme.clr.neutral[900]};
  font-family: 'Open Sans', sans-serif;

  resize: none;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  display: block;
  width: 100%;

  & > * {
    margin-top: 0.4em;
  }
`;

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  max-width: 600px;

  & > * + * {
    margin-top: 0.8em;
  }

  & > button {
    margin-top: 2em;
  }
`;

const Contact = () => {
  return (
    <Layout header='Contact'>
      <Form name='contact' method='post'>
        <input type='hidden' name='form-name' value='contact' />

        <Label>
          Email:
          <Input name='email' type='text' />
        </Label>
        <Label>
          Subject:
          <Input name='subject' type='text' />
        </Label>
        <Label>
          Message:
          <TextArea name='message' type='text' />
        </Label>
        <Button $form>Submit</Button>
      </Form>
    </Layout>
  );
};

export default Contact;
