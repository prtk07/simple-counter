import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState([]);
  // const [clear, setClear] = useState(null);

  const increment = () => {
    setCounter((counter) => counter + 1);
  };

  const decrement = () => {
    setCounter((counter) => counter - 1);
  };

  const handleLongPress = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Counter</Text>
      <View style={styles.counterContainer}>
        <Text style={styles.counter}>{counter}</Text>
      </View>
      <View style={styles.buttongroup}>
        <TouchableHighlight
          // onPress={decrement}
          onPressIn={(e) => {
            e.preventDefault();
            decrement();
            let timer = setInterval(decrement, 200);
            setTime([...time, timer]);
          }}
          onPressOut={() => {
            time.forEach(clearInterval);
          }}
          underlayColor="white"
        >
          <View style={styles.buttons}>
            <Text>decrement</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          // onPress={increment}
          onPressIn={(e) => {
            e.preventDefault();

            increment();
            let timer = setInterval(increment, 200);
            setTime([...time, timer]);
          }}
          onPressOut={() => {
            time.forEach(clearInterval);
          }}
          underlayColor="white"
        >
          <View style={styles.buttons}>
            <Text>increment</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  heading: {
    fontSize: 30,
    fontWeight: 800,
  },

  counterContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",

    width: 150,
    height: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  counter: {
    fontSize: 65,
    fontWeight: 700,
  },

  buttons: {
    padding: 20,
    backgroundColor: "rgb(71, 170, 255)",
    borderRadius: 5,
  },

  buttongroup: {
    display: "flex",
    flexDirection: "row",
    gap: 35,
  },
});
