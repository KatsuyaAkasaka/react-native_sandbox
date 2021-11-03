import React from "react";
import { Buttons } from "../../components/buttons";
import { StyleSheet } from "react-native";
import { View } from "native-base";

import { Fugafuga } from "../../components/fugafuga";

export const details: React.FC = (props: any) => {
  return (
    <View style={styles.container}>
      <Fugafuga {...props} />
      <Buttons.back {...props} title="back to top home" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
