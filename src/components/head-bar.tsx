import React, { FunctionComponent } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, icons, SCREENS_NAMES, SIZES } from "../utils/constants";
import { useNavigation } from '@react-navigation/native';
import CustomTouchableOpacity from "./custom-touchable-opacity";

type props ={
    showBackButton? : boolean,
    showMenuButton? : boolean,
    customBackButton? : FunctionComponent,
    customMenuButton? : FunctionComponent,
    iconBack? : "airplane" | "back" | "barMenu" | "bed" | "bookmark" | "bus" | "compass" | "eat" | "event" | "home" | "menu" | "parking" | "search" | "starEmpty" | "starFull" | "starHalf" | "taxi" | "train" | "user" | "villa" | "wind",
    iconMenu? : "airplane" | "back" | "barMenu" | "bed" | "bookmark" | "bus" | "compass" | "eat" | "event" | "home" | "menu" | "parking" | "search" | "starEmpty" | "starFull" | "starHalf" | "taxi" | "train" | "user" | "villa" | "wind"
    tintColor? : string,
    positionAbsolute? : boolean,
    onPresBackButton? : () => void,
    onPresMenuButton? : () => void,
    style? : {}
}
export default function HeadBar({tintColor = COLORS.black, iconBack = "back", iconMenu = "barMenu", showBackButton, showMenuButton = true, customBackButton, customMenuButton, onPresBackButton, onPresMenuButton, style = {}} : props){
    const {navigate} = useNavigation()
    return(
        <View style={[styles.container, {...style, zIndex : 1}]}>
            {showBackButton && 
                <CustomTouchableOpacity style={{...styles.button, left : 0}} onPress={() => onPresBackButton && onPresBackButton() } >
                    <Image source={icons[iconBack]} style={[styles.icon, {tintColor : tintColor,}]} />
                </CustomTouchableOpacity>
            }
            {showMenuButton && 
                <CustomTouchableOpacity style={{...styles.button, right : 0}} onPress={() => onPresMenuButton && onPresMenuButton() } >
                    <Image source={icons[iconMenu]} style={[styles.icon, {tintColor : tintColor,}]} />
                </CustomTouchableOpacity>
            }
        </View>
            
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        height : SIZES.padding * 2 ,
        width : "100%",
        padding : SIZES.padding / 2
    },
    button : {
        position : "absolute",
        marginHorizontal : SIZES.padding,
        marginVertical : SIZES.padding /2,
    },
    icon : {
        width : 25,
        height : 25,
    }
})