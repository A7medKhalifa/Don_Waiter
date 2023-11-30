import {  Man } from "assets/Images";
import React from "react";
import { Image, View } from "react-native";

const StaticMan = ({
    width,
    height
}: {
    width: number
    height: number
}) => {
    return (
        <>
            <Image source={Man} resizeMode="stretch" style={{
                width: width,
                height: height,
                marginRight:10,
                alignSelf:'flex-end'
            }} />
        </>
    )
}

export default StaticMan