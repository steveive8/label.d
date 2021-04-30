import React from 'react';
import LabelHeader from '../common/labelheader';
import Window from '../common/window';

export const Man = ({setOn}) => {
    return (
        <>
            <LabelHeader setOn={setOn} title={"man"} />
            <Window />
        </>
    )
};

export default Man;