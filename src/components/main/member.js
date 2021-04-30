import React, {useState} from 'react';
import {Flex, Row, Col, Text, Box} from '../base';
import styled from 'styled-components';

import man1 from '../../imgs/man1.jpg';
import man2 from '../../imgs/man2.jpg';
import man3 from '../../imgs/man3.jpg';
import man4 from '../../imgs/man4.jpg';
import man5 from '../../imgs/man5.jpg';
import man6 from '../../imgs/man1.jpg';
import man7 from '../../imgs/man7.jpg';
import man8 from '../../imgs/man8.jpg';

export const Member = ({}) => {
    return (
        <Col>
            <Text size="25" margin="margin-left: 25px;" style={{fontFamily: "Geometos"}}>Member label</Text>
            <Col>
                <Row>
                    <Box size="210" src={man1} />
                    <Box size="210" src={man2} />
                    <Box size="210" src={man3} />
                    <Box size="210" src={man4} />
                </Row>
                <Row>
                    <Box size="210" src={man5} />
                    <Box size="210" src={man6} />
                    <Box size="210" src={man7} />
                    <Box size="210" src={man8} />
                </Row>
            </Col>
        </Col>
    );
};

export default Member;