import React from 'react';
import {Image} from '../components/base';
import logo from './labeldlogo.png';
import logoblack from './labeldlogoblack.png';

export const Logo = ({width = 314, height = 98, fill ="#FFFFFF"}) => (
    <svg width={width} height={height} viewBox="0 0 314 98" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="telegrafico" fontWeight="normal">
            <g id="Group" fill={fill}>
                <text id="Label.D" fontSize="60" letterSpacing="-0.5576472">
                    <tspan x="48.2475735" y="42">Label</tspan>
                    <tspan x="214.290107" y="42" fontFamily="Helvetica">.</tspan>
                    <tspan x="230.402381" y="42">D</tspan>
                </text>
                <text id="Artificial" fontSize="30" linespacing="25" letterSpacing="-0.2788236">
                    <tspan x="84.4671949" y="89">Artificial</tspan>
                </text>
            </g>
        </g>
    </svg>
);

export default Logo;

export const LogoImage = ({width = 214, height = 80}) => (
    <Image of="contain" width={width} height={height} src={logo} />
)

export const LogoBlackImage = ({width = 214, height = 80}) => (
    <Image of="contain" width={width} height={height} src={logoblack} />
)