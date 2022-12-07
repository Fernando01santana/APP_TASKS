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
      <Stack.Navigator initialRouteName="tasks">
        <Stack.Screen 
         name="Minhas atividades"
         component={Task}
         options={{
           headerTintColor:"#f92e6a"
         }}
        />

        <Stack.Screen 
         name="Nova atividade"
         component={NewTask}
         options={{
           headerTintColor:"#f92e6a"
         }}
        />

        <Stack.Screen 
         name="Detalhe da atividade"
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
