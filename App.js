import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

let timer;
export default function App() {
  const [counter, setCounter] = useState(0);

  const handlePressOut = (constant) => {
    setCounter((counter) => counter + constant);
    clearInterval(timer);
  };

  const handlePressIn = (constant) => {
    timer = setInterval(() => {
      setCounter((counter) => counter + constant);
    }, 200);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Counter</Text>
      <View style={styles.counterContainer}>
        <Text style={styles.counter}>{counter}</Text>
      </View>
      <View style={styles.buttongroup}>
        <TouchableHighlight
          onPressOut={() => {
            handlePressOut(-1);
          }}
          onPressIn={() => {
            handlePressIn(-1);
          }}
          onLongPress={(e) => {
            if (e.cancelable) e.preventDefault();
          }}
          underlayColor="white"
        >
          <View style={styles.buttons}>
            <Text>decrement</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPressOut={() => {
            handlePressOut(1);
          }}
          onPressIn={() => {
            handlePressIn(1);
          }}
          onLongPress={(e) => {
            if (e.cancelable) e.preventDefault();
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
