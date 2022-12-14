import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#312F47",
    },
    textInput:{
        width:"90%",
        marginTop:10,
        padding:10,
        height:50,
        borderBottomWidth:1,
        borderBottomColor:"#F92E6A",
        marginLeft:'auto',
        marginRight:'auto',
        color:"#fff"
    },
    buttonNewTask:{
        width:"100%",
        height:60,
        position:"absolute",
        bottom:30,
        backgroundColor:"#F92E6A",
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"
    },
    save:{
        color:"#ffffff",
        fontSize:16,
        fontWeight:"bold"
    },
    label:{
        width:"90%",
        marginTop:20,
        marginLeft:'auto',
        marginRight:'auto',
        fontSize:16,
        color:"#F92E6A"
    }
})
export default styles