import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";

interface MovieCardType {
  title: string;
  rating: string;
  totalRating: string;
  duration?: string;
  description: string;
  image: any;
}

const MovieCard = ({
  title,
  rating,
  totalRating,
  duration,
  description,
  image,
}: MovieCardType) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detail}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.ratingBox}>
          <AntDesign name="star" size={16} color="#FCC434" />
          <Text style={styles.rating}>{rating}</Text>
          <Text style={styles.totalRating}>{totalRating}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <MaterialCommunityIcons
            name="clock-time-four-outline"
            size={16}
            color={COLORS.light}
          />
          <Text style={{ color: "#DEDEDE", fontSize: SIZES.small }}>
            {duration}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <Feather name="video" size={16} color={COLORS.light} />
          <Text style={{ color: "#DEDEDE", fontSize: SIZES.small }}>
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    width: 177,
  },
  image: {
    borderRadius: 8,
    height: 267,
    width: "100%",
  },
  detail: {
    gap: 6,
  },
  title: {
    color: COLORS.primary,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  ratingBox: { flexDirection: "row", alignItems: "center", gap: 6 },
  rating: {
    fontSize: SIZES.small,
    color: "#DEDEDE",
    fontFamily: "SF-PRO",
  },
  totalRating: {
    fontSize: SIZES.small,
    color: "#DEDEDE",
    fontFamily: "SF-PRO",
  },
});
