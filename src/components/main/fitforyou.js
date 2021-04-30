import React, {useState} from 'react';
import {Flex, Row, Col, Text, Box, Image} from '../base';
import styled from 'styled-components';
import man from '../../imgs/man.jpg';
import shirt1 from '../../imgs/1.jpeg';
import shirt2 from '../../imgs/1.png';
import shirt3 from '../../imgs/2.png';
import shirt4 from '../../imgs/3.png';
import shirt5 from '../../imgs/5.jpg';
import pants1 from '../../imgs/2-1.jpeg';
import pants2 from '../../imgs/2-2.jpeg';
import pants3 from '../../imgs/2-3.jpeg';
import pants4 from '../../imgs/2-4.jpeg';
import pants5 from '../../imgs/2-5.jpeg';

const Style = ({src, text, height, h}) => {
    return (
        <Col height={h} justify="flex-end" align="center" to="cursor" margin="margin: 10px;" width="100%">
            <Image of="cover" height={height} src={src} />
            <Text margin="margin-top: 10px" size="12" style={{fontFamily: "Geometos"}}>{text}</Text>
        </Col>
    )
}

export const FitForYou = ({}) => {
    return (
        <Col margin="margin: 100px 0px;" align="center">
            <Row align="center">
                <Flex margin="margin-top: 20px;">
                    <Box src={man} size="300"/>
                </Flex>
                <Col width="700px;">
                    <Text size="25" margin="margin: 30px 40px" style={{fontFamily: "Geometos"}}>FITs for you</Text>
                    <Row align="center" flex={1}>
                        <Style src={shirt1} text="Shirts" h={'80px'} height="80px" />
                        <Style src={shirt2} text="Shirts" h={'80px'} height="70px" />
                        <Style src={shirt3} text="Shirts" h={'80px'} height="70px" />
                        <Style src={shirt4} text="Shirts" h={'80px'} height="70px" />
                        <Style src={shirt5} text="Shirts" h={'80px'} height="90px" />
                    </Row>
                    <Row align="center" flex={1}>
                        <Style src={pants1} text="Pants" h="120px" height="100px" />
                        <Style src={pants2} text="Pants" h="120px" height="100px" />
                        <Style src={pants3} text="Pants" h="120px" height="100px" />
                        <Style src={pants4} text="Pants" h="120px" height="100px" />
                        <Style src={pants5} text="Pants" h="120px" height="100px" />
                    </Row>
                </Col>
            </Row>
        </Col>
    );
};

export default FitForYou;