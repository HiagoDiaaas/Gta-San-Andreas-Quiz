/* eslint-disable arrow-body-style */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
  
`;

// eslint-disable-next-line no-undef
// eslint-disable-next-line react/prop-types
export default function Input({ onChange, placeholder }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
