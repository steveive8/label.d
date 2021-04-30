import React from 'react';
import LabelHeader from '../common/labelheader';
import Window from '../common/window';

export const Woman = ({setOn}) => {
    return (
        <>
            <LabelHeader setOn={setOn} title={"Woman"} />
            <Window />
        </>
    )
};

export default Woman;