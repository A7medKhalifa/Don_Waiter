import React from "react";
import { useSelector } from "react-redux";

function hexToRgbA(hex: any, alpha: any) {
    if (hex.charAt(0) === '#') {
        hex = hex.substr(1);
    }

    if (hex.length < 2 || hex.length > 6) {
        return '';
    }

    var values = hex.split(''),
        r,
        g,
        b;

    if (hex.length === 2) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = r;
        b = r;
    } else if (hex.length === 3) {
        r = parseInt(values[0].toString() + values[0].toString(), 16);
        g = parseInt(values[1].toString() + values[1].toString(), 16);
        b = parseInt(values[2].toString() + values[2].toString(), 16);
    } else if (hex.length === 6) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = parseInt(values[2].toString() + values[3].toString(), 16);
        b = parseInt(values[4].toString() + values[5].toString(), 16);
    } else {
        return '';
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export const Colors = (alpha = 1) => {
    return {
        white: hexToRgbA('#FFFFFF', alpha),
        yellow: hexToRgbA('#f0da80', alpha),
        black: hexToRgbA('#000000', alpha),
        secBlack: hexToRgbA('#333333', alpha),
        lblack: hexToRgbA('#454545', alpha),
        gray: hexToRgbA('#f2f2f2', alpha),
        Red: hexToRgbA('#CF3736', alpha),
        border: hexToRgbA('#B0B0B0', alpha),
        secWhite: hexToRgbA('#F6F6F6', alpha),
        
    };
};