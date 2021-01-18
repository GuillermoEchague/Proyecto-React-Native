import React ,{useState} from 'react';
import {Text,
    View,
    StyleSheet,
    TextInput, Button} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';    
import colors from '../../config/colors';
import usePreferences from '../../hook/usePreferences';
import useForm from '../../hook/useForm';
import AddPhoto from '../../components/Photo/AddPhoto';
import {useUserInformation} from '../../context/User';

const styles = StyleSheet.create({

    header: {
      backgroundColor: colors.black,
      height: 400,
      justifyContent: 'flex-end',
    },
    
    inputContainer: {
      paddingTop: 50,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: colors.white,
    },

    textInputContainer: {
      width: '80%',
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight: 20,
      borderColor: colors.green,
      borderTopRightRadius: 100,
      borderBottomRightRadius: 100,
      borderWidth: 1,
      justifyContent: 'space-between',
    },
    textInput: {
      fontSize: 20,
      borderColor:'#ccc',
      borderWidth:1,
      marginVertical: 10,
      paddingLeft: 10,
      color: '#000',
    },
    inputSubmit: {
      backgroundColor: colors.green,
      padding: 5,
      right: 40,
      borderRadius: 35,
    },
});


const Summary = () => {
        
  const {theme} = usePreferences();
   const insets = useSafeAreaInsets();
  const {name, updateName, email, updateEmail,phone, updatePhone, photo} = useUserInformation();
   
  return (
           
    <KeyboardAwareScrollView
    contentContainerStyle={[
      styles.container,
      {paddingTop: insets.top},
    ]}>
    

        <AddPhoto uri={photo} />
        <TextInput
         placeholder="Escribe tu nombre"
         value={name}
         autoCapitalize="none"
         onChangeText={(text) => updateName(text)}
         style={styles.textInput}
         color={theme==='dark'?colors.white:colors.black}
         placeholderTextColor = {theme==='dark'?colors.white:colors.black}
         
        />

    <TextInput
         placeholder="Correo"
         value={email}
         autoCapitalize="none"
         onChangeText={(text) => updateEmail(text)}
         style={styles.textInput}
         color={theme==='dark'?colors.white:colors.black}
         placeholderTextColor = {theme==='dark'?colors.white:colors.black}
         
        />

    <TextInput
         placeholder="Numero de teléfono"
         value={phone}
         autoCapitalize="none"
         onChangeText={(text) => updatePhone(text)}
         style={styles.textInput}
         color={theme==='dark'?colors.white:colors.black}
         placeholderTextColor = {theme==='dark'?colors.white:colors.black}
        />
   <Button title='Registrar' onPress={()=>{
     console.log(name);
     console.log(email);
     console.log(phone);

   }}/>

   </KeyboardAwareScrollView>

   
    );
};
export default Summary;