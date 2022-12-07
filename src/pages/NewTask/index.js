import React, { useState } from "react"
import {View, Text,TextInput,TouchableOpacity} from "react-native"
import database from "../../config/firebaseConfig"
import styles from "./style"

export default function NewTask({ navigation }){
    const [description, setDescription] = useState(null)
 
    function addTask(){
        if (description !== "" && description !== ''&& description !== null) {
            database.collection('Tasks').add({
                description: description,
                status: false
              })
              navigation.navigate("Minhas atividades");
        }
        alert("Lembrete vazio!")

    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Ex: Tirar a teia de aranha"
                onChangeText={setDescription}
                value={description}
                />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={()=> {addTask()}}>
                <Text style={styles.save}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}