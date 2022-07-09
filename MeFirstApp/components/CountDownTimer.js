import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CountDown from "react-native-countdown-component";

const CountDownTimer = () => {
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {
    var d = "30";
    setTotalDuration(d);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          React Native CountDown Timer | react-native-countdown-component
        </Text>

        <CountDown
          until={totalDuration}
          timetoShow={("H", "M", "S")}
          onFinish={() => alert("finished")}
          onPress={() => alert("hello")}
          size={20}
        />
      </View>
    </SafeAreaView>
  );
};

export default CountDownTimer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
});
