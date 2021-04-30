import React, {useState} from 'react';
import styled from 'styled-components';
import {Col} from '../base';
import FitForYou from './fitforyou';
import Model from './model';
import Member from './member';

export const Main = ({no, setNo}) => {
    return (
        <Col align="center" justify="center">
            <Model setNo={setNo} />
            <FitForYou />
            <Member />
        </Col>
    );
};

export default Main;