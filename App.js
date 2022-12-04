import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from './src/pages/Task';
import NewTask from './src/pages/NewTask';
import DetailTask from './src/pages/Details';
import MapView from './src/pages/MapView/MapView';
import MapLocation from './src/pages/MapView/MapView';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task">
        <Stack.Screen 
         name="Task"
         component={Task}
         options={{
           headerTintColor:"#f92e6a"
         }}
        />

        <Stack.Screen 
         name="New Task"
         component={NewTask}
         options={{
           headerTintColor:"#f92e6a"
         }}
        />

        <Stack.Screen 
         name="Details"
         component={DetailTask}
         options={{
           headerTintColor:"#f92e6a"
         }}
        />
        <Stack.Screen 
         name="map"
         component={MapLocation}
         options={{
           headerTintColor:"#f92e6a"
         }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
