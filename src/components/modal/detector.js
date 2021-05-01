import React, {useState} from 'react';
import {Flex, Image, Pos} from '../base';
import {LogoImage} from '../../icons/logo';
import man from '../../imgs/man1.jpg';

export const Detector = ({}) => {
    return (
        <Flex flex={1} position="relative" width="33%" height="100%">
            <Image of="cover" width="100%" height="100%" src={man} />
            <Position />
            <Logo />
        </Flex>
    )
}

const Position = ({}) => {
    return (
        <Flex width="100%" height="100%" position="absolute" zIndex={10}>
            <Pos t={50} l={50} />
            <Pos t={60} l={70} />
            <Pos t={87} l={10} />
            <Pos t={30} l={20} />
            <Pos t={90} l={30} />
        </Flex>
    )
}

const Logo = () => (
    <div style={{position: 'absolute', bottom: 15, left: 15}}>
        <LogoImage height={30} width={80.25} />
    </div>
)

export default Detector;