import React from 'react';
import LabelHeader from '../common/labelheader';
import Window from '../common/window';

export const Unisex = ({setOn}) => {
    return (
        <>
            <LabelHeader setOn={setOn} title={"Unisex"} />
            <Window />
        </>
    )
};

export default Unisex;