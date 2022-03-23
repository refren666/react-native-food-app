import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useEffect } from "react";

import useRestaurants from "../hooks/useRestaurants";
import RestaurantItem from "./RestaurantItem";

export default function Restaurants({ term }) {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();

  useEffect(() => {
    searchRestaurants(term);
  }, [term]);

  console.log(data);

  if (loading) return <ActivityIndicator size={"large"} marginVertical={30} />; // ActivityIndicator is a loader(spinner)!

  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{error}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
      <FlatList
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },

  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});
