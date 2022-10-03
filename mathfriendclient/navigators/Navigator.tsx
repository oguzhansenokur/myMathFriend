import {createStackNavigator} from '@react-navigation/stack';
import {Calculator} from '../containers/calculator';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { FormulaStorage } from '../containers';

const Drawer = createDrawerNavigator();

export default function MyStack() {
  // const [toggleDrawer,setToggleDrawer]=React.useState();


  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Home" component={Calculator}  />
        <Drawer.Screen name="Formula Storage" component={FormulaStorage}  />
        <Drawer.Screen name="Formula Operation" component={Calculator}  />
        <Drawer.Screen name="Theme Settings" component={Calculator}  />
        <Drawer.Screen name="About" component={Calculator}  />



      </Drawer.Navigator>
    </NavigationContainer>
  );
}
