import { View, TextInput, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

import { shadow } from "../common/styles";

// multiple styles can be applied within array
function Search({ setTerm }) {
  const [input, setInput] = useState("");

  const handleEndEditing = () => {
    if (!input) return;
    setTerm(input);
    setInput("");
  };

  return (
    <View style={[styles.container, styles.shadow]}>
      <FontAwesome name="search" size={25} />

      <Text>{input}</Text>

      <TextInput
        placeholder="Restaurants, food"
        style={styles.input}
        value={input}
        onChangeText={(text) => {
          // same as onChange event, text = e.target.value
          setInput(text);
        }}
        onEndEditing={handleEndEditing} // onEndEditing - event which will work after finishing typing
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 30,
  },

  shadow,

  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "100%",
  },
});

export default Search;
