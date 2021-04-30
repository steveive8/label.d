import React, {useEffect, useState} from 'react';
import {Row, Col, Flex, Text, Image} from '../base';
import man from '../../imgs/man1.jpg';
import {LogoImage} from '../../icons/logo';

//, backdropFilter: 'blur(0px)'

export const Modal = ({modal, setModal}) => {
    const [zIndex, setzIndex] = useState(-1);
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        const modaler = () => {
            if(modal) {
                setzIndex(10);
                setTimeout(() => {
                    setOpacity(1);
                }, 250);
            } else {
                setOpacity(0)
                setTimeout(() => {
                    setzIndex(-1)
                }, 250);
            }
        };
        modaler();
    }, [modal]);
    return (
        <Flex align="center" zIndex={zIndex} opacity={opacity} justify="center" style={{position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, overflow: 'hidden', transition: 'all 300ms'}}>
            <div onClick={() => setModal(false)} style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)'}} />
            <Row position="fixed" zIndex={11} width="60%" height="70%" bg="white">
                <Flex flex={1}>
                    <Image of="cover" width="100%" height="100%" src={man} />
                    <div style={{position: 'absolute', bottom: 15, left: 15}}>
                        <LogoImage height={30} width={80.25} />
                    </div>
                </Flex>
                <Col flex={2}>
                    
                </Col>
            </Row>
        </Flex>
    )
};

export default Modal;