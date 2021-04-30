import React from 'react';
import LabelHeader from '../common/labelheader';
import Window from '../common/window';

export const Unisex = ({setOn, setModal}) => {
    return (
        <>
            <LabelHeader setOn={setOn} title={"Unisex"} />
            <Window setModal={setModal} />
        </>
    )
};

export default Unisex;