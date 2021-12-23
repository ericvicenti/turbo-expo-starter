import { StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "./Themed";
import { Button } from "ui";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>
          See the Shared MonoRepo Component
        </Text>
        <Button onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
});
