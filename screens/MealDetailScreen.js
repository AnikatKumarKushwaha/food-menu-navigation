import { useContext, useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import SUbTitle from "../components/MealDetail/SubTitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { FavouritesContext } from "../store/context/favourite-context";

function MealDetailScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavouritesContext);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavourite = favoriteMealsCtx.ids.includes(mealId);

  function changeFavoriteStatus() {
    if(mealIsFavourite){
      favoriteMealsCtx.removeFavorite(mealId)
    }
    else{
      favoriteMealsCtx.addFavorite(mealId)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? 'star' : 'star-outline'}
            color="white"
            onPress={changeFavoriteStatus}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatus]);

  return (
    <ScrollView style={style.rootContainer}>
      <Image style={style.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={style.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={style.detailText}
      />
      <View style={style.listOuterContainer}>
        <View style={style.listContainer}>
          <SUbTitle>Ingredients</SUbTitle>
          <List data={selectedMeal.ingredients} />
          <SUbTitle>Steps</SUbTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailScreen;

const style = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
