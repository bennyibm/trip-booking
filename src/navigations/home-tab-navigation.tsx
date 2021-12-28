import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Destinations, Home } from "../screens";
import { Image, View } from "react-native";
import { COLORS, icons, images } from "../utils/constants";
import { HeadBar } from "../components";
import BottomTabBarComponent from '../components/bottom-tab';


type props ={
    icon : "airplane" | "back" | "barMenu" | "bed" | "bookmark" | "bus" | "compass" | "eat" | "event" | "home" | "menu" | "parking" | "search" | "starEmpty" | "starFull" | "starHalf" | "taxi" | "train" | "user" | "villa" | "wind"
    focused : boolean
}
const Tab = createBottomTabNavigator()

const tabOptions = {
    showLabel : false,
    style: {
        height : 90,
        shadowColor : "#000",
        shadowOffset : {
            width : 0,
            height : 10
        },
        shadowOpacity : 0.53,
        shadowRadius : 13.97,
        elevation : 21,
    }
}

function TabBarIcon({icon, focused} : props) {
    return(
        <Image 
            source={icons[icon]} 
            style={{
                tintColor : focused ? COLORS.primary : COLORS.gray,
                width : 30, 
                height : 30
            }} 
        />
    )
}

export default function HomeTabsNavigation(){
    return(
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            header : () => <></>,
            tabBarLabel : "benny",
          tabBarIcon: ({ focused}) => {
            
            // You can return any component that you like here!
            return <TabBarIcon icon={route.name.toLowerCase()} focused={focused} />;
          }
        })} >
            
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="search" component={Home} />
            <Tab.Screen name="bookmark" component={Home} />
            <Tab.Screen name="user" component={Home} />

        </Tab.Navigator>
    )
}