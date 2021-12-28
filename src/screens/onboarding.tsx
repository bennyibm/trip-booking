import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View, SafeAreaView, StyleSheet, Text } from "react-native";
import {HeadBar, TextButton} from "../components";
import CustomTitle from "../components/custom-title";
import { images, SCREENS_NAMES } from "../utils/constants";
import { STYLES, COLORS, SIZES, FONTS } from "../utils/constants/theme";

export default function OnBoarding(){
    const navigation = useNavigation()
    return(
        <SafeAreaView style={styles.container}>
            
            <View
                style={{
                    flex : 2,
                    alignItems : "center",
                    justifyContent : "center",
                    alignContent : "center"
                }} 
            >
                <Image resizeMode="contain" source={images.onboardingImage} style={styles.image} />
            </View>

            <View 
                style={{
                    flex : 1,
                    alignItems : "center",
                    justifyContent : "center",
                    alignContent : "center"
                }}
            >
                
                <View 
                    style={{
                        flex : 1, 
                        alignItems : "center",
                        marginHorizontal : SIZES.padding
                    }}
                
                >
                    {/* <Text style={{...FONTS.h3}}>Digital ticket</Text> */}
                    <CustomTitle text="Digital ticket" type="largeTitle" />

                    <Text 
                        style={{ 
                            color : COLORS.gray, 
                            marginTop : SIZES.padding, 
                            textAlign : "center",
                             ...FONTS.body3
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </View>
               
                
                
            </View>

             
            <View
                style={{
                    flex : 1,
                    alignItems : "center"
                }}
            >
                <TextButton text="Start" onPress={() => navigation.navigate("homeTab")}/>
            </View>
                
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.white,
    },
    view : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },
    image : {
        width : "100%",
        height : "100%",
    },
    
})