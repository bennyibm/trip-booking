import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { HeadBar, RatingComponent, TextButton } from "../components";
import { COLORS, images, SIZES } from "../utils/constants";
import Destination from '../models/destination';
import { useRoute, useNavigation } from '@react-navigation/native';
import { STYLES, FONTS } from "../utils/constants/theme";
import CustomTitle from '../components/custom-title';
import DestinationOptionCard from '../components/destination-option-card';
import CustomTouchableOpacity from "../components/custom-touchable-opacity";

export default function DestinationDetails(){

    const {destination} = useRoute().params
    const {goBack} = useNavigation()
    
    return(
        <SafeAreaView style={styles.container}>
            {/* header */}
            <View style={{flex : 2}}>
                <HeadBar 
                    tintColor={COLORS.white}
                    onPresBackButton={() => goBack() } 
                    showBackButton
                    iconMenu="menu"
                    style={{
                        position : "absolute",
                        top : 10
                    }} 
                />
                <View
                    style={{
                        flex : 1,
                    }}
                >
                    <Image
                        source={images[destination.image]}
                        style={{width : "100%", height : "80%"}}
                    />
                    <View
                        style={{
                            flex : 1,
                            position : "absolute",
                            width : "100%",
                            height :  "80%",
                            backgroundColor : COLORS.black,
                            opacity : 0.5
                        }}
                    />
                </View>
                

                <View
                    style={{
                        flex : 1,
                        position : "absolute",
                        bottom :"5%",
                        left: "5%",
                        right :"5%",
                        borderRadius : SIZES.radius * 1.5,
                        padding :SIZES.padding,
                        backgroundColor : COLORS.white,
                        ...STYLES.shadow
                    }}
                >
                     <View style={{flexDirection : "row" }}>
                         <View style={{...STYLES.shadow}}>
                             <Image 
                                source={images[destination?.image]}
                                resizeMode="cover"
                                style={{
                                    width : 70,
                                    height : 70,
                                    borderRadius : SIZES.radius * 2
                                }}
                            />
                         </View>

                         <View
                            style={{

                            }}
                         >
                             <CustomTitle text={destination.title} type="h3" customStyles={{fontWeight : "bold"}} />
                             <Text style={{marginLeft : 5}}>{destination.location}</Text>

                             <RatingComponent rate={destination.rating}/>
                         </View>

                     </View>

                     
                     <View 
                        style={{}}
                     >
                        <Text
                            style={{
                                color: COLORS.gray,
                                ...FONTS.body4,
                                textAlign :"justify"
                            }}
                        >
                            Lorem ipsum sit dolor amet consecter, Lorem ipsum sit dolor amet consecterLorem ipsum sit dolor amet consecter
                        </Text>
                    </View>
                </View>

            </View>
            

            {/* body */}
            <View 
                style={{
                    flex : 1.5,
                    // marginTop : SIZES.padding * -1,
                }}
            >
                {/* options */}
                <View 
                    style={{
                        flexDirection : "row", 
                        marginTop : SIZES.base, // * -1 ,
                        paddingHorizontal : SIZES.padding ,
                        justifyContent : "space-between" 
                    }}
                >
                    <DestinationOptionCard label="Villa" icon="villa" />
                    <DestinationOptionCard label="Parkin" icon="parking" />
                    <DestinationOptionCard label="4" icon="villa" />
                </View>
                
                <View
                    style={{
                        marginTop : SIZES.padding,
                        paddingHorizontal : SIZES.padding,
                    }}
                >
                    <CustomTitle text="About" type="h2" />
                    <Text 
                        style={{
                            ...FONTS.body4,
                            marginLeft : 5,
                            marginVertical : SIZES.radius,
                            color : COLORS.gray
                        }}
                    >
                        Lorem ipsum sit dolor amet consecter, Lorem ipsum sit dolor amet consecterLorem ipsum sit dolor amet consecter
                        Lorem ipsum sit dolor amet consecter, Lorem ipsum sit dolor amet consecterLorem ipsum sit dolor amet consecter
                    </Text>
                </View>
                
            </View>
            
            {/* footer */}
            <View 
                style={{
                    flex : 0.5,
                    paddingHorizontal : SIZES.padding,
                }}
            > 
                <LinearGradient 
                    colors={["#edf0fc", "#d6dfff"]}
                    start={{x : 0, y : 0}}
                    end={{x : 1, y : 0}}
                    style={{ 
                        height : 70,
                        width : "100%",
                        borderRadius : SIZES.radius 
                    }}
                >
                    <View
                        style={{
                            flex : 1, 
                            flexDirection : "row",
                            alignItems : "center",
                            // justifyContent : "center",
                            // alignContent : "center"
                        }}
                    >
                        <View
                            style={{
                                flex : 1,
                                marginHorizontal : SIZES.padding,
                                justifyContent : "center"
                            }}
                        >
                            
                            <Text style={{...FONTS.h1}}> $1000 </Text>
                        </View> 

                        <View
                            style={{
                                flex : 1,
                                alignItems : "center",
                                // alignContent : "center",
                                // justifyContent : "center"
                            }}
                        >
                            
                            <TextButton text="booking" textTransform="uppercase" style={{width : 130, height : "80%"}}/>
                        </View>   
                    </View>
                </LinearGradient>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    viewDefault : {
        flex : 1,
    }
})