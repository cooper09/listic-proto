import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreContext';
import styled from 'styled-components';

import { List } from 'semantic-ui-react';
import  ModalBasic from '../modal';

const Tasks = ({visible, close}) => {
  const PageDiv = styled.div`
    background: #fff;
    font-size: 1em;
    height: 80vh;
    font-family: Roboto,sans-serif;
    line-height: 1.5; 

    .btn {
        position: relative;
        color: #fff;
        cursor: default;
        background: indigo;
        cursor: pointer;
        width: 30%;
        padding: 0.5em;
        font-family: Roboto,sans-serif;
        font-style: bold;
        line-height: 1.5;
        font-size: 1em; 
        margin: 1em;
      }
      .item {
        border: 1px solid indigo;
        padding: 1em;
        margin-bottom: 0.5em;
        cursor: pointer;
      }
      .right {
        float: right;
        position: relative;
        padding: 0.5em;
        margin-right: 1em;
        background: red;
        cursor: pointer;
      }
`;

  const { state, actions } = useContext(StoreContext);
  
  const myAction = () => actions.requestChangeName('data');

  console.log("Tasks - state contacts: ", state.contacts )
  let contacts = state.contacts;
  console.log("Login - state contacts: ", state.contacts );
  let auth;
  state.authorize ? auth="true" : auth="false";
  
 if (state.authorize && visible ) {
  return(
    <>
    <PageDiv>
    <span className="right" onClick={()=>close("Tasks")}>X</span>
      <h3>Tasks</h3>
      <List>
         { contacts.map(contact => (
            <List.Item
                key={contact.id}
                onClick={() =><p>Hey Stinky</p>}
                >
                    {contact.name}
                    <ModalBasic className="right"/>
                </List.Item>
                ))}
        </List>

{/*        <button onClick={myAction}>Click me</button>} */}
    </PageDiv>
    </>
    )
  }//if visible
  console.log("Tasks not visible")
  return <p>Please login first...</p>;
};

export default Tasks;