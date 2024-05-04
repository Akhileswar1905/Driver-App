import React, { useState, useEffect, useRef } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
// import storage from "@react-native-firebase/storage";
import { Camera } from "expo-camera";
const SignUpFinal = ({ navigation, route }) => {
  const [carPhoto, setCarPhoto] = useState(null);
  const [carVideo, setCarVideo] = useState(null);
  const [userSelfie, setUserSelfie] = useState(null);
  const [uploading, setUploading] = useState(false);
  const cameraRef = useRef(null);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera permissions to make this work!");
      }
    })();
  }, []);

  const pickImage = async (mediaType) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: mediaType,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      switch (mediaType) {
        case ImagePicker.MediaTypeOptions.Images:
          setCarPhoto(result.assets[0].uri);
          console.log(result.assets[0]);
          break;
        case ImagePicker.MediaTypeOptions.Videos:
          setCarVideo(result.assets[0].uri);
          console.log(result.assets[0].uri);
          break;
        case ImagePicker.MediaTypeOptions.All:
          setUserSelfie(result.uri);
          break;
        default:
          break;
      }
    }
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      setUserSelfie(photo.uri);
    }
  };

  // const uploadMedia = async () => {
  //   setUploading(true);

  //   try {
  //     // Upload car photo
  //     if (carPhoto) {
  //       const carPhotoRef = ref(
  //         storage,
  //         `${route.params.data.phoneNumber}/carPhotos/` +
  //           "car_photo_" +
  //           Date.now()
  //       );
  //       await uploadFile(carPhotoRef, carPhoto);
  //     }

  //     // Upload car video
  //     if (carVideo) {
  //       const carVideoRef = ref(
  //         storage,
  //         `${route.params.data.phoneNumber}/carVideos/` +
  //           "car_video_" +
  //           Date.now()
  //       );
  //       await uploadFile(carVideoRef, carVideo);
  //     }

  //     // Upload user selfie
  //     if (userSelfie) {
  //       const userSelfieRef = ref(
  //         storage,
  //         `${route.params.data.phoneNumber}/userSelfies/` +
  //           "user_selfie_" +
  //           Date.now()
  //       );
  //       await uploadFile(userSelfieRef, userSelfie);
  //     }

  //     setUploading(false);
  //     alert("Media uploaded successfully!");
  //   } catch (error) {
  //     console.error("Error uploading media: ", error);
  //     setUploading(false);
  //     alert("Failed to upload media.");
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text>Car Photo:</Text>
      {carPhoto && <Image source={{ uri: carPhoto }} style={styles.image} />}
      <TouchableOpacity
        onPress={() => pickImage(ImagePicker.MediaTypeOptions.Images)}
        style={styles.button}
      >
        <Text style={{ color: "white" }}>Select Car Photo</Text>
      </TouchableOpacity>

      <Text>Car Video:</Text>
      {carVideo && <Video source={{ uri: carVideo }} style={styles.video} />}
      <TouchableOpacity
        onPress={() => pickImage(ImagePicker.MediaTypeOptions.Videos)}
        style={styles.button}
      >
        <Text style={{ color: "white" }}>Select Car Video</Text>
      </TouchableOpacity>

      <Text>User Selfie:</Text>
      {userSelfie && (
        <Image source={{ uri: userSelfie }} style={styles.image} />
      )}
      <View style={styles.cameraContainer}>
        <Camera
          style={styles.camera}
          ref={cameraRef}
          type={Camera.Constants.Type.front}
        />
        <TouchableOpacity onPress={takePicture} style={styles.cameraButton}>
          <Text style={styles.cameraButtonText}>Take Selfie</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => console.log("Pressed")}
        style={styles.uploadButton}
      >
        <Text>Upload Media</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  video: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  cameraContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  camera: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  cameraButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cameraButtonText: {
    color: "white",
  },
  uploadButton: {
    backgroundColor: "lightgreen",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default SignUpFinal;
