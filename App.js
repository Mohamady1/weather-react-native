import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import Result from "./app/Result";
import Icon from "react-native-vector-icons/FontAwesome";
import Error from "./app/Error";

export default function App() {
  const [city, setCity] = useState("");
  const final = city.replace(" ", "");
  const [data, setData] = useState([]);

  const API_Key = "4a29cf92778614560202a2847757e184";

  const getData = async () => {
    try {
      const req = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${final}&units=metric&appid=${API_Key}`
      );
      const res = await req.json();
      setData(res);
    } catch (e) {
      console.error(e);
    }
  };

  const search = () => {
    getData();
    setCity("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          value={city}
          style={{ fontSize: 25, textAlign: "center" }}
          placeholder="Search by City Name"
          onChangeText={(e) => setCity(e)}
        />
        <Button title="search" onPress={search} />
      </View>
      <View style={{ width: "100%" }}>
        {data.length === 0 ? (
          <View
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "white",
                textAlign: "center",
              }}
            >
              Welcome,
            </Text>
            <Text style={styles.color}>Search by city name for weather</Text>
          </View>
        ) : data.message === "city not found" ? (
          <Error />
        ) : (
          <Result data={data} />
        )}
      </View>
      <View>
        <Text style={styles.color}>
          By Omar Ahmed Mohamady made with <Icon name="heart" color="red" />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    height: 760,
    backgroundColor: "#2fa4ff",
  },
  input: {
    marginTop: 30,
    width: "100%",
    padding: 10,
    borderRadius: 20,
    borderColor: "transparent",
    backgroundColor: "rgba(255, 255, 255, 0.757)",
    borderWidth: 1,
  },
  color: {
    color: "white",
    fontSize: 19,
  },
});
