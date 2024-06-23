import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./Header";
import MovieCard from "../../ui/MovieCard";
import { ComingSoonData } from "../../data/Slides";
import Separator from "../Separator";

const ComingSoon = () => {
  return (
    <View>
      <Header title={"Coming soon"} link={"comingSoon"} />
      <FlatList
        data={ComingSoonData}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id}
        horizontal
        ItemSeparatorComponent={() => <Separator size={20} />}
      />
    </View>
  );
};

export default ComingSoon;

const styles = StyleSheet.create({});
