import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreContext';
import styled from 'styled-components';

const Stocks = ({visible, close}) => {
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
      padding: 0.5em;
      font-family: Roboto,sans-serif;
      font-style: bold;
      line-height: 1.5;
      font-size: 1em; 
      margin: 1em;
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
  
  console.log("Stocks - state contacts: ", state.contacts )
  let contacts = state.contacts;

  let auth;
  state.authorize ? auth="true" : auth="false";

  const closeMe = (page) => {
    console.log("Close page: "+ page );
    actions.closePage(page);
}

  if (state.authorize && visible) {
  return(
    <>
    <PageDiv>
    <span className="right" onClick={()=>closeMe("Stocks")}>X</span>
      <h3>Stocks</h3>
    {/* {state.contacts}<br/>  */}
      <ul>
         { contacts.map(contact => (
            <li
                key={contact.id}
                    style={{
                        //textDecoration: todo.completed ? 'line-through' : 'none',
                        cursor: 'pointer',
                    }}
                    //onClick={() => dispatch(putTodo({...todo, completed: !todo.completed }))}
                >
                    {contact.name}
                </li>
                ))}
        </ul>
{/*        <button onClick={myAction}>Click me</button>} */}
    </PageDiv>
    </>
  )
}//end if visible
return <p>Please login first...</p>;;

};//end Stocks

export default Stocks;