import React,{useContext} from 'react';
import styled from 'styled-components';
import { StoreContext } from '../../store/StoreContext';

import  Login  from './login';
import  Contacts from './contacts';

const HeaderDiv = styled.div`
    background: #fff;
    font-size: 0.8em;
    border: solid 1px indigo;
    height: 30vh;
    padding: 1em;
    font-family: Roboto,sans-serif;
    line-height: 1.5;
    font-size: 2em ;
`;

const Header = () => {


  const { state, actions } = useContext(StoreContext);

  return (
      <>
      <HeaderDiv >
        <div className="logo">
          <img src={"https://sonyainc.net/listic/logo.png"} width="200" height="100" />
        </div>
         {state.currentUser}
        <Login />
        <Contacts />
      </HeaderDiv >
      </>
  )
};

export default Header;