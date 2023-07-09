import React, { useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
} from 'react-native';
import { sendPasswordReset } from '../../firebase/firebase';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthScreens } from '../../utils/screen-types';
import CustomButton from '../../components/custom-button';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

interface props {
  navigation: StackNavigationProp<AuthScreens>;
}

export default function ResetPasswordScreen({ navigation }: props) {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    sendPasswordReset(email);
  };

  return (
    <ImageBackground
      source={require('../../../assets/auth/background.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Restablecer contraseña</Text>
        <TextInput
          placeholder='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          autoCapitalize='none'
          keyboardType='email-address'
        />
        <CustomButton
          title={'Restablecer contraseña'}
          backgroundColor={colors.appMain}
          fontSize={14}
          height={40}
          width={280}
          onPress={handleResetPassword}
          textColor='white'
        />
        <Text style={styles.text}>
          ¿Ya tienes una cuenta?
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('login')}
          >
            {' '}
            Iniciar sesión
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '80%',
    marginBottom: 16,
  },
  text: {
    marginTop: 16,
    textAlign: 'center',
    fontFamily: fonts.poppinsRegular,
  },
  link: {
    color: '#3366BB',
  },
});
