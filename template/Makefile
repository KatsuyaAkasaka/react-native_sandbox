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

.PHONY: clone_codes
clone_codes:
	git clone https://github.com/KatsuyaAkasaka/react-native_sandbox
	cp -r ./react-native_sandbox/template/src ./
	cp react-native_sandbox/template/App.tsx ./
	cp react-native_sandbox/template/.prettierrc ./
	cp react-native_sandbox/template/.prettierignore ./
	cp react-native_sandbox/template/package.json ./
	rm -rf react-native_sandbox

.PHONY: init
init:
	rm -rf .git .gitignore package.json yarn.lock package-lock.json && \
	rm App.tsx && \
	make clone_codes && \
	yarn install && \
	echo "bye👋"
	rm Makefile
