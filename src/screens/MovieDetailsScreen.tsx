import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import { AntDesign, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";
import { Rating } from "@kolking/react-native-rating";
import { Props } from "./HomeScreen";
import ProfileCard from "../ui/ProfileCard";
import { ActorsData, CinemasData, DirectorsData } from "../data/Slides";
import Separator from "../components/Separator";
import CinemaCard from "../ui/CinemaCard";
import CustomButton from "../ui/Button";

const MovieDetailsScreen = ({ navigation }: Props) => {
  const [rating, setRating] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectCinema = (id: string) => {
    setSelectedId(id === selectedId ? null : id);
  };

  const handleChange = useCallback(
    (value: number) => setRating(Math.round((rating + value) * 5) / 10),
    [rating]
  );
  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={
        <>
          <Image
            source={require("../../assets/images/doctor_strange_2.jpg")}
            resizeMode="cover"
            style={styles.headImage}
          />
          <Pressable style={styles.btnBack} onPress={navigation.goBack}>
            <Ionicons name="arrow-back" size={24} color={COLORS.light} />
          </Pressable>
          <View style={styles.headDetails}>
            <View style={{ gap: 30 }}>
              <View style={{}}>
                <Text
                  style={{
                    color: COLORS.light,
                    fontWeight: "700",
                    fontSize: 24,
                  }}
                >
                  Avengers: Infinity War
                </Text>
                <View
                  style={{ flexDirection: "row", gap: 3, alignItems: "center" }}
                >
                  <Text style={{ color: "#bfbfbf", fontSize: 16 }}>2h29m</Text>
                  <Text
                    style={{
                      color: "#bfbfbf",
                      fontSize: 20,
                      fontWeight: "700",
                      marginBottom: 10,
                    }}
                  >
                    .
                  </Text>
                  <Text style={{ color: "#bfbfbf", fontSize: 16 }}>
                    18.12.2023
                  </Text>
                </View>
              </View>
              <View>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 16,
                      color: "#F2f2f2",
                    }}
                  >
                    Review
                  </Text>
                  <View style={styles.ratingBox}>
                    <AntDesign name="star" size={16} color="#FCC434" />
                    <Text style={styles.rating}>4.6</Text>
                    <Text style={styles.totalRating}>(1,222)</Text>
                  </View>
                </View>
                <View style={styles.reviewPlay}>
                  <Rating size={32} rating={rating} onChange={handleChange} />
                  <Pressable style={styles.watchBtn}>
                    <FontAwesome6 name="play" size={16} color="#bfbfbf" />
                    <Text style={{ color: "#bfbfbf", fontSize: 12 }}>
                      Watch trailer
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.mainDetails}>
            <View style={styles.topDetail}>
              <View style={{ flexDirection: "row", gap: 15, marginBottom: 10 }}>
                <Text style={styles.topDetailTitle}>Movie genre:</Text>
                <Text style={styles.topDetailValue}>
                  Action, Adventure, Sci-fi
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 23, marginBottom: 10 }}>
                <Text style={styles.topDetailTitle}>Censorship:</Text>
                <Text style={styles.topDetailValue}>13+</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 35, marginBottom: 10 }}>
                <Text style={styles.topDetailTitle}>Language:</Text>
                <Text style={styles.topDetailValue}>English</Text>
              </View>
            </View>
            <View>
              <Text style={styles.subHeader}>Storyline</Text>
              <Text style={styles.story}>
                As the Avengers and their allies have continued to protect the
                world from threats too large for any one hero to handle, a new
                danger has emerged from the cosmic shadows: Thanos...{" "}
                <Text style={styles.seeMore}>See more</Text>
              </Text>
            </View>
            <View>
              <Text style={styles.subHeader}>Director</Text>
              <FlatList
                data={DirectorsData}
                renderItem={({ item }) => <ProfileCard {...item} />}
                horizontal
                ItemSeparatorComponent={() => <Separator size={20} />}
              />
            </View>
            <View>
              <Text style={styles.subHeader}>Actor</Text>
              <FlatList
                data={ActorsData}
                renderItem={({ item }) => <ProfileCard {...item} />}
                horizontal
                ItemSeparatorComponent={() => <Separator size={20} />}
              />
            </View>
            <View>
              <Text style={styles.subHeader}>Cinema</Text>
              <FlatList
                data={CinemasData}
                renderItem={({ item }) => (
                  <CinemaCard
                    onPress={selectCinema}
                    isSelected={item.id === selectedId}
                    {...item}
                  />
                )}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <Separator height={20} />}
              />
            </View>
            <CustomButton
              title={"Continue "}
              onPress={() => navigation.push("Booking")}
              style={styles.button}
              theme="light"
              disabled={selectedId === null}
            />
          </View>
        </>
      }
    />
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  headImage: {
    position: "relative",
    height: 241,
    width: Dimensions.get("screen").width,
  },
  btnBack: {
    position: "absolute",
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 15,
    left: 16,
    backgroundColor: "rgba(0,0,0, 0.3)",
    width: 48,
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  headDetails: {
    height: 194,
    borderRadius: 16,
    backgroundColor: "#1c1c1c",
    width: Dimensions.get("screen").width * 0.9,
    justifyContent: "center",
    marginHorizontal: (Dimensions.get("screen").width * 0.1) / 2,
    marginTop: 150,
    position: "absolute",
    padding: 12,
    zIndex: 10,
  },
  ratingBox: { flexDirection: "row", alignItems: "center", gap: 6 },
  rating: {
    fontSize: SIZES.medium,
    color: "#DEDEDE",
    fontFamily: "SF-PRO",
    fontWeight: "700",
  },
  totalRating: {
    fontSize: SIZES.small,
    color: "#bfbfbf",
    fontFamily: "SF-PRO",
  },
  reviewPlay: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
    marginTop: 8,
  },
  watchBtn: {
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#BFBFBF",
    padding: 10,
    gap: 6,
    width: "40%",
    justifyContent: "center",
  },
  mainDetails: {
    backgroundColor: COLORS.dark,
    paddingHorizontal: 16,
  },
  topDetail: {
    paddingTop: 150,
  },
  topDetailTitle: {
    color: "#cdcdcd",
    fontSize: 16,
  },
  topDetailValue: {
    color: COLORS.light,
    fontSize: 16,
    fontWeight: "700",
  },
  subHeader: {
    color: COLORS.light,
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 18,
  },
  story: {
    color: COLORS.light,
    lineHeight: 26,
  },
  seeMore: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "700",
  },
  button: {
    marginTop: 20,
  },
});
