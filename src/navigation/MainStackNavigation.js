import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TabNavigation from './TabNavigation';
import Add from '../screens/Add';
import { TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

const Stack = createNativeStackNavigator()

const MainStackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Appointment"
                    component={TabNavigation}
                    options={({ navigation })=>({
                        headerTintColor:'#fff',
                        headerStyle:{
                            backgroundColor:'#2478ff'
                        },
                        headerRight:(props)=>(
                            <TouchableOpacity onPress={()=>navigation.navigate('Add')}>
                                <Feather name="plus" color="#fff" size={28} />
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen 
                    name="Add"
                    component={Add}
                    options={{
                        headerTintColor:'#fff',
                        headerStyle:{
                            backgroundColor:'#2478ff'
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigation;