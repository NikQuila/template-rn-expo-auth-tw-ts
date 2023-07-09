import { signOut } from 'firebase/auth';
import CustomButton from './custom-button';
import colors from '../utils/colors';
import { auth } from '../firebase/firebase';

const SignOutButton = () => {
  return (
    <CustomButton
      title='Cerrar Sesión'
      textColor={colors.appMain}
      backgroundColor={'#f0f0f0'}
      fontSize={14}
      height={40}
      width={100}
      onPress={() => signOut(auth)}
    />
  );
};

export default SignOutButton;
