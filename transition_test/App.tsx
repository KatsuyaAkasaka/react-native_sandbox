import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import { NativeBaseProvider } from "native-base";
// import { Ionicons } from '@expo/vector-icons';
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import AppNavigator from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App: React.FC = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const _loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([
        require("./assets/splash.png"),
        // require('./assets/images/robot-prod.png'),
      ]),
      // Font.loadAsync({
      // ...Ionicons.font,
      // 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      // }),
    ]);
    return;
  };
  const _handleLoadingError = (error: Error) => console.warn(error);
  const _handleFinishLoading = () => setLoadingComplete(true);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={_handleFinishLoading}
      />
    );
  } else {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
