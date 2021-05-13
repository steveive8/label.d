import React, {useState} from 'react';
import Introduction from './introduction';
import PersonalColor from './personalcolor';
import ProcessBar from './processbar';
import Results from './results';

export const Index = ({}) => {
    return (
        <div style={{position: 'absolute', width: '100vw', height: '100vh'}}>
            <Introduction />
            <PersonalColor />
            <ProcessBar />
            <Results />
        </div>
    )
};

export default Index;