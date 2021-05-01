import React, {useState} from 'react';
import {Row, Text} from './base';
import Logo, {LogoImage} from '../icons/logo';
import styled from 'styled-components';

const Box = styled(Row)`
    background-color: black;
    position: fixed;
    width: 100%;
    padding: 25px 30px;
    top: 0;
    z-index: 10;
    align-items: center;
`;

//                <Logo width={120} height={40} />
// height * 2.675 = width
export const Header = ({}) => {
    return (
        <Box>
            <a href='/label.d'>
                <LogoImage height={40} width={107} />
            </a>
            <Row flex={1} justify="flex-end" padding="padding-right: 10px;">
                <Text color="white" style={{fontFamily: 'Geometos'}}>Johnathan</Text>
            </Row>
        </Box>
    )
}

export default Header;