import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

function TryHarder({ score }) {
  return (
    <Text style={styles.text}>
      Oops, you only got {score} correct, try harder next time! {"\n"}
      {"\n"}
    </Text>
  );
}

function GoodScore({ score }) {
  return (
    <Text style={styles.text}>
      Hey, you managed to obtain {score} correct, that's pretty good! {"\n"}
      {"\n"}
    </Text>
  );
}

function PerfectScore({ score }) {
  return (
    <Text style={styles.text}>
      Congratulations, you got all {score} correct! You are now a recycling
      expert~ {"\n"}
      {"\n"}
    </Text>
  );
}

function Congratulations({ route, navigation }) {
  const { score } = route.params;
  if (score < 6) {
    return (
      <SafeAreaView style={styles.container}>
        <TryHarder score={score} />
        <Button
          onPress={() => navigation.push("Swiperscreen")}
          title={"Click Here To Play Again!"}
        />
      </SafeAreaView>
    );
  } else if (score < 12) {
    return (
      <SafeAreaView style={styles.container}>
        <GoodScore score={score} />
        <Button
          onPress={() => navigation.push("Swiperscreen")}
          title={"Click Here To Play Again!"}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <PerfectScore score={score} />
        <Button
          onPress={() => navigation.push("Swiperscreen")}
          title={"Click Here To Play Again!"}
        />
      </SafeAreaView>
    );
  }
}

export default Congratulations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
