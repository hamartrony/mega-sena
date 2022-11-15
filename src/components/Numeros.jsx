import { StyleSheet, Text, View } from "react-native"

export default ({num}) =>{
    return(
        <View style={style.Container}>
            <Text style={[style.Num]}>
                {num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        height:50,
        width:50,
        backgroundColor:'#000',
        margin:5,
        borderRadius:25,
        alignContent:"center",
        justifyContent:"center",
    },
    Num:{
        color:"#FFF",
        textAlign:"center",
    }
})