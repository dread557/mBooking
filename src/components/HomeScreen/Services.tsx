import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Header from "./Header";
import { COLORS } from "../../constants/theme";

const Services = () => {
  return (
    <View>
      <Header title={"Sevices"} link={"services"} />
      <View style={styles.slide}>
        <View style={styles.slideItem}>
          <Image source={require("../../../assets/images/service1.png")} />
          <Text style={styles.text}>Retal</Text>
        </View>
        <View style={styles.slideItem}>
          <Image source={require("../../../assets/images/service2.png")} />
          <Text style={styles.text}>Imax</Text>
        </View>
        <View style={styles.slideItem}>
          <Image source={require("../../../assets/images/service3.png")} />
          <Text style={styles.text}>4DX</Text>
        </View>
        <View style={styles.slideItem}>
          <Image source={require("../../../assets/images/service4.png")} />
          <Text style={styles.text}>Sweetbox</Text>
        </View>
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  slide: {
    flexDirection: "row",
    gap: 17,
  },
  slideItem: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: COLORS.light,
    fontWeight: "500",
    fontSize: 16,
  },
});
