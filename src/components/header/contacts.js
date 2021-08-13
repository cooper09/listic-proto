import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreContext';
import styled from 'styled-components';

import Dropdown from "../dropdown"

const Contacts = () => {
  const ContactsDiv = styled.div`
  width: 30%;
  font-size: 1em;
  text-align:  middle;
  padding: 0.5em;
  background: indigo;
  color: #fff;
  margin: 0.5em;
  float: right;
  position: relative;
  top: -3em;
`;

  const { state, actions } = useContext(StoreContext);
  
  const myAction = () => actions.requestChangeName('data');

  console.log("Contacts - state contacts: ", state.contacts )
  let contacts = state.contacts;
  
  return(
    <>
    <ContactsDiv>

      <span>Contacts </span><Dropdown />

    </ContactsDiv>
    </>
  )
};

export default Contacts;