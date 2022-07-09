import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Swiperscreen from "./components/Swiper";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Image
        style={styles.image}
        source={require("./assets/RecycleSymbol.png")}
      />
      <Text>{"\n"}Welcome to MeFirstApp!</Text>
      <Text>
        Log in to begin your recycling journey{"\n"}
        {"\n"}
      </Text>
      <Button
        onPress={() => navigation.navigation(Swipingscreen)}
        title={"Login"}
      />
    </SafeAreaView>
  );
}

function Swiperingerscreen({ navigation }) {
  return <Swiperscreen />;
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Swiperingerscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
