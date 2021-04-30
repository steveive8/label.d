import React from 'react';
import LabelHeader from '../common/labelheader';
import Window from '../common/window';

export const Man = ({modal, setModal, setOn}) => {
    return (
        <div>
            <LabelHeader setOn={setOn} title={"man"} />
            <Window setModal={setModal} />
        </div>
    )
};

export default Man;