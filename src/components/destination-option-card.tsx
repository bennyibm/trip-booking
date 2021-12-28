import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, FONTS, icons, SIZES } from "../utils/constants";
import { STYLES } from "../utils/constants/theme";
import CustomTouchableOpacity from "./custom-touchable-opacity";

type props = {
    label : string,
    icon : "airplane" | "back" | "barMenu" | "bed" | "bookmark" | "bus" | "compass" | "eat" | "event" | "home" | "menu" | "parking" | "search" | "starEmpty" | "starFull" | "starHalf" | "taxi" | "train" | "user" | "villa" | "wind"
    bgColors? : string[],
    onPress? : (item? : string) => void 
}
export default function DestinationOptionCard({label: text, icon, bgColors = ["#46aeff", "#5884ff"], onPress } : props){

    return(
        <CustomTouchableOpacity
            onPress={() => onPress && onPress(text)}
            style={{flex : 1, alignItems : "center", justifyContent : "center", ...STYLES.shadow}}
        >
            <View style={styles.container}>
                <LinearGradient
                    style={{flex : 1, alignItems : "center", justifyContent : "center", borderRadius : SIZES.radius}}
                    colors={bgColors}
                    start={{x: 0, y : 0}} 
                    end={{x: 0, y : 1}} 
                    >
                    <Image 
                        source={ icons[icon] }
                        style={styles.image}
                    />
                </LinearGradient>
            </View>
            <Text style={styles.text}>
                {text}
            </Text>

        </CustomTouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        // padding : 5,
        width : 60,
        height : 60,
    },
    image : {
        width : 30,
        height : 30,
        resizeMode : "cover",
        tintColor : COLORS.white,
    },
    text : {
        marginVertical : SIZES.base,
        color : COLORS.gray,
        ...FONTS.body3
    }
})