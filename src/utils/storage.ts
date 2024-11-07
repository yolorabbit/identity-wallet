import AsyncStorage from '@react-native-async-storage/async-storage';

const SetStorage = async (key: string, value: any) => {
  await AsyncStorage.setItem(key, value);
};

const GetStorage = async (key: string, type: 'string' | 'number' | 'boolean') => {
  switch (type) {
    case 'string':
      return await AsyncStorage.getItem(key);
    case 'number':
      return await AsyncStorage.getItem(key);
    case 'boolean':
      return await AsyncStorage.getItem(key);
    default:
      break;
  }
};

const DeleteStorage = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

export {
  SetStorage,
  GetStorage,
  DeleteStorage,
};
