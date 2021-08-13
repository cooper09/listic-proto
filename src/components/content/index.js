import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreContext';
import styled from 'styled-components';

import Home  from './home';
import Tasks  from './tasks';
import Stocks from './stocks';

const ContentDiv = styled.div`
    background: #fff;
    font-size: 1em;
    border: solid 1px indigo;
    height: 90vh;
    padding: 1em;
    width: 60%;
    float:right;
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
`;

const Content = () => {

    const { state, actions } = useContext(StoreContext);
    let currentPage = state.currentPage;
    console.log("Content - currentPage: ", state.currentPage );

    const myAction = (page) => {
        console.log("action time: "+ page );
        actions.requestCurrentPage(page);
      };

    const closeMe = (page) => {
        console.log("Close page: "+ page );
        actions.closePage(page);
    }
    return(
      <>
      <ContentDiv >
          {currentPage}
     
        { currentPage === "Home" &&
            <h2>
            <Home visible={true} />
            </h2>
        }
        { currentPage === "Tasks" &&
            <h2>
            <Tasks visible={true}  close={closeMe} />
            </h2>
        }
        { currentPage === "Stocks" &&
            <h2>
            <Stocks visible={true} close={closeMe} />
            </h2>
        }

      </ContentDiv >
      </>
    )
};
export default Content;