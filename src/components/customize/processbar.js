import React, {useState} from 'react'
import {Col, Row, Flex, Text} from '../base';
import styled from 'styled-components';

export const ProcessBar = ({index}) => {
    return (
        <Row width="80%" align="center" justify="space-between" opacity={index > 0 ? 1 : 0} style={{position: 'fixed', bottom: '5%', zIndex: 100, transition: 'all 1s', transitionDelay: '1s'}}>
            <Text style={{fontFamily: 'Geometos', opacity: 1 === index ? 1 : 0.5}} size="20">
                Personal Color
            </Text>
            <Text style={{fontFamily: 'Geometos', opacity: 2 === index ? 1 : 0.5}} size="20">
                favorite clothing
            </Text>
            <Text style={{fontFamily: 'Geometos', opacity: 3 === index ? 1 : 0.5}} size="20">
                temporal text
            </Text>
            <Text style={{fontFamily: 'Geometos', opacity: 4 === index ? 1 : 0.5}} size="20">
                label.d result
            </Text>
        </Row>
    )
}

export default ProcessBar;