import React, {useEffect, useState} from 'react'
import {Col, Row, Flex, Text} from '../base';
import styled from 'styled-components';
import ProcessBar from './processbar';

const Changer = styled(Flex)`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => props.index === props.id ? 1 : 0};
    position: absolute;
    bottom: ${(props) => () => {
        if(props.index < props.id || props.index === null){
            return '-100%'
        } else if (props.index === props.id){
            return '0%'
        } else {
            return '100%'
        }
    }};
    transition: all 2000ms;
    background-color: white;
    z-index: 100;
`;

const Go = styled(Text)`
    :hover {
        cursor: pointer;
        opacity: 0.85;
    }
`;

export const Introduction = ({index : i, setIndex : setI}) => {
    const [index, setIndex] = useState(null);
    useEffect(() => {
        const changer = () => {
                if(index === null){
                    return setIndex(0);
                }
                const interval = setInterval(() => {
                    if(index !== 2){
                        setIndex(index+1)
                    }
                }, 4000)
                if(index === 2){
                    clearInterval(interval)
                }
            }
        changer();
    })
    return (
        <Flex align="center" justify="center" style={{width: '100vw', height: '100vh', opacity: i === 0 ? 1 : 0, position: 'fixed', bottom: i === 0 ? 0 : '100%', backgroundColor: 'white', transition: 'all 1000ms'}}>
            <Changer index={index} id={0}>
                <Text style={{fontFamily: 'Geometos', letterSpacing: 1.8}} size="40" weight="700">Welcome to Label.D Styler</Text>
            </Changer>
            <Changer index={index} id={1}>
                <Col align="flex-start">
                    <Text style={{fontFamily: 'Geometos', letterSpacing: 1.8}} size="40" weight="700">Label.D,</Text>
                    <Text style={{fontFamily: 'Geometos', letterSpacing: 1.8}} size="40" weight="700" margin="margin-top: 20px;">The Best Styler for You</Text>
                </Col>
            </Changer>
            <Changer index={index} id={2}>
                <Col align="center" margin="margin-top: 30px;">
                    <Text style={{fontFamily: 'Geometos', letterSpacing: 1.8}} size="40" weight="700">Ready to be Cool?</Text>
                    <Flex width="55%" align="center" justify="center" margin={index === 2 && "margin: 40px;"} style={{opacity: index === 2 ? 1 : 0, transition: 'all 1000ms', transitionDelay: '2s'}} bg="black" padding="padding: 10px; 30px; padding-top: 15px;">
                        <div onClick={() => setI(1)}>
                            <Go size="18" weight="400" color="white" style={{fontFamily: 'Geometos', letterSpacing: 1.8}}>Go Label.D Styler</Go>
                        </div>
                    </Flex>
                </Col>
            </Changer>
        </Flex>
    )
}

export default Introduction;