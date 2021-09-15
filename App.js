import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native";
import { AppRegistry } from "react-native";
import {
  Button,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";

class App extends Component {
  render() {
    const goBack = () => {
      console.log("Went Back!");
    };

    const openPicker = () => {};

    return (
      <PaperProvider>
        <Appbar.Header style={styles.bar}>
          <Appbar.Content title="File Companion" titleStyle={styles.title} />
        </Appbar.Header>
        <View style={styles.mainView}>
          <Button
            icon="upload"
            mode="outlined"
            compact="true"
            onPress={() => console.log("Pressed")}
            style={styles.butt}
            labelStyle={{ fontSize: 24, fontWeight: "bold" }}
          >
            Upload
          </Button>
        </View>
      </PaperProvider>
    );
  }
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: DefaultTheme.colors.accent,
  },
  mainView: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
  },
  butt: {
    marginTop: 20,
    width: 200,
    fontSize: 100,
  },
  title: {
    fontWeight: "bold",
  },
});
export default App;
