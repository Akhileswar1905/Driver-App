import "react-native-gesture-handler";

import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

import {
  PlusJakartaSans_500Medium,
  useFonts,
} from "@expo-google-fonts/plus-jakarta-sans";

const SlideUpModal = ({ visible, onClose, onStartNewRide, onCheckTrips }) => {
  // Todays date in "yyyy-mm-dd" format
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const todayDate = yyyy + "-" + mm + "-" + dd;
  const [fonts] = useFonts({
    PlusJakartaSans_500Medium,
  });

  const [animation] = useState(new Animated.Value(0));

  React.useEffect(() => {
    if (visible) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={() => onClose()}
    >
      <View style={styles.modalBackground}>
        <Animated.View
          style={[
            styles.modalContainer,
            {
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [500, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.modalText}>What would you like to do?</Text>
          <TouchableOpacity
            onPress={onStartNewRide}
            style={[styles.button, styles.black]}
          >
            <Text style={styles.buttonText}>Start New Ride</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onCheckTrips}
            style={[styles.button, styles.green]}
          >
            <Text style={styles.buttonText}>Check Trips Today</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontFamily: "PlusJakartaSans_500Medium",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 150,
    alignItems: "center",
  },
  green: {
    backgroundColor: "green",
  },
  black: {
    backgroundColor: "black",
  },
  buttonText: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 16,
    color: "white",
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 16,
    color: "blue",
  },
});

export default SlideUpModal;
