import React, { useState } from "react";
import { FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CustomTouchableOpacity, HeadBar, OverlayBlock } from "../components";
import CustomTitle from "../components/custom-title";
import DestinationItemCard from "../components/destination-item-card";
import DestinationOptionCard from "../components/destination-option-card";
import { DestinationsDummyDatas } from "../models";
import { COLORS, FONTS, SIZES, images, SCREENS_NAMES } from "../utils/constants";
import { useNavigation } from '@react-navigation/native';
import Destination from '../models/destination';
import { STYLES } from "../utils/constants/theme";

function renderItem(destination : Destination, onPress? : (destination : Destination) => void){
    return (
        <DestinationItemCard 
            destination={destination} 
            onPress={() => onPress && onPress(destination)}
        />
    )
}

export default function Home(){
    const [destinations, setDestinations] = useState(DestinationsDummyDatas )
    const {navigate} = useNavigation()
    return(
        <SafeAreaView style={styles.container}>
             {/* <HeadBar /> */}
            <CustomTouchableOpacity 
                style={{flex : 1}} 
                activeOpacity={0.8}
            >
                <View style={styles.heroWrapper}>
                
                    {/* <CustomTitle 
                        text="Are you ready for adventure?"
                        customStyles={styles.heroText}
                    /> */}

                    <Text 
                        style={styles.heroText}
                    >
                        Are you ready for adventure?
                    </Text>



                    <OverlayBlock
                        opacity={0.4}
                        bgColor={COLORS.primary}
                        style={{
                            width : "100%",
                            height : "100%",
                            borderRadius : SIZES.base
                        }}
                    >
                        <Image  source={ images.homeBanner }
                            style={styles.heroImage}
                        />
                    </OverlayBlock>
                </View>
            </CustomTouchableOpacity>
            
            {/* destinations options goes here */}
            <View style={{flex : 1, justifyContent : "center"}}>
                <View style={{ flexDirection: "row"}} >
                    <DestinationOptionCard label="Flight" icon="airplane" bgColors={["#46aeff", "#5884ff"]} onPress={() => console.log(`option-item-flght clicked`)} />
                    <DestinationOptionCard label="Train" icon="train" bgColors={["#fddf90", "#fcda13"]} onPress={() => console.log(`option-item-train clicked`)}/>
                    <DestinationOptionCard label="Bus" icon="bus" bgColors={["#e973ad", "#da5df2"]} onPress={() => console.log(`option-item-bus clicked`)}/>
                    <DestinationOptionCard label="Taxi" icon="taxi" bgColors={["#fcaba8", "#fe6bba"]} onPress={() => console.log(`option-item-taxi clicked`)}/>
                </View>
                <View style={{ flexDirection: "row"}} >
                    <DestinationOptionCard label="Hotel" icon="bed" bgColors={["#46aeff", "#5884ff"]} onPress={() => console.log(`option-item-hotel clicked`)}/>
                    <DestinationOptionCard label="Eats" icon="eat" bgColors={["#fddf90", "#fcda13"]} onPress={() => console.log(`option-item-eats clicked`)}/>
                    <DestinationOptionCard label="Adventure" icon="compass" bgColors={["#e973ad", "#da5df2"]} onPress={() => console.log(`option-item-adventure clicked`)}/>
                    <DestinationOptionCard label="Events" icon="event" bgColors={["#fcaba8", "#fe6bba"]} onPress={() => console.log(`option-item-events clicked`)}/>
                </View>
            </View>
            
            <View
                style={{
                    flex : 1,
                    justifyContent : "center", 
                    marginVertical : SIZES.padding, 
            }}
            >
                <CustomTitle text="Destinations" type="body2" customStyles={{marginVertical : 10, marginLeft :SIZES.padding}} />
                <FlatList
                    data={destinations}
                    renderItem={ ({item}) => renderItem(item, () => navigate(SCREENS_NAMES.DESTINATION_DETAILS, {destination : item}) ) }
                    keyExtractor={destination => `destination-${destination.id}` }
                    // ItemSeparatorComponent={() => <View style={{paddingHorizontal : SIZES.padding }}></View>}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.white,
    },
    heroWrapper : {
        flex : 1,
        marginVertical : SIZES.base,
        marginHorizontal : SIZES.padding / 3,
        justifyContent : "center",
        alignItems : "flex-start"
    },
    heroImage : {
        width : "100%",
        height: "100%",
        borderRadius : SIZES.radius,
        resizeMode : "cover",
    },
    heroText : {
        color : COLORS.white,
        ...FONTS.h1,
        fontWeight : "bold",
        position : "absolute",
        zIndex : 2,
        textAlign : "center",
        marginLeft : SIZES.base,
    }
})