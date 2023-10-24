import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.green}>just green</Text>
      <Text style={styles.bigPurple}>just bigPurple</Text>
      <Text style={[styles.bigPurple, styles.green]}>bigPurple, then green</Text>
      <Text style={[styles.green, styles.bigPurple]}>green, then bigPurple</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  bigPurple: {
    color: "purple", //awalnya blue
    fontWeight: "bold",
    fontSize: 30,
  },
  green: {
    color: "green", //awalnya green
  },
});

export default LotsOfStyles;