import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'FILE_LIST';

export const saveFile = async (file) => {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);
    const list = existing ? JSON.parse(existing) : [];
    list.push(file);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error('Failed to save file:', e);
  }
};

export const getFileList = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load file list:', e);
    return [];
  }
};
