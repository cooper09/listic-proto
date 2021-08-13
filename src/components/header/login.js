import React, { useState,useContext, useEffect } from 'react';
import { StoreContext } from '../../store/StoreContext';
import styled from 'styled-components';

const Login = () => {
  const MyDiv = styled.div`
      margin: 0.5 em;
      font-size: 1em;
      text-align: left;
      padding: 1em;
      width: 20%;
      background: #fff;
      float: right;
      position: relative;
      top: -3em;
      color: indigo;
      font-family: Roboto,sans-serif;
      line-height: 1.5; 
    
      .btn {
        position: relative;
        color: #fff;
        cursor: default;
        background: indigo;
        cursor: pointer;
        width: 80%;
        padding: 0.5em;
        font-family: Roboto,sans-serif;
        font-style: bold;
        line-height: 1.5;
        font-size: 1em 
      }
`;

  const { state, actions } = useContext(StoreContext);

  console.log("Login - state contacts: ", state.contacts );
  let auth;
  state.authorize ? auth="true" : auth="false";

  console.log("Login - authorized: ", auth );

  const [loginText, setLoginText] = useState("Log in");
  
  useEffect(()=>{
    console.log("Login -  useEffect");
    state.authorize ? setLoginText("Log Out") : setLoginText("Log In")
  },[state.authorize]);

  const myAction = () => {
    actions.requestChangeName("john doe");
    actions.requestContacts(contactsObj);
    actions.authUser(!state.authorize);
  }

  const userData = "john doe"
  const contactsObj= [{
      "id":"3",
      "name":"sonny tufts"
  },
  {
    "id": "4",
    "name":"wilma flintsone"
  }]

  return(
    <>
    <MyDiv>
        {auth}
          <button onClick={myAction} className="btn">{loginText}</button>

 </MyDiv>
    </>
  )
};

export default Login;