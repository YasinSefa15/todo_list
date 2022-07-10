import {StyleSheet} from "react-native";

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "lightblue",
        //marginHorizontal: 16, sadece yatayda margin
        margin: 16
    },
    title: {
        fontSize: 30,
    },
    subtitle: {
        fontSize: 20,
        marginTop: 4,
        color: '#666'
    },
    input: {
        //backgroundColor: 'green',
        //padding : 16,
        //margin: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 18,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginTop: 16
    },
    button: {
        backgroundColor: 'lightgreen',
        fontSize: 18,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 6,
        alignItems: "center",
        marginTop: 12,
        alignSelf: "flex-end"
    },
    buttonText: {
        fontSize: 18
    },
    divider: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 32
    },
    taskContainer:{
        marginBottom: 8,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 12
    },
    taskText:{
        fontSize: 15

    },
    taskDelete:{
        backgroundColor: "red",
        width: 23,
        height: 23,
        borderRadius: 13,
        justifyContent: "center",
        alignItems: "center"
    },
    taskDeleteText:{
        fontSize: 15,
        color: "white"
    },
})

