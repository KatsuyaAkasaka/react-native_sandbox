import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { home } from "../screens/mypage/home";
import { details } from "../screens/mypage/details";

const Stack = createStackNavigator();

// home画面の構成を作成
export const mypageNav: React.FC = (props: any) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="Home"
        options={{ title: "マイページ" }}
        component={home}
      />
      <Stack.Screen
        name="Details"
        options={{ title: "マイページ詳細" }}
        component={details}
      />
    </Stack.Navigator>
  );
};
