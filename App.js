import React, {useState,useMemo} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Provider as PaperProvider, 
  DarkTheme as DarkThemePaper, 
  DefaultTheme as DefaultThemePaper,
  DefaultTheme,} 
  from 'react-native-paper';
import {NavigationContainer, 
  DarkTheme as DarkThemeNavigation, 
  DefaultTheme as DefaultThemeNavigation,} 
  from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import PreferencesContext from "./src/context/PreferencesContext";
import {Provider} from "react-redux";
import UserHandler from "./src/context/User";

import store from "./src/redux/store";
import { login } from "./src/redux/actions";


const App: () => React$Node = () => {
  const [theme, setTheme] = useState("dark");

  DefaultThemePaper.colors.primary = "#1ae1f2";
  DarkThemePaper.colors.primary="#1ae1f2";
  DarkThemePaper.colors.accent ="#1ae1f2";

  DarkThemeNavigation.colors.background="#192734";
  DarkThemeNavigation.colors.card = "#15212b";

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "Light":"dark");
  }

  const preference = useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme],
  );
    



  return (
    <>
    
    <PreferencesContext.Provider value={preference}>
    <PaperProvider theme={theme === "dark"? DarkThemePaper : DefaultThemePaper}>
      <StatusBar barStyle={theme === "dark"? "light-content" : "dark-content"}/>
      
        <NavigationContainer theme ={theme === "dark"? DarkThemeNavigation : DefaultThemeNavigation}>
          <Provider store={store}>
          
          <UserHandler>
          <Navigation/>
          </UserHandler>
         
          </Provider>
      </NavigationContainer>
      
    </PaperProvider>
    </PreferencesContext.Provider>
    
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
