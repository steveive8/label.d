import React from 'react';
import LabelHeader from '../common/labelheader';
import Window from '../common/window';

export const Woman = ({setOn, setModal}) => {
    return (
        <>
            <LabelHeader setOn={setOn} title={"Woman"} />
            <Window setModal={setModal} />
        </>
    )
};

export default Woman;