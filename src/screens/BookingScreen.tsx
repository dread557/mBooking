import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import { Props } from "./HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { Seat, Seats } from "../data/seats";
import DateSlide from "../components/Booking/DateSlide";
import TimeSlide from "../components/Booking/TimeSlide";
import CustomButton from "../ui/Button";

const ticketPrice = 4500;

const BookingScreen = ({ navigation }: Props) => {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");

  const selectSeat = (seatId: string) => {
    const seatIndex = selectedSeats.findIndex((seat) => seat.id === seatId);

    if (seatIndex !== -1) {
      // If the seat is already selected, remove it from the selectedSeats array
      setSelectedSeats((prevSeats) => [
        ...prevSeats.slice(0, seatIndex),
        ...prevSeats.slice(seatIndex + 1),
      ]);
    } else {
      // If the seat is not selected, add it to the selectedSeats array
      setSelectedSeats((prevSeats) => [
        ...prevSeats,
        { id: seatId, available: true },
      ]);
    }
  };

  const selectDate = (date: Date) => {
    setSelectedDate(date);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[]}
        renderItem={() => null}
        ListHeaderComponent={
          <>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 26,
              }}
            >
              <Pressable
                style={styles.btnBack}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="arrow-back" size={24} color={COLORS.light} />
              </Pressable>
              <Text
                style={{ fontSize: 28, fontWeight: "700", color: COLORS.light }}
              >
                Select seat
              </Text>
              <View />
            </View>
            <View style={{ paddingHorizontal: 26 }}>
              <View style={styles.lightBar} />
              <Image
                style={styles.light}
                source={require("../../assets/images/light.png")}
              />
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {Seats.map((seat) => (
                <Pressable
                  onPress={() => selectSeat(seat.id)}
                  key={seat.id}
                  style={[
                    styles.seat,
                    selectedSeats.find(
                      (selectedSeat) => selectedSeat.id === seat.id
                    ) && styles.selectedSeat,
                    selectedSeats.find(
                      (selectedSeat) => !selectedSeat.available
                    ) && styles.reservedSeat,
                    seat.available ? null : styles.disabledSeat,
                  ]}
                  disabled={!seat.available}
                >
                  <Text
                    style={[
                      styles.seatNumber,
                      {
                        color: selectedSeats.find(
                          (selectedSeat) => selectedSeat.id === seat.id
                        )
                          ? "#000000"
                          : "#bfbfbf",
                      },
                      seat.available ? null : styles.disabledSeatNumber,
                    ]}
                  >
                    {seat.id}
                  </Text>
                </Pressable>
              ))}
            </View>
            <View
              style={{
                padding: 26,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <View
                  style={[styles.seatLabel, { backgroundColor: "#1c1c1c" }]}
                />
                <Text style={{ color: COLORS.light, fontSize: 14 }}>
                  Available
                </Text>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <View
                  style={[styles.seatLabel, { backgroundColor: "#261D08" }]}
                />
                <Text style={{ color: COLORS.light, fontSize: 14 }}>
                  Reserved
                </Text>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <View
                  style={[
                    styles.seatLabel,
                    { backgroundColor: COLORS.primary },
                  ]}
                />
                <Text style={{ color: COLORS.light, fontSize: 14 }}>
                  Selected
                </Text>
              </View>
            </View>
            <Text style={styles.dateTimeHeader}>Select Date & Time</Text>
            <DateSlide selectDate={selectDate} selectedDate={selectedDate!} />
            <TimeSlide
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
            <View style={styles.bottomContainer}>
              <View>
                <Text style={{ color: COLORS.light }}>Total</Text>
                <Text style={styles.price}>
                  {(selectedSeats.length * ticketPrice).toLocaleString()} NGN
                </Text>
              </View>
              <CustomButton
                title={"Buy tickets"}
                onPress={() => null}
                theme={"light"}
                style={styles.buyBtn}
              />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  btnBack: {},
  lightBar: {
    height: 4,
    backgroundColor: COLORS.primary,
    marginTop: 30,
    width: "86.5%",
    marginLeft: "7%",
  },
  light: {
    resizeMode: "contain",
    height: 84,
    width: "100%",
    marginTop: -7,
  },
  seat: {
    backgroundColor: "#1C1C1C",
    width: 28,
    height: 28,
    borderRadius: 4,
    margin: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedSeat: {
    backgroundColor: COLORS.primary,
  },
  reservedSeat: {
    backgroundColor: "#261D08",
  },
  disabledSeat: {
    backgroundColor: "#261D08",
  },
  seatNumber: {
    color: "#bfbfbf",
    fontSize: 12,
  },
  disabledSeatNumber: {
    color: COLORS.primary,
  },
  seatLabel: {
    width: 24,
    height: 24,
    borderRadius: 4,
  },
  dateTimeHeader: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.light,
    textAlign: "center",
    marginBottom: 20,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "#2e2e2e",
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 35,
  },
  price: {
    color: COLORS.primary,
    fontWeight: "700",
    fontSize: 24,
  },
  buyBtn: {
    width: 191,
  },
});
