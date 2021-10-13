import React from 'react';
import * as S from './styled';

const Button = ({ onClick, children }) => {
  return <S.Button onClick={onClick}>{children}</S.Button>;
};

export default Button;
