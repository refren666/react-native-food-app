import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from "react-native";
import { withNavigation } from "react-navigation";
import { useEffect } from "react";

import useRestaurant from "../hooks/useRestaurant";

function RestaurantScreen({ navigation }) {
  const [{ data, loading, error }, searchRestaurant] = useRestaurant();
  const id = navigation.getParam("id");

  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;
  const imageHeight = Math.round((dimensions.width * 9) / 16);

  useEffect(() => {
    searchRestaurant(id);
  }, []);

  console.log(data);

  if (loading) return <ActivityIndicator size={"large"} marginVertical={50} />;

  if (error) return <Text>{error}</Text>;

  return (
    <View>
      <FlatList
        data={data?.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image
            style={{ height: imageHeight, width: imageWidth }}
            source={{ uri: item }}
          />
        )}
      />
    </View>
  );
}

export default withNavigation(RestaurantScreen);
