import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreContext';
import styled from 'styled-components';

const Home = ({visible}) => {
  const PageDiv = styled.div`
    font-size: 1em;
    text-align:  middle;
    padding: 1em;
    background:#ff;
    margin: 0.5em;
    height:80vh;
    font-family: Roboto,sans-serif;
    line-height: 1.5; 
    color: indigo;
`;

  const { state, actions } = useContext(StoreContext);
  
  const myAction = () => actions.requestChangeName('data');

  console.log("Stocks - state contacts: ", state.contacts )
  let contacts = state.contacts;
  if (visible) {
  return(
    <>
    <PageDiv>
      <h3>Home</h3>
      <p>Listic is a sharing appliction that allows people to reuse their data.</p>
      <p>Live documents with communications of private, public and shared data.</p>
      <p>What people want is ownership and control of their data in order to use it.</p> 
      <h3>Create and Share</h3>
      <ul>
        <li>Spread Sheets</li>
        <li>Tasks Lists</li>
        <li>Stock Quotes</li>
      </ul>
      <pre>selects optons on the left to get started.</pre>
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
return null;

};//end Stocks

export default Home;