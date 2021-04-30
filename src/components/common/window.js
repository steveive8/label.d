import React, {useState} from 'react';
import {Row, Flex, Col, Text, Image, Box} from '../base';
import styled from 'styled-components';
import man1 from '../../imgs/man1.jpg';
import man2 from '../../imgs/man2.jpg';
import man3 from '../../imgs/man3.jpg';
import man4 from '../../imgs/man4.jpg';
import man5 from '../../imgs/man5.jpg';
import man6 from '../../imgs/man1.jpg';
import man7 from '../../imgs/man7.jpg';
import man8 from '../../imgs/man8.jpg';
import man9 from '../../imgs/man9.jpg';

export const Window = ({}) => {
    return (
        <Col style={{width: '100%'}} align="center" justify="center">
            <Row align="center">
                <Box src={man1} />
                <Box src={man2} />
                <Box src={man3} />
                <Box src={man4} />
            </Row>
            <Row align="center">
                <Box src={man5} />
                <Box src={man6} />
                <Box src={man7} />
                <Box src={man8} />
            </Row>
            <Row align="center">
                <Box src={man9} />
                <Box src={man2} />
                <Box src={man3} />
                <Box src={man3} />
            </Row>
        </Col>
    );
};

export default Window;