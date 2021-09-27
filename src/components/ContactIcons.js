import React from 'react';
import styled from 'styled-components';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { openNewPage } from '../utils';

const IconContainer = styled.div`
  margin-bottom: 1em;

  & > * + * {
    margin-left: 15px;
  }
`;

function ContactIcons({ className }) {
  const openMail = () => {
    const subject = 'hoang.viet.nguyen';
    const mail = '@outlook.com';
    window.location.href = `mailto:${subject}${mail}`;
  };
  return (
    <IconContainer className={className}>
      <FaGithub
        className='icon'
        onClick={openNewPage('https://github.com/HoangNguyen-CA')}
      />
      <FaLinkedin
        className='icon'
        onClick={openNewPage(
          'https://www.linkedin.com/in/hoang-nguyen-a36636196/'
        )}
      />
      <FaEnvelope onClick={openMail} className='icon' />
    </IconContainer>
  );
}

export default ContactIcons;
