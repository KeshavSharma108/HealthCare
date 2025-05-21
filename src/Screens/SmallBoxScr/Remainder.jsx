import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Mainlayout from "../../Component/Mainlayout";
import { getFileList } from "../../utilis/storeFileUtils";

const Remainder = () => {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    showDataList();
  }, []);

  async function showDataList() {
    const rawData = await getFileList("FILE_LIST"); // Already a JS object/array
    let parsedData = [];

    try {
      const parsed = rawData || [];

      parsed.forEach((entry) => {
        if (entry.key === "FILE_LIST" && Array.isArray(entry.value)) {
          entry.value.forEach((file) => {
            parsedData.push(file);
          });
        }
      });
    } catch (e) {
      console.error("Error processing file data:", e);
    }

    setShowData(parsedData);
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: item.uploadedUrl || item.uri }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.fileName}>
          {item.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
        </Text>

        <Text style={styles.fileSize}>
          Size: {(item.size / 1024).toFixed(1)} KB
        </Text>
        {item.uploadedUrl && <Text style={styles.url}>Uploaded</Text>}
      </View>
    );
  };

  return (
    <Mainlayout>
      <FlatList
        data={showData}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.uri + index}
        showsVerticalScrollIndicator={false}
      />
    </Mainlayout>
  );
};

export default Remainder;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#eee",
  },
  fileName: {
    fontWeight: "bold",
  },
  fileSize: {
    color: "gray",
  },
  url: {
    color: "green",
    fontSize: 12,
  },
});
