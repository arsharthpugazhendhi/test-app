import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getAuthDetail } from '../redux/reducers/authReducer';
import { STRINGS } from '../utils/String';
import keychainStorage from '../utils/keyChainStorage';

const Profile = () => {

    const dispatch = useDispatch();
    const handleLogout = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            // Removing user Info
            dispatch(getAuthDetail(null));
        }
        catch (error) {
            console.error(error);
            dispatch(getAuthDetail(null));
        }
    };
    return (
        <View style={styles.container}>
            <Button
                title={STRINGS.logout}
                onPress={handleLogout}
            />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})