import { Modal, StyleSheet, Text, View } from "react-native";
import CustomInput from "./customInput";
import CustomButton from "./customButton";
import DropdownComponent from "./dropDown";
import { useState } from "react";
import { getData, removeValue, storeData } from "../Utilies/stroageUtilies";
import { Modes, TimeDatePicker } from "react-native-time-date-picker";
import moment from "moment";

const CustomModal = ({ visible, onRequestClose, onPress }) => {
  const [nameUser, setNameUser] = useState("");
  const [add, setAdd] = useState([]);
  const [addTime, setAddTime] = useState(null);
  const now = moment().valueOf();

  const [value, setValue] = useState(null);
  const handleData = async () => {
    setAdd((prevAdd) => {
      const updatedAdd = [
        ...prevAdd,
        { Name: nameUser, Time: addTime, category: value },
      ];
      storeData({
        key: "setTimer",
        value: updatedAdd,
      });
      return updatedAdd;
    });

    const retrievedData = await getData({ key: "setTimer" });
    console.log("Retrieved Data:", retrievedData);
  };

  const handleRemove = async () => {
    await removeValue({ key: "setTimer" });
    setNameUser("");
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={onRequestClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CustomInput
              title="Name"
              placeholder="Enter Name"
              value={nameUser}
              onChangeText={(text) => {
                setNameUser(text);
              }}
            />
            <View style={{ marginTop: 20 }}>
              <TimeDatePicker
                selectedDate={now}
                mode={Modes.time}
                onTimeChange={(time) => {
                  setAddTime(moment(time).format("HH:mm:ss"));
                }}
              />
              ;
              <DropdownComponent
                value={value}
                onChange={(item) => {
                  setValue(item.label);
                }}
              />
            </View>
            <CustomButton
              title={"Submit"}
              backgroundColor={"cyan"}
              onPress={() => {
                handleData();
                onPress();
              }}
            />
            <CustomButton
              backgroundColor={"red"}
              size="medium"
              title={"Remove Item"}
              onPress={handleRemove}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalView: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
