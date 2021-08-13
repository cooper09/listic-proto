import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreContext';
import styled from 'styled-components';

import  Lists  from './lists';
import  Groups from './groups';

const Sidebar = () => {
  const SidebarDiv = styled.div`
      background: #fff;
      font-size: 1em;
      border: solid 1px indigo;
      height: 90vh;
      padding: 1em;
      font-family: Roboto,sans-serif;
      line-height: 1.5; 
      width: 30%;
      float: left;

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
        font-size: 1em; 
        margin: 1em;
      }
    `;

  const { state, actions } = useContext(StoreContext);
  
  const myAction = (page) => {
    console.log("action time: ", page );
    actions.requestCurrentPage(page);
  }; //actions.requestChangeName('data');

  
  return(
    <>
    <SidebarDiv>
      <h3>Sidebar</h3>
        <div>
          <button onClick={ ()=> myAction("Tasks")} className="btn">Tasks</button>
          <button onClick={()=> myAction("Stocks")} className="btn">Stocks</button>
        </div>
        <Lists /><br/>
        <Groups />
    </SidebarDiv>
    </>
  )
};

export default Sidebar;