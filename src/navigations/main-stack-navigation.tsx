import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HeadBar } from "../components";
import { OnBoarding } from "../screens";
import { COLORS, SCREENS_NAMES } from "../utils/constants";
import Home from '../screens/home';
import { HomeTabsNavigation } from ".";
import DestinationDetails from '../screens/detination-details';

const Stack = createNativeStackNavigator();

export default function MainStakNavigation(){
    return(
        <Stack.Navigator initialRouteName="onBoarding">
            <Stack.Screen 
                name={SCREENS_NAMES.ON_BOARDING} 
                component={OnBoarding} options={{
                headerStyle : { backgroundColor : COLORS.white},
                header : (props) => <HeadBar showBackButton={false} />
            }}/>

            <Stack.Screen 
                name="homeTab"
                component={HomeTabsNavigation}
                options={{
                    // headerShown : false,
                    header : (navigation) => <HeadBar showBackButton iconMenu="menu" onPresBackButton={() => navigation.navigation.goBack()} />
                }}
            />

            <Stack.Screen 
                name={SCREENS_NAMES.DESTINATION_DETAILS}
                component={DestinationDetails}
                options={{
                    headerShown : false
                }}
            />
        </Stack.Navigator>
    )
}