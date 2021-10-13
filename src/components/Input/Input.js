import React from 'react';
import * as S from './styled';

const Input = ({ onChange, value }) => {
  return <S.Input type="text" onChange={onChange} value={value} />;
};

export default Input;
