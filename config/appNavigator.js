
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screen/login";
import RegisterScreen from "../screen/register";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;