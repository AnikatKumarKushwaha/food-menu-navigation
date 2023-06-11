import { StyleSheet,Text } from "react-native";


function SUbTitle({children}){
    return <Text style={style.subTitle}>{children}</Text>
}

export default SUbTitle;

const style=StyleSheet.create({
    subTitle:{
        color:'#e2b497',
        fontSize:18,
        fontWeight:'bold',
        padding:6,
        textAlign:'center',
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
        marginHorizontal:12,
        marginVertical:4,
      } 
})