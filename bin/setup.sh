#!/usr/bin/env bash

APP=react-native-app-template

create-react-native-app $APP
cd $APP
sudo npm i -g exp
npm i -S native-base @expo/vector-icons react-navigation
