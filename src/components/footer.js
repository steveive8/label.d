import React, {useState} from 'react';
import {Col, Row, Text, Flex} from './base';
import {LogoImage} from '../icons/logo';


export const Footer = ({}) => {
    return(
        <Flex bg="black" width="100%" padding="padding: 50px;" height="200px" margin="margin-top: 80px;">
            <Row justify="space-between" width="100%">
                <Flex flex={2}>
                    <LogoImage height={40} width={107} />
                </Flex>
                <Row justify="space-between" flex={2}>
                    <Col flex={1} style={{textAlign: 'right', paddingRight: 30}}>
                        <Text color="white" lh="25">CEO. Steve Ive</Text>
                        <Text color="white" lh="25">www.labeld.ai</Text>
                        <Text color="white" lh="25">Seoul, Republic Of Korea</Text>
                        <Text color="white" lh="25">Korea University</Text>
                    </Col>
                    <Flex flex={1} style={{borderLeftWidth: 1,borderLeftStyle: 'solid', borderLeftColor: 'white', height: 100, paddingLeft: 30}}>
                        <Text color="white" size={18} margin="margin-top: 5px" style={{fontFamily: 'Geometos'}}>We Make History</Text>
                    </Flex>
                </Row>
            </Row>
        </Flex>
    )
}