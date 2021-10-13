import React, { useState } from 'react';

import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import List from '../../components/List';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions';

import * as S from './styled';

function App({ addToDo, list }) {
  const [input, setInput] = useState('');

  function handleChangeInput({ target }) {
    setInput(target.value);
  }

  return (
    <S.Wrapper>
      <h1>Redux To Do's</h1>
      <S.WrapperContent>
        <Input onChange={(event) => handleChangeInput(event)} value={input} />
        <Button
          onClick={() => {
            addToDo(input);
            setInput('');
          }}
        >
          Adicionar To Do
        </Button>
        <S.WrapperList>
          <List list={list} />
        </S.WrapperList>
      </S.WrapperContent>
      <Footer />
    </S.Wrapper>
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
