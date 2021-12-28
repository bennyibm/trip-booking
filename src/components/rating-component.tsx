import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { icons, images, SIZES } from "../utils/constants";
export default function RatingComponent({rate} : {rate : number}){
    console.log("rate : ", rate)
    const stars = []

    
    const fullStars = Math.floor(rate)
    const halfStars = Math.floor(5 - rate)
    const noStars = Math.floor(5 - fullStars - halfStars)
    let index = 0
    for(let i = 0; i < fullStars; i++){
        const star = <Image key={`star-${index}`} source={icons.starFull} style={styles.star} />
        stars.push(star)
        index++;
    }

    for(let i = 0; i < halfStars; i++){
        const star = <Image key={`star-${index}`} source={icons.starHalf} style={styles.star} />
        stars.push(star)
        index++;
    }

    for(let i = 0; i < noStars; i++){
        const star = <Image key={`star-${index}`} source={icons.starEmpty} style={styles.star} />
        stars.push(star)
        index++;
    }
    
    return(
        <View
            style={{
                flexDirection : "row",
            }}
        >
            {stars.map( star => star) }
        </View>
    )
}

const styles= StyleSheet.create({
    star : {
        width : 20,
        height : 20,
        margin : SIZES.padding / 10
    }
})