import React, {useState} from 'react';
import {Flex, Row, Col, Text, Box} from '../base';
import styled from 'styled-components';
import man1 from '../../imgs/man1.jpg';
import woman1 from '../../imgs/woman1.jpg';
import unisex1 from '../../imgs/unisex1.jpg';

export const Model = ({setNo}) => {
    return (
        <Row align="center" justify="center" margin="margin-top: 30px">
            <div onClick={() => setNo(1)}>
                <Box size="300" src={man1} text="man" />
            </div>
            <div onClick={() => setNo(2)}>
                <Box size="300" src={woman1} text="woman" />
            </div>
            <div onClick={() => setNo(3)}>
                <Box size="300" src={unisex1} text="unisex" />
            </div>
        </Row>
    );
};

export default Model;