import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Animated,
  Pressable,
} from "react-native";
import React, { useRef } from "react";
import Header from "./Header";
import { NowPlayingData } from "../../data/Slides";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/theme";

interface Item {
  id: string;
  title: string;
  description: string;
  rating: string;
  totalRating: string;
  image: any;
}

const SlideItem = ({
  item,
  index,
  scrollX,
  containerWidth,
  containerHeight,
  navigation,
}: {
  item: Item;
  index: number;
  containerWidth: number;
  containerHeight: number;
  scrollX: Animated.Value;
  navigation: any;
}) => {
  const inputRange = [
    (index - 1) * containerWidth,
    index * containerWidth,
    (index + 1) * containerWidth,
  ];
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.2, 1, 0.2],
  });
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.9, 1, 0.9],
  });

  return (
    <Pressable onPress={() => navigation.navigate("MovieDetail")}>
      <Animated.View
        style={[
          styles.itemContainer,
          {
            width: containerWidth,
            opacity,
            transform: [
              {
                scale,
              },
            ],
          },
        ]}
      >
        <Image
          source={item.image}
          style={[
            styles.image,
            {
              width: containerWidth,
              height: containerHeight,
            },
          ]}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <View style={styles.ratingBox}>
          <AntDesign name="star" size={16} color="#FCC434" />
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.totalRating}>{item.totalRating}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

const NowPlaying = ({ navigation }: any) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();
  const containerWidth = width * 0.75;
  const containerHeight = containerWidth * (4 / 3);
  const spacing = (width - containerWidth) / 2;
  return (
    <View>
      <Header title="Now Playing" link="nowPlaying" />
      <Animated.FlatList
        data={NowPlayingData}
        style={{ flexGrow: 0 }}
        renderItem={({ item, index }) => (
          <SlideItem
            item={item}
            index={Number(index)}
            scrollX={scrollX}
            containerWidth={containerWidth}
            containerHeight={containerHeight}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        bounces={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { x: scrollX },
              },
            },
          ],
          {
            useNativeDriver: false,
          }
        )}
        snapToInterval={containerWidth}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 30,
        }}
      />
    </View>
  );
};

export default NowPlaying;

const styles = StyleSheet.create({
  itemContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    justifyContent: "center",
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.light,
    fontFamily: "SF-PRO",
    marginTop: 20,
  },
  desc: {
    fontSize: SIZES.medium,
    color: "#BFBFBF",
    fontFamily: "SF-PRO",
  },
  ratingBox: { flexDirection: "row", alignItems: "center", gap: 6 },
  rating: {
    fontSize: SIZES.large,
    color: "#f2f2f2",
    fontFamily: "SF-PRO",
  },
  totalRating: {
    fontSize: SIZES.small,
    color: "#BFBFBF",
    fontFamily: "SF-PRO",
  },
});
