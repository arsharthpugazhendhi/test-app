import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getAuthDetail } from '../redux/reducers/authReducer';

const Login = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      const userinfo = await GoogleSignin.signIn();
      dispatch(getAuthDetail(userinfo));
    }
    catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert("User Cancelled the Login Flow");
      }
      else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert("Signing In");
      }
      else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert("Play Services Not Available or Outdated");
      }
      else {
        Alert.alert(error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleGoogleLogin}
        disabled={false}
      />
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})