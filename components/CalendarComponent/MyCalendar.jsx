import { View, Text, Modal, Button } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import SlideUpModal from "./SlideUpModal";

const MyCalendar = ({ navigation }) => {
  const [show, setShow] = useState(false);

  // Todays date in "yyyy-mm-dd" format
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const todayDate = yyyy + "-" + mm + "-" + dd;
  // When the date is pressed a modal will pop with two buttons: 1. New Ride, 2. Check the earning on that date
  const [date, setDate] = useState("");
  const handleClick = (date) => {
    console.log(date);
    setDate(date);
    setShow(true);
    // navigation.jumpTo("Authentication", { screen: "NewRide" });
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Calendar
        onDayPress={(date) => handleClick(date)}
        style={{
          borderRadius: 10,
          padding: 20,
          margin: 20,
          elevation: 4,
        }}
        maxDate={todayDate}
        markedDates={{
          [todayDate]: { selected: true, selectedColor: "black" },
        }}
      />

      <SlideUpModal
        visible={show}
        onClose={() => setShow(false)}
        onCheckTrips={() =>
          navigation.jumpTo("Authentication", { screen: "Trips" })
        }
        onStartNewRide={() => navigation.jumpTo("New Ride", { date: date })}
      />
    </View>
  );
};

export default MyCalendar;
