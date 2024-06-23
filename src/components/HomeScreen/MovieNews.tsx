import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "./Header";
import { MovieNewsData } from "../../data/Slides";
import { COLORS } from "../../constants/theme";

const Item = ({ image, title }: { image: any; title: string }) => (
  <View style={styles.itemContainer}>
    <Image source={image} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MovieNews = () => {
  return (
    <View>
      <Header title={"Movie News"} link={"movieNews"} />
      <FlatList
        data={MovieNewsData}
        renderItem={({ item }) => <Item {...item} />}
        horizontal
      />
    </View>
  );
};

export default MovieNews;

const styles = StyleSheet.create({
  itemContainer: {
    marginRight: 20,
  },
  image: {
    height: 135,
    width: Dimensions.get("screen").width * 0.65,
    borderRadius: 20,
  },
  title: {
    color: COLORS.light,
    width: Dimensions.get("screen").width * 0.7,
    fontWeight: "600",
    fontSize: 16,
    marginTop: 8,
  },
});
