import { View,Text,FlatList,StyleSheet } from "react-native";
import MealItem from "../MealItem";
function MealsList({items}){
    function renderMealItem(itemData) {
        const item = itemData.item;
    
        const mealItemProps = {
          id:item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          duration: item.duration,
          complexity: item.complexity,
          affordability: item.affordability,
        };
    
        return <MealItem {...mealItemProps} />;
      }
      return (
        <View style={Style.container}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
          />
        </View>
      ); 
}

export default MealsList;

const Style=StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
      },
})