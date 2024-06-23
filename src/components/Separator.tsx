import { View } from "react-native";
import React from "react";

const Separator = ({ size, height }: { size?: number; height?: number }) => {
  return <View style={{ width: size, height }} />;
};

export default Separator;
