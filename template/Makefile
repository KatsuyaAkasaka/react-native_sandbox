.PHONY: init_react_navigation
init_react_navigation:
	yarn add @react-navigation/native
	expo install react-native-screens react-native-safe-area-context
	expo install @react-navigation/bottom-tabs @react-navigation/drawer @react-navigation/stack

.PHONY: init_native_base
init_native_base:
	yarn add native-base styled-components styled-system
	expo install react-native-svg react-native-safe-area-context

.PHONY: init_others
init_others:
	expo install expo-app-loading expo-asset expo-font @expo/vector-icons

.PHONY: init
init:
	rm -rf node_modules
	make init_react_navigation
	make init_native_base
	make init_others
