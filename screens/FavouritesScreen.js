import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavouritesContext } from "../store/context/favourite-context";

function FavouritesScreen() {
  const FavoriteMealCtx = useContext(FavouritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    FavoriteMealCtx.ids.includes(meal.id)
  );

  if(favoriteMeals.length===0){
    return <View style={style.rootContainer}>
        <Text style={style.text}>No list Added</Text>
    </View>
  }

  return <MealsList items={favoriteMeals} />;
}
export default FavouritesScreen;

const style = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
});
