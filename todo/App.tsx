import React from "react";
import { AppContainer } from "./src/screens/index";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import fs from "fs";

// export const App = () => {
//   <AppContainer />;
// }

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return <AppContainer />;
  }
  async _cacheResourcesAsync() {
    const images = [require("./assets/nyan.gif")];

    const cacheImages = images.map((image) => {
      Asset.fromModule(image).downloadAsync();
    });
    return new Promise<void>(async (resolve, reject) => {
      try {
        await Promise.all(cacheImages);
        setTimeout(() => {
          resolve();
        }, 10000);
      } catch (e) {
        reject();
      }
    });
  }
}
