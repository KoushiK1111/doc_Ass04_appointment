import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import upcoming from '../screens/Upcoming';
import Past from '../screens/Past';

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Upcoming"
                component={upcoming}
                options={{
                    tabBarLabelStyle:{
                        fontSize:16,
                        fontWeight:'bold'
                    },
                    tabBarActiveTintColor:'#2478ff',
                    tabBarInactiveTintColor:'black'
                }}
            />
            <Tab.Screen 
                name="Past"
                component={Past}
                options={{
                    tabBarLabelStyle:{
                        fontSize:16,
                        fontWeight:'bold'
                    },
                    tabBarActiveTintColor:'#2478ff',
                    tabBarInactiveTintColor:'black'
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;