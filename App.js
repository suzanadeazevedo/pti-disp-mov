//import { StyleSheet } from "react-native";
import Produtos from "./components/products";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Produtos" component={Produtos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
