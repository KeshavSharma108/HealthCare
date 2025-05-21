import axios from 'axios';
import * as FileSystem from 'expo-file-system';

const uploadToCloudinary = async (fileUri, fileType) => {
  const cloudName = 'derzpbdys';
  const uploadPreset = 'upload_prescription';

  try {

    let actualUri = fileUri;

    if (fileUri.startsWith('content://')) {
      const fileName = fileUri.split('/').pop();
      const destPath = `${FileSystem.cacheDirectory}${fileName}`;
      await FileSystem.copyAsync({
        from: fileUri,
        to: destPath,
      });
      actualUri = destPath;
    }

    const fileInfo = await FileSystem.getInfoAsync(actualUri);

    if (!fileInfo.exists) {
      console.error('File does not exist:', actualUri);
      return;
    }

    const formData = new FormData();
    formData.append('file', {
      uri: actualUri,
      type: fileType,
      name: `upload.${fileType.split('/')[1]}`,
    });
    formData.append('upload_preset', uploadPreset);

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );

    console.log('Upload successful:', response.data);
    return response.data.secure_url;
  } catch (error) {
    console.error('Upload failed:', error);
  }
};

export default uploadToCloudinary;
