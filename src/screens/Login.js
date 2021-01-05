import React, {useState} from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {connect} from "react-redux";
import { login } from "../redux/actions";
import OverlaySpinner from 'react-native-loading-spinner-overlay';
import {
  isLoginValidSelector,
  loginLoadingSelector,
} from '../redux/selectors/loginSelector';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';


    const Login = ({loginIsValid, loginIn, loading}) => {
    const [user, updateUser] = useState('');
    const [password, updatePassword] = useState('');
    const insets = useSafeAreaInsets();
    AntDesignIcon.loadFont();
    
    return (
        <KeyboardAwareScrollView>
          <OverlaySpinner visible={loading} color={'#2c3e50'} size="large" />
          <View style={[styles.header, {paddingTop: insets.top}]}>
            <Text style={styles.login}>Login</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.textInputContainer}>
              <TextInput
                placeholder="Usuario"
                value={user}
                autoCapitalize="none"
                onChangeText={(text) => updateUser(text)}
                style={styles.textInput}
              />
              <TextInput
                placeholder="*******"
                value={password}
                autoCapitalize="none"
                onChangeText={(text) => updatePassword(text)}
                style={styles.textInput}
                secureTextEntry
              />
            </View>
            <TouchableOpacity
              style={styles.inputSubmit}
              onPress={() => loginIn({user, password})}>
              <AntDesignIcon name="arrowright" color={'#ecf0f1'} size={60} />
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      );
    };

    const mapStateToProps = (state) => ({
        loginIsValid: isLoginValidSelector(state),
        loading: loginLoadingSelector(state),
      });

      const mapDispatchToProps = (dispatch) => ({
        loginIn: ({user, password}) => dispatch(login({user, password})),
      });

    export default connect(mapStateToProps, mapDispatchToProps)(Login);


    const styles = StyleSheet.create({
        container: {},
        header: {
          backgroundColor: '#15212b',
          height: 250,
          justifyContent: 'flex-end',
        },
        login: {
          margin: 20,
          fontSize: 40,
          color: '#ecf0f1',
        },
        inputContainer: {
          
          paddingEnd:10,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#ecf0f1',
          height: 350,
        },
        textInputContainer: {
          width: '85%',
          paddingTop: 5,
          paddingBottom: 30,
          paddingRight: 20,
          borderColor: '#2ecc71',
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
          borderWidth: 1,
          justifyContent: 'space-between',
        },
        textInput: {
          fontSize: 25,
          marginVertical: 20,
          paddingLeft: 10,
          color: '#95a5a6',
        },
        inputSubmit: {
          backgroundColor: '#2ecc71',
          padding: 5,
          right: 40,
          borderRadius: 35,
        },
      });