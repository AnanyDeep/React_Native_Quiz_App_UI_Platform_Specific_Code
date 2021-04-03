import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Checkbox } from 'react-native-paper'


export default function B_P({navigation}) {

    const [python, setPython] = React.useState(false);
    const [javascript, setJavaScript] = React.useState(false);
    const [reactjs, setReactJS] = React.useState(false);
    const [java, setJAVA] = React.useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({

            title : "Grow With Quiz",
            headerTitleAlign : "center",
            headerTintColor : "#FFF",
            headerTransparent : 'true'  ,
            headerStyle :{backgroundColor :"teal"},
            headerLeft : null
        });
      }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Header</Text>
            </View>

            <View style={styles.footer}>
                <View style={styles.checkBoxContainer}>
                    <Text style={styles.checkBoxText}>Python</Text>
                    <Checkbox
                        color = "teal"
                        uncheckedColor = "green"
                        status={python ? 'checked' : 'unchecked'}
                        onPress={() => {
                        setPython(!python);
                        }}
                    />
                </View>

                <View style={styles.checkBoxContainer}>
                    <Text style={styles.checkBoxText}>JavaScript</Text>
                    <Checkbox
                        color = "teal"
                        uncheckedColor = "green"
                        status={javascript ? 'checked' : 'unchecked'}
                        onPress={() => {
                        setJavaScript(!javascript);
                        }}
                    />
                </View>

                <View style={styles.checkBoxContainer}>
                    <Text style={styles.checkBoxText}>React JS</Text>
                    <Checkbox
                        color = "teal"
                        uncheckedColor = "green"
                        status={reactjs ? 'checked' : 'unchecked'}
                        onPress={() => {
                        setReactJS(!reactjs);
                        }}
                    />
                </View>

                <View style={styles.checkBoxContainer}>
                    <Text style={styles.checkBoxText}>JAVA</Text>
                    <Checkbox
                        color = "teal"
                        uncheckedColor = "green"
                        status={java ? 'checked' : 'unchecked'}
                        onPress={() => {
                        setJAVA(!java);
                        }}
                    />
                </View>
            </View>
            <StatusBar barStyle= "light-content" backgroundColor = "teal"/>
        </View>
    )
}

const styles = StyleSheet.create({

    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "teal"
    },

    header : {
        backgroundColor : "teal",
        flex : 1,
        width : "100%",
        borderBottomLeftRadius : 120,
        borderBottomRightRadius : 120,
        justifyContent : "center",
        textAlign : "center",
        alignItems : "center"
    },
    footer : {
        flex : 2,
        backgroundColor : "#FFF",
        width : "100%",
        borderTopLeftRadius :  80,
        borderTopRightRadius : 80,
        justifyContent : "center",
        textAlign : "center",
        alignItems : "center"
    },
    checkBoxContainer :{
        flexDirection : "row",
        alignItems : "center",
        justifyContent :"center",
        borderWidth : 5,
        borderColor : "teal",
        borderRadius : 100,
        paddingHorizontal : 50,
        paddingVertical : 10,
        marginBottom : 30,
    },

    checkBoxText :{
        fontSize :20,
        paddingBottom :5,
        // justifyContent : "space-around"
        marginRight : 100
    }

})
