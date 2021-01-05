  
import React, {useEffect} from "react";
import {IconButton} from "react-native-paper";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../screens/Home";
import Movie from "../screens/Movie";
import News from "../screens/News";
import Popular from "../screens/Popular";
import Search from "../screens/Search";
import Logout from "../screens/Logout";
import Login from "../screens/Login";
import {connect} from "react-redux";
import {isLoggedIn} from "../redux/actions"; 
import Summary from "../screens/registration/Summary";

const Stack = createStackNavigator();

const StackNavigation = ({navigation, loggedIn, isCurrentlyLoggedIn})=>{
  
  
  useEffect(() => {
    isCurrentlyLoggedIn();
  }, [isCurrentlyLoggedIn]);

  if (loggedIn === undefined) {
    return null;
  }

    const buttonLeft = (screen)=>{

        switch(screen){
            case 'search':
            case 'movie':
            return(
                <IconButton icon="arrow-left" onPress={()=>navigation.goBack()} />
            );

            default: 
            return (
                <IconButton icon="menu" onPress={()=>navigation.openDrawer()} />
            )
        }
    }

    const buttonRight = () => {
        return(
            <IconButton
            icon="magnify"
            onPress={() => navigation.navigate('search')}
            />
        )
    }

    return(
      
        <Stack.Navigator>
          {loggedIn ? (
          <>
            <Stack.Screen name="home" component={Home} 
            options={{title: 'TheMovieApp', headerLeft: ()=> buttonLeft("home"), headerRight: ()=>buttonRight()}} />
            
            <Stack.Screen name="movie" component={Movie} 
            options={{title: '', headerTransparent:true, headerLeft: ()=> buttonLeft("movie"), headerRight: ()=>buttonRight()}} />
            
            <Stack.Screen name="news" component={News} 
            options={{title: 'Nuevas Peliculas', headerLeft: ()=> buttonLeft("news"), headerRight: ()=>buttonRight()}} />
            
            <Stack.Screen name="popular" component={Popular} 
            options={{title: 'Peliculas Populares', headerLeft: ()=> buttonLeft("popular"), headerRight: ()=>buttonRight()}} />
            
            <Stack.Screen name="search" component={Search} 
            options={{title: '', headerTransparent:true, headerLeft: ()=> buttonLeft("search")}} />
            
            <Stack.Screen name="registration" component={Summary} 
            options={{title: 'Registro de Usuario', headerLeft: ()=> buttonLeft("logout"), headerRight: ()=>buttonRight()}} />

            <Stack.Screen name="logout" component={Logout} 
            options={{title: 'Salir', headerLeft: ()=> buttonLeft("logout"), headerRight: ()=>buttonRight()}} />
         </>
        ) : (
          <Stack.Screen name="TheMovieApp" component={Login} />
          )}
        </Stack.Navigator>
       
    )
};


const mapStateToProps = (state) => {
  return {
    loggedIn: state.login.valid,
  };
};

const mapDispatchToProps = (dispatch) => ({
  isCurrentlyLoggedIn: () => dispatch(isLoggedIn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StackNavigation);
