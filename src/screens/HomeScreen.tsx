import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Welcome from "../components/HomeScreen/Welcome";
import { COLORS } from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBox from "../components/HomeScreen/SearchBox";
import NowPlaying from "../components/HomeScreen/NowPlaying";
import ComingSoon from "../components/HomeScreen/ComingSoon";
import PromoDiscount from "../components/HomeScreen/PromoDiscount";
import Services from "../components/HomeScreen/Services";
import MovieNews from "../components/HomeScreen/MovieNews";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation/AppStack";

export type Props = NativeStackScreenProps<AppStackParamList>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[]}
        renderItem={() => null}
        ListHeaderComponent={
          <>
            <Welcome />
            <NowPlaying navigation={navigation} />
            <ComingSoon />
            <PromoDiscount />
            <Services />
            <MovieNews />
          </>
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark,
    padding: 16,
  },
});
