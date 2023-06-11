import { Text, View, StyleSheet } from "react-native";
function List({ data }) {
  return data.map((dataPoint) => (
    <View style={style.ListItem} key={dataPoint}>
      <Text style={style.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const style = StyleSheet.create({
    ListItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:'#e2b497'
    },
    itemText:{
        color:"#3f2f25",
        textAlign:'center',
    }
});
