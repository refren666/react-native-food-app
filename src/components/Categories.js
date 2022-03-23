import { FlatList, View } from "react-native";

import CategoryItem from "./CategoryItem";
import { products } from "../store/state";

export default function Categories({ setTerm, term }) {
  return (
    <View>
      <FlatList
        data={products}
        horizontal={true}
        renderItem={({ item, index }) => {
          {
            /*map: 1st-data={array}, 2nd-renderItem={callback}*/
          }
          return (
            <CategoryItem
              name={item.name}
              image={item.image}
              index={index}
              active={item.name.toLowerCase() === term.toLowerCase()} // custom active!
              handleTap={() => setTerm(item.name)} // handleTap = custom event function
            />
          );
        }}
        showsHorizontalScrollIndicator={false} // hides scrollbar
        keyExtractor={(category) => category.id} // key, which is extracted with callback!
      />
    </View>
  );
}
