import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/home";
import LoginScreen from "../screen/login";
import RegisterScreen from "../screen/register";
import AddCoin from "../screen/childScreen/addCoin";
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Add coin"
        component={AddCoin}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
