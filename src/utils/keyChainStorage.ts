// keychainStorage.js
import * as Keychain from 'react-native-keychain';

const keychainStorage = {
  setItem: async (key: string, value: string) => {
    try {
      await Keychain.setGenericPassword(key, value);
    } catch (error) {
      console.error('Error storing data in keychain', error);
    }
  },
  getItem: async (key: string) => {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials && credentials.username === key) {
        return credentials.password;
      }
      return null;
    } catch (error) {
      console.error('Error retrieving data from keychain', error);
      return null;
    }
  },
  removeItem: async () => {
    try {
      await Keychain.resetGenericPassword();
    } catch (error) {
      console.error('Error removing data from keychain', error);
    }
  },
};

export default keychainStorage;
