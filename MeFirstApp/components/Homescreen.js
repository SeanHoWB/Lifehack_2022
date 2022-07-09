import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, SafeAreaView, Image } from "react-native";
import Swipingscreen from "./SwipingScreen";

export default function Homescreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.image}
        source={require("../assets/RecycleSymbol.png")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
});
