import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";
import icon from "./WeatherLogo";

export default function Result({ data }) {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: 360,
          height: 600,
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 30 }}>
            {data.name}, {data.sys.country === "IL" ? "PS" : data.sys.country}
          </Text>
          <Image
            style={{
              width: 150,
              height: 80,
              marginLeft: 40,
              borderRadius: 20,
            }}
            source={{
              uri:
                data.sys.country === "IL"
                  ? "https://www.crwflags.com/fotw/images/p/ps.gif"
                  : `https://countryflagsapi.com/png/${data.sys.country}`,
            }}
          />
        </View>

        {icon(data.weather[0].icon, 140)}

        <View style={styles.row}>
          <Text style={{ color: "white", fontSize: 25 }}>
            {data.main.temp.toFixed(0)}
          </Text>
          <Text style={{ lineHeight: 16, fontSize: 25, color: "white" }}>
            o
          </Text>
          <Text style={{ fontSize: 25, color: "white" }}> C</Text>
        </View>
        <Text style={{ color: "white", fontSize: 27 }}>
          {data.weather[0].description}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: 270,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.flex}>
            <Text style={{ color: "white", fontSize: 20 }}>Feels Like</Text>
            <View style={styles.row}>
              <Text style={{ color: "white", fontSize: 18 }}>
                {data.main.feels_like.toFixed(0)}
              </Text>
              <Text style={{ lineHeight: 12, color: "white", fontSize: 18 }}>
                o
              </Text>
              <Text style={{ color: "white", fontSize: 18 }}> C</Text>
            </View>
          </View>
          <View style={styles.flex}>
            <Text style={{ color: "white", fontSize: 20 }}>Wind Speed</Text>
            <Text style={{ color: "white", fontSize: 18 }}>
              {data.wind.speed} km/h
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.205)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: 120,
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
