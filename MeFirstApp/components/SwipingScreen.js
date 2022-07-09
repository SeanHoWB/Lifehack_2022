import React, { Component } from "react";
import Swiper from "react-native-deck-swiper";
import { Button, StyleSheet, Text, View } from "react-native";
import Exemple from "./Swiper.js";

export default function Swipingscreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Exemple />;
    </SafeAreaView>
  );
}
