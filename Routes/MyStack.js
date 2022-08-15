
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import Root from '../screens/Root';
import Task from '../screens/Task';

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="Task" component={Task} />
    </Stack.Navigator>
  )
}

export default MyStack