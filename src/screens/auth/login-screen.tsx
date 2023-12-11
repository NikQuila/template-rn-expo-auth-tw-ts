// react
import { useState } from 'react';
// zustand
import { useUserStore } from '../../store/useUserStore';
// firebase
import {
  logInWithEmailAndPassword,
  getUserById,
} from '../../firebase/firebase';
// ui kitten native
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
} from 'react-native';
// components
import CustomButton from '../../components/custom-button';
// utils
import { AuthScreens } from '../../utils/screen-types';
import { StackScreenProps } from '@react-navigation/stack';
import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

interface props extends StackScreenProps<AuthScreens> {}

const LoginScreen = ({ navigation }: props) => {
  const { user, setUser } = useUserStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setIsLoading(true);
    const result = await logInWithEmailAndPassword(email, password);
    if (result) {
      const user = await getUserById(result.user.uid);
      setUser(user);
    } else {
      setUser(null);
      setError('Email o contraseña incorrectos');
    }
    setIsLoading(false);
  };

  return (
    <ImageBackground
      source={require('../../../assets/auth/background.png')}
      style={styles.backgroundImage}
      resizeMode='cover'
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../../assets/auth/logo.png')}
            style={{ height: 150, width: 200 }}
            resizeMode='contain'
          />
          <Text className={'text-green-400'} style={styles.subTitle}>
            By NikQuila
          </Text>
        </View>
        <View style={styles.form}>
          <TextInput
            value={email}
            placeholder='Email'
            onChangeText={(value) => {
              setEmail(value);
              setError(null);
            }}
            style={styles.input}
          />
          <TextInput
            value={password}
            placeholder='Contraseña'
            onChangeText={(value) => {
              setPassword(value);
              setError(null);
            }}
            style={styles.input}
            secureTextEntry
          />
          {isLoading ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
              }}
            >
              <Text>Cargando ...</Text>
            </View>
          ) : (
            <CustomButton
              title={'Iniciar sesion'}
              backgroundColor={colors.appMain}
              fontSize={16}
              height={40}
              width={290}
              onPress={handleLogin}
              textColor='white'
            />
          )}
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
        <View style={styles.row}>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('register')}
          >
            Registrarse
          </Text>
        </View>
        <View style={styles.row}>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('resetPassword')}
          >
            Olvide mi contraseña
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  header: {
    alignItems: 'center',
    marginBottom: 28,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subTitle: {
    marginTop: 4,
    fontSize: 12,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 10,
    padding: 4,
    fontFamily: fonts.poppinsSemiBold,
  },
  form: {
    width: '80%',
  },
  input: {
    marginBottom: 16,
    fontFamily: fonts.poppinsRegular,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
    fontFamily: fonts.poppinsRegular,
  },
  link: {
    color: '#3366BB',
    fontFamily: fonts.poppinsRegular,
  },
  row: {
    flexDirection: 'row',
    gap: 4,
    marginTop: 16,
    alignSelf: 'center',
  },
});

export default LoginScreen;
