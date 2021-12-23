import { Button as RNButton } from "react-native";

export function Button({ onPress }: { onPress: () => void }) {
  return <RNButton title="Boop" onPress={onPress} />;
}
