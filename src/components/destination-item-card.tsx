import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { OverlayBlock } from ".";
import {Destination} from '../models';
import {COLORS, FONTS, images, SIZES } from "../utils/constants";
import CustomTouchableOpacity from "./custom-touchable-opacity";

type props = {
    destination : Destination
    onPress? : (title : string ) => void
}
export default function DestinationItemCard({destination , onPress} : props){

    return(
        <CustomTouchableOpacity 
            key={destination.id} 
            style={styles.container} 
            onPress={() => onPress && onPress(destination.title)} 
        >
            <Text 
                style={styles.title}
            >
                {destination.title}
            </Text>

            <OverlayBlock 
                style={{
                    flex : 1,
                    width : "100%",
                    height : "100%",
                    borderRadius : SIZES.radius,
                }}
                opacity={0.2}
            >
                    <Image 
                        source={images[destination.image]}
                        style={styles.image}
                    />
            </OverlayBlock>
            

        </CustomTouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex : 1,
        width : SIZES.width / 2,
        marginLeft : SIZES.padding,
        marginRight : SIZES.padding / 3,
        justifyContent : "center",
        alignItems : "center",
        borderRadius : SIZES.radius,
    },
    image : {
        width : "100%",
        height : "100%", 
        resizeMode : "cover",
        borderRadius : SIZES.radius
    },
    title : {
        color : COLORS.white,
        fontWeight : "bold",
        position : "absolute",
        justifyContent : "center",
        textAlign : "center",
        ...FONTS.h3,
        zIndex : 2
    }
})