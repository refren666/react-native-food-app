import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import { shadow } from "../common/styles";

function RestaurantItem({ restaurant, navigation }) {
  const { id, name, phone, image_url, is_closed, price, rating, review_count } =
    restaurant;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Restaurant", { id: id })}
    >
      <View style={[styles.shadow, styles.container]}>
        <Image style={styles.image} source={{ uri: image_url }} />
        <View style={styles.infoContainer}>
          <Text style={styles.restaurantName}>{name}</Text>
          <View style={styles.info}>
            <Text style={styles.rating}>{rating} &#9733;</Text>
            <Text style={styles.money}>{price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  shadow,

  container: {
    backgroundColor: "white",
    height: 100,
    alignSelf: "stretch",
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10,
  },

  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },

  restaurantName: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
  },

  info: {
    flexDirection: "row",
  },

  rating: {
    marginRight: 20,
  },

  money: {
    color: "gold",
  },
});

export default withNavigation(RestaurantItem);
