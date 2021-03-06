import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native';
import {DrawerContentScrollView} from "@react-navigation/drawer";
import {Drawer, Switch, TouchableRipple, Text} from "react-native-paper";
import usePreference from "../hook/usePreferences";

export default function DrawerContent(props) {
    const {navigation} = props;
    const [active, setActive]=useState("home")    
    
    const {theme, toggleTheme} = usePreference();

    const onChangeScreen = (screen)=>{
        setActive(screen);
        navigation.navigate(screen);
    }

    return (
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item label="Inicio" active={active === "home"} onPress={()=> onChangeScreen('home')}/>
                <Drawer.Item label="Peliculas populares" active={active === "popular"} onPress={()=> onChangeScreen('popular')}/>
                <Drawer.Item label="Nuevas peliculas" active={active === "news"} onPress={()=> onChangeScreen('news')} />
                <Drawer.Item label="Registro de Usuario" active={active === "registration"} onPress={()=> onChangeScreen('registration')} />
                
            </Drawer.Section>

            <Drawer.Section title="Opciones">
                <TouchableRipple>
                    <>
                    <View style={styles.preference}>
                        <Text>Tema Oscuro</Text>
                        <Switch value={theme === "dark"} onValueChange={toggleTheme}/>
                    </View>
                    <View >
                    <Drawer.Item label="Salir" active={active === "logout"} onPress={()=> onChangeScreen('logout')} />
                    </View>
                    </>
                </TouchableRipple>
            </Drawer.Section>

        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({

    preference:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical:12,
        paddingHorizontal:16,
    },
})