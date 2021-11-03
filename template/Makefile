.PHONY: init_react_navigation
init_react_navigation:
	yarn add @react-navigation/native
	expo install react-native-screens react-native-safe-area-context
	expo install @react-navigation/bottom-tabs @react-navigation/drawer @react-navigation/stack

.PHONY: init_native_base
init_native_base:
	yarn add native-base styled-components styled-system
	expo install react-native-svg react-native-safe-area-context

.PHONY: init_other_libraries
init_other_libraries:
	expo install expo-app-loading expo-asset expo-font @expo/vector-icons
	yarn add prettier -D

.PHONY: init_node_modules
init_node_modules:
	rm -rf node_modules
	make init_react_navigation
	make init_native_base
	make init_other_libraries

.PHONY: removeMakefile
removeMakefile:
	rm ../Makefile

.PHONY: init
init:
	rm -rf .git .gitignore package.json && \
	rm App.tsx && \
	curl https://raw.githubusercontent.com/KatsuyaAkasaka/react-native_sandbox/master/template/package.json > package.json && \
	yarn install && \
	curl https://raw.githubusercontent.com/KatsuyaAkasaka/react-native_sandbox/master/template/.prettierrc > .prettierrc && \
	curl https://raw.githubusercontent.com/KatsuyaAkasaka/react-native_sandbox/master/template/.prettierignore > .prettierignore && \
	curl https://raw.githubusercontent.com/KatsuyaAkasaka/react-native_sandbox/master/template/App.tsx > App.tsx
	echo "bye👋"
	rm Makefile
