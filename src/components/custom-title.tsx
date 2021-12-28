import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomTouchableOpacity } from ".";
import { FONTS } from "../utils/constants";

type props={
    text : string,
    type? : "h1" | "h2" | "h3" | "h4" | "body1" | "body2" | "body3" | "body4" | "largeTitle",
    customStyles? : {},
    shouldBeClickable? : boolean,
    ifShouldBeClickableThenUseCallback? : () => void
}

export default function CustomTitle({text, type = "h1", customStyles = {}, shouldBeClickable = false, ifShouldBeClickableThenUseCallback: shouldBeClickableThenUseCallback } : props){
    
    return (
        <CustomTouchableOpacity style={styles.container}>
            <Text style={{...FONTS[type], ...customStyles}}> {text} </Text>
        </CustomTouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container : {
        justifyContent :"center",
        
    }
})