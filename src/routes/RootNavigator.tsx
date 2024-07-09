import { RootState } from '@reduxjs/toolkit/query';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import StackNavigator from './StackNavigator';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const RootNavigator = () => {
  const authDetail = useSelector((state: RootState) => state.userAuth.authDetails);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "572215179063-125rtni5gdr1nmvevgbe8l8404etjng3.apps.googleusercontent.com",
    });
  }, []);

  return (
    <>
      {authDetail?.idToken ? <StackNavigator /> : <AuthNavigator />}
    </>
  )
}

export default RootNavigator;