import React, {useState} from "react";
import {SafeAreaView, Text, View, TextInput, TouchableOpacity, FlatList} from "react-native";
import {appStyles as styles} from "./styles/styles";

function App() {
    const [text, setText] = useState("") //useState has two elements. one is variable and other one is a function
    const [tasks, setTasks] = useState([]);

    const handleAddTaskPress = () => {
        setTasks([...tasks, text]);
        setText("")
    }

    const handleRemoveTaskPress = (index) => {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>Hello</Text>
                <Text style={styles.subtitle}>press "add" to add to list</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your task here"
                    onChangeText={
                        setText
                    }
                    value={text}
                />
                <TouchableOpacity
                    style={styles.button} //setText
                    onPress={
                        handleAddTaskPress
                        //setShowingText("")
                    }
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
                <View style={styles.divider}/>

                <FlatList
                    data={tasks}
                    renderItem={({item, index}) => (
                        <View style={styles.taskContainer}>
                            <Text style={styles.taskText}>{item}</Text>
                            <TouchableOpacity style={styles.taskDelete}
                                              onPress={() => handleRemoveTaskPress(index)}
                            >
                                <Text style={styles.taskDeleteText}>X</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={() => {
                        return Date.now()  + Math.random()
                    }}
                />
            </View>
        </SafeAreaView>
    );
}


export default App