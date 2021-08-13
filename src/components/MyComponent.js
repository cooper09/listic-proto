import React, { useContext } from 'react';
import { StoreContext } from '../store/StoreContext';
import styled from 'styled-components';

const MyComponent = () => {
  const MyDiv = styled.div`
  margin: 0 auto;
  font-size: 1em;
  text-align: left;
  padding: 1em;
  background: gray;
`;

  const { state, actions } = useContext(StoreContext);
  
  const myAction = () => actions.requestChangeName('data');
  
  return(
    <>
    <MyDiv>
      <h3>Component</h3>
      {state.author}<br/>
        <button onClick={myAction}>Click me</button>
    </MyDiv>
    </>
  )
};

export default MyComponent;