/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
export default ({ type, disabled, children }) => {
  const Button = styled.button`
    background-color: #ff9100;
    color: ${({ theme }) => theme.colors.contrastText};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 0;
    width: 100%;
    padding: 10px 16px;
    font-weight: bold;
    font-size: 14px;
    line-height: 1;
    text-transform: uppercase;
    outline: 0;
    transition: .3s;
    cursor: pointer;
    &:hover,
    &:focus {
      opacity: .5;
    }
    &:disabled {
      background-color: #979797;
      cursor: not-allowed;
    }
  `;

  return (
    // eslint-disable-next-line react/button-has-type
    <Button type={type} disabled={disabled}>
      {children}
    </Button>

  );
};
