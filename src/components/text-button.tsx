import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import {COLORS, SIZES, FONTS} from "../utils/constants"
import CustomTouchableOpacity from "./custom-touchable-opacity";

type props ={
    text : string,
    textTransform? : "uppercase" | "lowercase" | "capitalize" | "none",

    onPress? : () => void,
    style? : {},
    // styleWrapper? : {},
    styleText? : {},

}
export default function TextButton({text, textTransform = "none", onPress: onPressCallback = () => console.log("text button clicled"), style: customStyle = {width : "70%", height : 50}, styleText = {}} : props){

    return(
        <CustomTouchableOpacity 
            onPress={() => onPressCallback() } 
            style={{ ...customStyle}}>

                
            <LinearGradient 
                style={ [styles.shadow ,{flex : 1, width : "100%", height : "100%", alignItems : "center", justifyContent : "center", borderRadius :SIZES.radius}] }
                colors={["#46aeff", "#5884ff"]} 
                start={{x : 0, y : 0}} 
                end={{x : 1, y : 1}} >
            
                <Text style={{...FONTS.body2, textTransform : textTransform, color : COLORS.white, ...styleText}}>{text}</Text>
            </LinearGradient>
        </CustomTouchableOpacity>
    )
}

const styles = StyleSheet.create({
    shadow : {
        shadowColor : COLORS.primary,
        shadowOffset : {
            width : 0,
            height : 2
        },
        shadowOpacity : 0.25,
        shadowRadius : 3.84,
        elevation : 5
    }
})