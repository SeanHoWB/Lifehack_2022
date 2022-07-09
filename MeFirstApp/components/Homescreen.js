import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, Image, Button, StyleSheet } from "react-native";

const handlePress = (navigation) => {
  console.log("Button pressed");
  navigation.push("Swiperscreen");
};

const Homescreen = ({ navigation }) => {
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
      <Button onPress={handlePress(navigation)} title={"Login"} />
    </SafeAreaView>
  );
};

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
