import * as DocumentPicker from 'expo-document-picker';

const pickFile = async () => {
  try {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['image/*', 'application/pdf'],
      copyToCacheDirectory: false,
      multiple: false,
    });

    console.log('Document Picker Result:', result);

    if (!result.canceled && result.assets?.length > 0) {
      const file = result.assets[0];
      console.log('Selected file:', file);
      return file;
    } else {
      console.log('User cancelled the picker');
      return null;
    }
  } catch (err) {
    console.error('Error picking file:', err);
    return null;
  }
};

export default pickFile;
