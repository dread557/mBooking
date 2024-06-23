import { StatusBar } from "expo-status-bar";
import {
  Animated,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../constants/theme";
import { OnBoardingSlidesData } from "../data/Slides";
import OnBoardingSlideItem from "../components/OnBoardingSlideItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AuthStack";
import CustomButton from "../ui/Button";
import Paginator from "../components/Paginator";

export type Props = NativeStackScreenProps<RootStackParamList>;

const OnBoardingScreen = ({ navigation }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Image source={require("../../assets/images/logo.png")} style={{}} />
        <Pressable style={styles.translateBtn}>
          <View style={styles.translateContent}>
            <Image
              source={require("../../assets/images/translate.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ color: "#E6E6E6", fontSize: SIZES.small }}>
              English
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={{ flex: 3 }}>
        <FlatList
          data={OnBoardingSlidesData}
          renderItem={({ item }) => <OnBoardingSlideItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={OnBoardingSlidesData} scrollX={scrollX} />
      <View style={{ gap: 16 }}>
        <CustomButton
          title={"Sign in "}
          onPress={() => navigation.navigate("login")}
          style={styles.button}
          theme="light"
        />
        <CustomButton
          title={"Sign up "}
          onPress={() => navigation.navigate("signup")}
          style={styles.button}
          theme="dark"
        />
      </View>
      <Text style={styles.BottomText}>
        By sign in or sign up, you agree to our Terms of Service and Privac y
        Policy
      </Text>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  translateBtn: {
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 71,
  },
  translateContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  button: {
    marginHorizontal: 16,
  },
  BottomText: {
    color: "#B3B3B3",
    textAlign: "center",
    marginVertical: 32,
  },
});
