// import components from library; status bar - widgets from the top of a screen
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, StyleSheet } from "react-native";

import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Restaurants from "../components/Restaurants";

export default function HomeScreen() {
  const [term, setTerm] = useState("Burger");

  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      {/* Works same as map! P.A. destructured 'item' is mandatory! horizontal works as 'flex-direction: row' ! */}
      <Categories term={term} setTerm={setTerm} />
      <Restaurants term={term} />
      <StatusBar />
    </View>
  );
}

// Here we specify styles for our components
const styles = StyleSheet.create({
  container: {
    minHeight: "100vh",
    backgroundColor: "lightskyblue",
  },
});
