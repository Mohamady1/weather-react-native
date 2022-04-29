import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Error() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Icon name="location-off" color="white" size={200} />
      <Text style={{ color: "white", fontSize: 25 }}>City Not Found</Text>
    </View>
  );
}
