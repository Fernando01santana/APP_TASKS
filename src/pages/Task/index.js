import React,{useState,useEffect} from "react"
import {
    View, 
    Text,
    TouchableOpacity,
    FlatList
} from "react-native"

import {FontAwesome} from "@expo/vector-icons"

import database from "../../config/firebaseConfig"
import styles from "./style"

function deleteTask(id) {
    database.collection("Tasks").doc(id).delete();
  }
export default function Task({navigation}){
    const [task,setTask] = useState([]) 
    useEffect(()=>{
    database.collection("Tasks").onSnapshot((query)=>{
        const list = []
        query.forEach(doc => {
            list.push({...doc.data(),id:doc.id})
        });
        setTask(list)
    })
    },[])
    return (
        <View style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={task}
            renderItem={(item)=>{
                return (
                <View style={styles.tasks}>
                    <TouchableOpacity 
                    style={styles.deleteTask}
                    onPress={() => deleteTask(item.item.id)}>
                       <FontAwesome
                        name="trash"
                        size={40}
                        color="#F92e6a">

                       </FontAwesome>
                    </TouchableOpacity>
                    <Text
                     style={styles.descriptionText}
                     onPress={() => navigation.navigate("Details",{
                        id:item.item.id,
                        description:item.item.description
                     })}>
                        {item.item.description}
                    </Text>
                </View>
                )
            }}
            />
            <TouchableOpacity 
            style={styles.buttonNewTask}
            onPress={() => navigation.navigate("New Task")}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}