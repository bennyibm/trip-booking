import React, { ReactNode } from "react";
import { ColorValue, StyleSheet, View, ViewStyle } from "react-native";
import { COLORS } from "../utils/constants";

type props ={
    bgColor? : ColorValue,
    opacity? : number,
    style? :  ViewStyle 
    zIndex? : number,
    children? : ReactNode
}

export default function OverlayBlock({bgColor = COLORS.primary, zIndex = 0, opacity = 0.5, style = {}, children} : props){
    return(
        <View style={[styles.container, {...style, zIndex : zIndex}]}>
            {/* children block */}
            {children}
            
            {/* overlay */}
            <View 
                style={[
                    styles.overlay, 
                    {
                        backgroundColor : bgColor, 
                        opacity : opacity,
                        zIndex : zIndex
                        // ...style
                    }
                ]} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        overflow : "hidden",
        // position : "absolute",
    },
    overlay : {
        width : "100%",
        height : "100%",
        position : "absolute",
        overflow : "hidden"
    }
})