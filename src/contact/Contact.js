import React from 'react';
import styled, { css } from 'styled-components';

import SectionLayout from '../components/Section/SectionLayout';
import Button from '../components/Button';

const Layout = styled(SectionLayout)`
  background-color: ${({ theme }) => theme.bg.main};
`;

const inputStyles = css`
  font-size: 1rem;
  width: 100%;
  display: block;
  padding: 0.7em;

  outline: 0;
  border: 2px solid transparent;

  background-color: ${({ theme }) => theme.clr.neutral[200]};
  color: ${({ theme }) => theme.clr.neutral[900]};

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.clr.primary[500]};
  }
`;

const Input = styled.input`
  font-family: inherit;

  ${inputStyles}
`;

const TextArea = styled.textarea`
  height: 12em;

  font-family: inherit;

  resize: none;
  ${inputStyles}
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
    <Layout header='Contact' name='contactSection'>
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
        <Button $form>Send</Button>
      </Form>
    </Layout>
  );
};

export default Contact;
