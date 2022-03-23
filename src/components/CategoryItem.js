import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

import { shadow } from "../common/styles";

function CategoryItem({ name, image, active, handleTap }) {
  return (
    /*onPress === onClick*/
    <TouchableOpacity onPress={handleTap}>
      <View
        style={[
          styles.container,
          styles.shadow,
          active ? { backgroundColor: "orange" } : { backgroundColor: "white" },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>

        <Text style={styles.foodItemName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 85,
    height: 120,
    borderRadius: 50,
    marginVertical: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  shadow,

  image: {
    width: 37,
    height: 37,
  },

  imageContainer: {
    width: 55,
    height: 55,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginBottom: 5,
  },

  foodItemName: {
    fontStyle: "italic",
    fontWeight: "500",
  },
});

export default CategoryItem;
