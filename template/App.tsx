import React, { useState } from 'react'
import {
  NativeBaseProvider,
  Center,
  VStack,
  HStack,
  Heading,
  Code,
  Link,
  Text,
  useColorMode,
  extendTheme,
  Switch,
} from 'native-base'
import { FontAwesome } from '@expo/vector-icons'
import AppLoading from 'expo-app-loading'
import { Asset } from 'expo-asset'
import Font from 'expo-font'
// import AppNavigator from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

const theme = extendTheme({ config })

const App: React.FC = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)
  const _loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([
        require('./assets/splash.png'),
        require('./assets/icon.png'),
        require('./assets/favicon.png'),
      ]),
      Font.loadAsync({
        ...FontAwesome.font,
      }),
    ])
    return
  }
  const _handleLoadingError = (error: Error) => {}
  const _handleFinishLoading = () => setLoadingComplete(true)
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={_handleFinishLoading}
      />
    )
  } else {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
          <Center
            _dark={{ bg: 'blueGray.900' }}
            _light={{ bg: 'blueGray.50' }}
            px={4}
            flex={1}
          >
            <VStack space={5} alignItems='center'>
              <Heading size='lg'>Welcome to NativeBase</Heading>
              <HStack space={2} alignItems='center'>
                <Text>Edit</Text>
                <Code>App.tsx</Code>
                <Text>and save to reload.</Text>
              </HStack>
              <Link href='https://docs.nativebase.io' isExternal>
                <Text color='primary.500' underline fontSize={'xl'}>
                  Learn NativeBase
                </Text>
              </Link>
              <ToggleDarkMode />
            </VStack>
          </Center>
        </NativeBaseProvider>
      </SafeAreaProvider>
    )
  }
}

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack space={2} alignItems='center'>
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light' ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  )
}

export default App
