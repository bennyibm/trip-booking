import React, { ReactChildren, ReactNode } from "react";
import { TouchableOpacity, ViewStyle } from 'react-native';

type props = {
    onPress? : () => void,
    children : ReactNode,
    activeOpacity? : number,
    style? : ViewStyle
}
export default function CustomTouchableOpacity({onPress, children, activeOpacity = 0.8, style = {}} : props){

    return (
        <TouchableOpacity onPress={() => onPress && onPress()} style={style} activeOpacity={activeOpacity}>
            {children}
        </TouchableOpacity>
    )
}