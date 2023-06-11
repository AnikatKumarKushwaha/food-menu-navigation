import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavouritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealId] = useState([]);

  function addFavorite(id) {
    setFavoriteMealId((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealId((currrentFavIds) =>
      currrentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value ={
    ids:favoriteMealIds,
    addFavorite:addFavorite,
    removeFavorite:removeFavorite,
  }

  return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>;
}

export default FavouritesContextProvider;
