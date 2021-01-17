import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {logout} from '../redux/actions';
import usePreferences from '../hook/usePreferences';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    paddingLeft: 10,
    fontSize:25,
   
  },
});

const Menu = ({logout}) => {
  const {theme} = usePreferences();
  AntDesignIcon.loadFont();
  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={logout} style={styles.button}>
        <AntDesignIcon name="logout" size={50}  color={theme === 'dark'?'#fff':'#000' } />
        <Text style={styles.text } >Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);