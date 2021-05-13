import React, {useState} from 'react';
import Introduction from './introduction';
import PersonalColor from './personalcolor';
import ProcessBar from './processbar';
import Results from './results';
import {Flex} from '../base';

export const Index = ({}) => {
    const [index, setIndex] = useState(0);
    return (
        <Flex align="center" justify="center" style={{position: 'fixed', width: '100vw', height: '100vh', zIndex: 100}}>
            <Introduction index={index} setIndex={setIndex} />
            <PersonalColor index={index} />
            <ProcessBar index={index} />
            <Results index={index} />
        </Flex>
    )
};

export default Index;