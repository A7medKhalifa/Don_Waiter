import { Logo } from "assets/Images";
import React from "react";
import { Image, View } from "react-native";

const StaticLogo = ({
    width,
    height
}: {
    width: number
    height: number
}) => {
    return (
        <>
            <Image source={Logo} resizeMode="contain" style={{
                width: width,
                height: height,
            }} />
        </>
    )
}

export default StaticLogo