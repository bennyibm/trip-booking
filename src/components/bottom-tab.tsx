import { useRoute, useNavigation } from '@react-navigation/native';
import React from "react";
import { Text, View, SafeAreaView, Image } from 'react-native';
import { COLORS, icons } from "../utils/constants";

export default function BottomTabBarComponent({props} : any){
    const {navigation} = props

    return(
        <SafeAreaView style={{flexDirection : "row" , alignItems : "center", justifyContent : "center", marginVertical : 10}}>
            <BottomBarItem icon="home" text="Accueil" navigation={navigation}/>
            <BottomBarItem icon="search" text="Rechercher" navigation={navigation} />
            <BottomBarItem icon="bookmark" text="Favoris"  navigation={navigation} />
            <BottomBarItem icon="user" text="Profil"  navigation={navigation}/>
        </SafeAreaView>
    )
}

function BottomBarItem({icon, text, navigation} : {icon : "home" | "search" | "bookmark" | "user", text : string, navigation : any}){
    console.log(`icon : ${icon} isFocused : ${navigation.isFocused()}`)
    
    return(
        <View style={{
            flexDirection : "row",
            marginHorizontal : 10
        }}>
            <Image source={icons[icon]} style={{
                width : 30,
                height : 30,
                tintColor : true ? COLORS.primary : COLORS.black
            }} />
        </View>
    )
}