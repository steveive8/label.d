import React, {useEffect, useState} from 'react'
import {Col, Row, Flex, Text} from '../base';

export const PersonalColor = ({index}) => {
    return (
        <Flex align="center" justify="center" bg="white" opacity={index === 1 ? 1 : 0} style={{width: '100vw', height: '100vh', bottom: index === 1 ? 0 : '100%', position: 'fixed', transition: 'all 1s'}}>
            
        </Flex>
    )
}

export default PersonalColor;