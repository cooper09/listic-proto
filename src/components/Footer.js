import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
    position: absolute;
    right: 2em;
    bottom: 2em;
    font-size: 0.8em;
    a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
    }
`;

const Footer = () =>
    <FooterDiv>
        by <a href='https://sonyainc.net/' target='_blank'>Sonya Enterprises</a>
    </FooterDiv>;

export default Footer;