import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
function CategoryGridTile({ title, color,onPress }) {
  return (
    <View style={style.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={(pressed) => [
          style.button,
          pressed ? style.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[style.innerContainer,{backgroundColor:color}]}>
          <Text style={style.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const style = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.8,
  },

  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
