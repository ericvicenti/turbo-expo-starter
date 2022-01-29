// import { Button } from "ui";
import { Button } from "tamagui";
import { View, Text } from "react-native";

export default function Web() {
  return (
    <View style={{ backgroundColor: "lightblue", flex: 1 }}>
      <Text>Web</Text>
      <Button>Press Me!</Button>
    </View>
  );
}
