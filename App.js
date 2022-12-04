import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from './src/pages/Task';
import NewTask from './src/pages/NewTask';
import DetailTask from './src/pages/Details';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Task'>
        <Stack.Screen 
         name="Activity Manager App"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
