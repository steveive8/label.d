import React, {useState} from 'react';
import { Flex, Row, Text } from '../base';
import styled from 'styled-components';
import {LogoBlackImage} from '../../icons/logo';
import { Down, Left } from '../../icons/common';

const HeaderBox = styled(Row)`
    height: 70px;
    margin: 0px 50px;
    align-items: center;
    font-family: 'Geometos';
    justify-content: space-between;
`;

export const LabelHeader = ({title, setOn}) => {
    return (
        <HeaderBox>
            <Flex>
                <a onClick={() => setOn(0)}>
                    <Row align="center" to={"cursor"}>
                        <Left height={17} />
                        <div style={{marginLeft: 10}} />
                        <LogoBlackImage height={28} width={74.9} />
                    </Row>
                </a>
            </Flex>
            <Flex margin="margin-top: 10px; margin-right: 40px;">
                <Text size={30}>{title} LABEL</Text>
            </Flex>
            <Row align="center" to={"cursor"}>
                <Text>SORT</Text>
                <Flex margin="margin-left: 5px;margin-bottom: 3px;">
                    <Down height={10} width={30}/>
                </Flex>
            </Row>
        </HeaderBox>
    )
}

export default LabelHeader;