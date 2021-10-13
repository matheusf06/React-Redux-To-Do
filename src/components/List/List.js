import React from 'react';
import Button from '../Button';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions';

import * as S from './styled';

const List = ({ list, removeToDo }) => {
  return (
    <S.Ul>
      {list.map(({ id, text }) => (
        <li key={id}>
          <h3>{text}</h3>
          <Button onClick={() => removeToDo(id)}>Remover</Button>
        </li>
      ))}
    </S.Ul>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(List);
