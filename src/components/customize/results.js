import React, {useState} from 'react'
import {Col, Row, Flex, Text} from '../base';

export const Results = ({index}) => {
    return (
        <Flex style={{width: '100vw', height: '100vh', position: 'fixed', bottom: index === 2 ? 0 : '100%', opacity: index === 2 ? 1 :0, transition: 'all 1s'}}>
            
        </Flex>
    )
}

export default Results;