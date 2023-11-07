import React, { useState, useEffect, useRef } from "react";
import {
  ImageBackground,
  View,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { Camera} from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome, Feather } from "@expo/vector-icons";

export default function CreatePostsScreen() {
  const [focusedInput, setFocusedInput] = useState(null);
  const [photoName, setPhotoName] = useState("");

  const [postPhoto, setPostPhoto] = useState(null);
  const [address, setAddress] = useState("");

  const [pendingMakePhoto, setPendingMakePhoto] = useState(false);
  const cameraRef = useRef(null);

  const makePhoto = async () => {
    setPendingMakePhoto(true);
    if (cameraRef) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync();
        setPostPhoto(uri);
      } catch (error) {
        console.log("No access to Camera:", error);
      }
      setPendingMakePhoto(false);
    }
  };

  const choosePhoto = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status === "granted") {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.canceled) {
          setPostPhoto(result.assets[0].uri);
        }
      }
    } catch (error) {
      console.log("ImagePicker: ", error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.cameraWrap}>
          <Camera style={styles.camera} ratio="4:3">
            <TouchableOpacity style={styles.makePhotoBtn} onPress={makePhoto}>
              <FontAwesome name="camera" size={24} color="#bdbdbd" />
            </TouchableOpacity>
            <Spinner visible={pendingMakePhoto} />
          </Camera>
        </View>

        <View style={styles.wrapImageText}>
          <TouchableOpacity onPress={choosePhoto}>
            <Text style={styles.imageText}>
              {postPhoto ? "Редагувати фото" : "Завантажте фото"}
            </Text>
          </TouchableOpacity>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={20}
        >
          <TextInput
            style={[
              styles.input,
              styles.margin32,
              focusedInput === "photoName" && styles.isFocused,
            ]}
            onFocus={() => setFocusedInput("photoName")}
            onBlur={() => setFocusedInput(null)}
            placeholder="Назва..."
            type="text"
            name="photoName"
            value={photoName}
            onChangeText={setPhotoName}
          ></TextInput>

          <View style={styles.localInputWrap}>
            <TouchableOpacity style={styles.localIconWrap}>
              <Feather
                name="map-pin"
                size={24}
                color="#BDBDBD"
                style={[
                  focusedInput === "photoLocationName" && styles.isFocused,
                ]}
              />
            </TouchableOpacity>
            <TextInput
              style={[
                styles.input,
                styles.margin16,
                styles.paddingLeft,
                focusedInput === "photoLocationName" && styles.isFocused,
              ]}
              onFocus={() => setFocusedInput("photoLocationName")}
              onBlur={() => setFocusedInput(null)}
              placeholder="Місцевість..."
              type="text"
              name="photoLocation"
              value={address}
              onChangeText={setAddress}
            />
          </View>

          <TouchableOpacity
            style={[styles.button, postPhoto?.length && styles.buttonActive]}
            activeOpacity={0.5}
          >
            <Text
              style={[styles.buttonText, postPhoto?.length && buttonTextActive]}
            >
              Опублікувати
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <View
          style={[styles.deleteIcon, postPhoto?.length && styles.buttonActive]}
        >
          <Feather
            name="trash-2"
            size={24}
            color="#BDBDBD"
            style={[postPhoto?.length && styles.buttonTextActive]}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopColor: "#BDBDBD",
    borderTopWidth: 1,
    paddingTop: 31,
    marginTop: 1,
    paddingHorizontal: 16,
    paddingBottom: 34,
  },

  camera: {
    display: "flex",
    width: "100%",
    height: 240,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
  },

  cameraWrap: {
    overflow: "hidden",
    width: "100%",
    height: 240,
    borderRadius: 8,
  },

  makePhotoBtn: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },

  wrapImageText: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  imageText: {
    color: "#BDBDBD",
    justifyContent: "flex-start",
    marginTop: 8,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
  },

  input: {
    width: "100%",
    height: 50,
    paddingVertical: 15,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 2,
  },

  margin16: {
    marginTop: 16,
  },

  margin32: {
    marginTop: 32,
  },

  isFocused: {
    borderBottomColor: "black",
    color: "black",
  },

  localInputWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    position: "relative",
  },

  localIconWrap: {
    position: "absolute",
    top: 30,
    zIndex: 2,
  },

  paddingLeft: {
    paddingLeft: 28,
  },

  button: {
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 80,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
  },

  buttonActive: {
    color: "#FFFFFF",
    backgroundColor: "#FF6C00",
  },

  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
    color: "#BDBDBD",
  },

  buttonTextActive: {
    color: "#FFFFFF",
  },

  deleteIcon: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",

    paddingHorizontal: 23,
    paddingVertical: 8,

    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
