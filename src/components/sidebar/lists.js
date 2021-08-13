import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreContext';
import styled from 'styled-components';

import Dropdown from "../dropdown"

const ListsDiv = styled.div`
    font-size: 1em;
    text-align:  middle;
    padding: 0.5em;
    background: indigo;
    color: #fff;
    margin: 0.5em;
    font-family: Roboto,sans-serif;
    line-height: 1.5;
`;

const Lists = () => {
  const { state, actions } = useContext(StoreContext);

  return (
      <>
      <ListsDiv >
      <span>Your Lists </span><Dropdown />
      </ListsDiv >
      </>
  )
};
export default Lists;