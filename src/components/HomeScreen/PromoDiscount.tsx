import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./Header";
import { COLORS } from "../../constants/theme";

const PromoDiscount = () => {
  return (
    <View>
      <Header title={"Promo & Discount"} link={"promoDiscount"} />
      <ImageBackground
        source={require("../../../assets/images/promo.png")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <View style={styles.content}>
          <Image
            source={require("../../../assets/images/cgv.png")}
            style={styles.image}
          />
          <View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <Text
                style={{
                  color: COLORS.light,
                  fontSize: 83.93,
                  fontWeight: "700",
                  height: 98,
                }}
              >
                30
              </Text>
              <View style={{ gap: -10 }}>
                <Text
                  style={{
                    color: COLORS.light,
                    fontSize: 43.79,
                    fontWeight: "700",
                  }}
                >
                  %
                </Text>
                <Text
                  style={{
                    color: COLORS.light,
                    fontSize: 22.28,
                    fontWeight: "700",
                  }}
                >
                  OFF
                </Text>
              </View>
            </View>
            <Text style={{ color: COLORS.light, fontSize: 14.61 }}>
              Movie vouchers free
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PromoDiscount;

const styles = StyleSheet.create({
  bgImage: {
    minHeight: 224,
    borderRadius: 28,
  },
  content: {
    flex: 1,
    alignItems: "flex-end",
    padding: 18,
  },
  image: {},
});
