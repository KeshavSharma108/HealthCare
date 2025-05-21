import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Mainlayout from "../../Component/Mainlayout";
import CustomTitle from "../../Component/customTitle";
import { colors } from "../../assests/color";
import { ExtraIcons } from "../../assests/imgs/svg";
import CustomButton from "../../Component/customButton";
import pickFile from "../../utilis/fileUploadUtil";
import uploadToCloudinary from "../../api/uploadPrescription";
import { getFileList, saveFile } from "../../utilis/storeFileUtils";
import * as FileSystem from 'expo-file-system';
const NearByPhrmcy = () => {
  
 const fileUrl = 'https://www.bing.com/images/search?view=detailV2&ccid=B39%2B1Evw&id=5CA97F3E3C89743E9CE3D151D5BAD36A32AA99E7&thid=OIP.B39-1EvwOFXOffOfIKZT0AHaEK&mediaurl=https%3A%2F%2Fmy.alfred.edu%2Fzoom%2F_images%2Ffoster-lake.jpg&exph=3261&expw=5797&q=image&simid=608012936061396528&FORM=IRPRST&ck=BC88B1E1E31EDA5B01548EEE6BD0ED35&selectedIndex=1&itb=0&cw=1222&ch=585&ajaxhist=0&ajaxserp=0'; 

const [add, setAdd] = useState([]);

const handlePickFile = async () => {
  const file = await pickFile();

  if (!file) {
    console.log('No file picked.');
    return;
  }

  console.log('Uploading file:', file);
  const uploadedUrl = await uploadToCloudinary(file.uri, file.mimeType);

  if (uploadedUrl) {
    console.log('File uploaded to Cloudinary:', uploadedUrl);

    setAdd((prevAdd) => {
      const updatedAdd = [...prevAdd, { ...file, uploadedUrl }];
      
      saveFile({
        key: "FILE_LIST",
        value: updatedAdd,
      });

      return updatedAdd;
    });

    const retrievedData = await getFileList({ key: "FILE_LIST" });
    console.log("Retrieved Data:", JSON.stringify(retrievedData, null, 2));
  }
};


const handleDownload = async () => {
  try {
    if (!fileUrl) {
      console.log('No file URL provided.');
      return;
    }

    const extension = fileUrl.split('.').pop();
    const localUri = FileSystem.documentDirectory + `tempfile.${extension}`;

    console.log('Downloading file from:', fileUrl);
    

    const { uri } = await FileSystem.downloadAsync(fileUrl, localUri);

    const downloadedFile = {
      uri,
      name: `tempfile.${extension}`,
      type: `application/${extension}`, // Adjust this based on actual MIME type
      uploadedUrl: fileUrl, // original file URL
    };

    console.log('Downloaded file:', downloadedFile);

    setAdd((prevAdd) => {
      const updatedAdd = [...prevAdd, downloadedFile];

      saveFile({
        key: "FILE_LIST",
        value: updatedAdd,
      });

      return updatedAdd;
    });
    const retrievedData = await getFileList({ key: "FILE_LIST" });
    console.log("Retrieved Data:", JSON.stringify(retrievedData, null, 2));
    Alert.alert('File Successfully download')

  } catch (error) {
    console.error('Failed to download file:', error);
  }
};


  return (
    <Mainlayout>
      <CustomTitle>Upload Precription</CustomTitle>

      <Text style={styles.subTitle}>
        We will show the pharmacy thats fits as per your precription
      </Text>

      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadSubContainer}  onPress={handleDownload}>
          <ExtraIcons.uploadLink />
          <Text>Upload Link</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePickFile} style={styles.uploadSubContainer}>
          <ExtraIcons.uploadFile />
          <Text >Upload File</Text>
        </TouchableOpacity>
      </View>
  
      <CustomButton backgroundColor={colors.secondaryColor} onPress={()=>Alert.alert('Coming Soon 😊')} title={'Continue'}/>
    </Mainlayout>
  );
};

export default NearByPhrmcy;

const styles = StyleSheet.create({
  subTitle: {
    textAlign: "center",
    fontSize: 15,
    color: colors.fontColor,
    marginVertical: 20,
  },
  uploadContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.lightGrey,
    height: 200,
    padding: 20,
    flexDirection: "row",
    borderRadius: 20,
    justifyContent: "space-around",
  },
  uploadSubContainer: { justifyContent: "center", alignItems: "center" },fileNameText: {
  textAlign: "center",
  marginTop: 10,
  fontSize: 14,
  color: colors.primaryColor,
},

});
