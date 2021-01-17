import React ,{useState} from 'react';
import {Text,
    View,
    StyleSheet,
    TextInput, Button} from 'react-native';
    
import colors from '../../config/colors';
import usePreferences from '../../hook/usePreferences';
import useForm from '../../hook/useForm';

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
  const [name, updateName] = useState('');
   const [email, updateEmail] = useState('');
   const [phone, updatePhone] = useState('');
   const [photo, updatePhoto] = useState(null); 
           
  //const {name, updateName, email, updateEmail,phone, updatePhone, photo} = useUserInformation();
       
   const initialState = {
     name: name,
     email:email,
     phone:phone
   }

   const onSubmit = values =>{
     console.log(values);
   }
   const {subscribe, inputs, handleSubmit} = useForm(initialState, onSubmit)

  return (
           
      <View>

        <TextInput
         placeholder="Escribe tu nombre"
         value={inputs.name}
         autoCapitalize="none"
         onChangeText={subscribe('name')}
         style={styles.textInput}
         labelTag="Nombre"
         color={theme==='dark'?colors.white:colors.black}
         placeholderTextColor = {theme==='dark'?colors.white:colors.black}
         
        />

    <TextInput
         placeholder="Correo"
         value={inputs.email}
         autoCapitalize="none"
         onChangeText={subscribe('email')}
         style={styles.textInput}
         color={theme==='dark'?colors.white:colors.black}
         placeholderTextColor = {theme==='dark'?colors.white:colors.black}
         
        />

    <TextInput
         placeholder="Numero de teléfono"
         value={inputs.phone}
         autoCapitalize="none"
         onChangeText={subscribe('phone')}
         style={styles.textInput}
         color={theme==='dark'?colors.white:colors.black}
         placeholderTextColor = {theme==='dark'?colors.white:colors.black}
        />
   <Button title='Registrar' onPress={handleSubmit}/>

   </View>

   
    );
};
export default Summary;