import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { StoreContext } from '../store/StoreContext';
import { QuoteComponent, Background, Footer, TestComponent } from '../components';
import   Header  from '../components/header/';
import   Sidebar  from '../components/sidebar/';
import   Content  from '../components/content/';

const FontDiv = styled.div`
body {
    font-family: Roboto,sans-serif;
    line-height: 1.5; 
    } 
`;

const HomePage = () => {
    const { state, actions } = useContext(StoreContext);

    useEffect(() => {
        //setInterval(actions.requestRandomQuote, 10000);
    }, []);

    return (
        <>

        {/*    <QuoteComponent quote={state.quote} author={state.author} /> */}
        <FontDiv>
            <Header /><br/>
            <Sidebar /><br/>
            <Content /><br/>
        </FontDiv>
        </>
    );
};

export default HomePage;