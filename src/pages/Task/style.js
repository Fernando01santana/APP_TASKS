import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#312F47",
    paddingTop:20,
},
iconButton:{
    color:"#ffffff",
    fontSize:20,
    fontWeight:"bold"
},
tasks:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:5
},
deleteTask:{
    justifyContent:"center",
    paddingLeft:15
},
descriptionText:{
    width:"75%",
    alignContent:"flex-start",
    backgroundColor:"#40375F",
    padding:12,
    paddingHorizontal: 20,
    borderRadius:50,
    marginTop:5,
    marginBottom: 5,
    marginRight:15,
    color:"#fff",
},
buttonNewTask:{
    padding:10,
    width:"100%",
    height:60,
    position:"relative",
    bottom: 30,
    backgroundColor:"#F92e6a",
    borderRadius:50,
    justifyContent:"center",
    alignItems: "center",
    marginBottom:20
}
})

export default styles