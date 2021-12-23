import React from "react";
import { Button as RNButton } from "react-native";

export function Button({ onPress }: { onPress: () => void }) {
  return <RNButton title="Boop3" onPress={onPress} />;
}
