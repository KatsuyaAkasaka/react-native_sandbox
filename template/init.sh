#!/bin/sh
npm i -g expo-cli
expo init $1 --yarn --template="expo-template-blank-typescript"  # expo init nyannyan --yarn --template="expo-template-blank-typescript"
cd $1
curl https://raw.githubusercontent.com/KatsuyaAkasaka/react-native_sandbox/master/template/Makefile > Makefile
make init
