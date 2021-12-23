import React from 'react';
import {View, StatusBar, useColorScheme, SafeAreaView} from 'react-native';
import {Button} from 'ui';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Button onPress={() => {}} />
      </SafeAreaView>
    </View>
  );
}
