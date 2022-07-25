import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./navigation/tab";
import { OrderDelivery, Restaurant } from "./screens";
import { store } from "./store";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import { View, Text } from "react-native";
import { fonts } from "./utils";

// take a look at last
// 1: see the tabs component for active tab styling

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts(fonts);
  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading Fonts...</Text>
      </View>
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
