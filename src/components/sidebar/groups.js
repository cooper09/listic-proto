import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreContext';
import styled from 'styled-components';

import Dropdown from "../dropdown"

const GroupDiv = styled.div`
font-size: 1em;
text-align:  middle;
padding: 0.5em;
background: indigo;
color: #fff;
margin: 0.5em;
font-family: Roboto,sans-serif;
line-height: 1.5;
`;

const Groups = () => {
    const {state, actions } = useContext(StoreContext);
    
    return (
      <>
      <GroupDiv >
      <span>Your Lists </span><Dropdown />
      </GroupDiv >
      </>
    )
};

export default Groups;