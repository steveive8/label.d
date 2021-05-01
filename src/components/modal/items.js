import React, {useState} from 'react';
import {Col, Row, Flex, Image, Text} from '../base';
import Bottom from './bottom';
import pants from '../../imgs/2-1.jpeg'
import top from '../../imgs/7.jpeg'
import shoe from '../../imgs/shoe2.jpg';
import sortie from '../../imgs/sortie.png';
import lauren from '../../imgs/lauren.png';
import cheany from '../../imgs/cheany.png';

export const Items = ({}) => {
    return (
        <Col flex={2} align="center" justify="center" height="100%" width="67%">
            <Row height="55%" align="center" width="100%" style={{overflow: 'hidden', overflowX: 'scroll'}}>
                <Item logo={sortie} item={pants} text={"tailored"} text2={"denim jeans"} />
                <Item logo={lauren} item={top} text={"light blue striped"} text2={"georgia shirt"} />
                <Item logo={cheany} item={shoe} text={"Harry II Tassel"} text2={"Loafer in Fox Suede"} />
            </Row>
            <Bottom />
        </Col>
    );
};

export const Item = ({logo, item, text, text2}) => {
    return (
        <Col align="center" justify="space-between" height="100%" to="cursor" width="30%" margin="margin: 10px;">
            <Flex flex={1} height="12.8%" justify="center">
                <Image of="contain" src={logo} width="100%" height="100%" />
            </Flex>
            <Flex flex={4} height="55%" justify="center" padding="padding: 20px;">
                <Image of="contain" height="90%" src={item} />
            </Flex>
            <Col flex={1} align="center" height="15%" margin="margin-top: 10px;">
                <Text size="12.8" style={{fontFamily: 'Geometos'}}>
                    {text}
                </Text>
                <Text margin="margin-top: 5px;" size="12" style={{fontFamily: 'Geometos'}}>
                    {text2 && text2}
                </Text>
            </Col>
        </Col>
    )
}

export default Items;