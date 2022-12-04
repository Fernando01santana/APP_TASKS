import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:10,
      backgroundColor:"#312F47"
    },
    map: {
      flex: 1,
    },
    newMarker: {
      height: 50,
      width: 50,
      backgroundColor: "yellow",
    },
    label:{
        color:"#ffffff",
        fontSize:20,
        fontWeight:"bold"
    },
    buttonLocation:{
        width:100,
        height:60,
        position:"relative",
        backgroundColor:"#F92e6a",
        justifyContent:"center",
        alignItems: "center",
        marginBottom:20,
        marginTop:3
    }

  });

  export default styles