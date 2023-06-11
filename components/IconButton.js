import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress} 
      style={({ pressed }) => pressed && style.pressed}
    >
      <Ionicons name={icon} size={23} color={color} />
    </Pressable>
  );
}
export default IconButton;

const style = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
