import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity, Linking, TextInput } from 'react-native';
import theme from '../../components/theme';

const Register = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View  >
                <Image
                    style={styles.upLogo}
                    source={require('../../assets/foto1.png')}
                />
            </View>

            <View style={styles.container}>
                <Image
                    source={require('../../assets/WelcomeOnbard.png')}
                />
                <Text style={styles.TextStyle}>Let’s help you meet up your tasks.</Text>

                <View style={styles.Textcontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter you full name"

                    />
                </View>
                <View style={styles.Textcontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter you email"

                    />
                </View>
                <View style={styles.Textcontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Create password"
                        keyboardType="numeric"

                    />
                </View>
                <View style={styles.Textcontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm password"
                        keyboardType="numeric"

                    />
                </View>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                >

                    <Text style={{ color: theme.colors.white, fontWeight: 'bold' }}> Register</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                        Already have an account ?
                    </Text>

                    <Text style={{ color: theme.colors.primary }}
                        onPress={() => alert("^_^")}>
                        Sing up
                    </Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: theme.colors.primary,
        //SORU!!!!!!  marginTop: 22 &&  margin: 40,
        margin: 40,
        width: 315,
        marginTop: 22,
        alignItems: 'center',
    },

    upLogo: {
        width: 200,
        height: 173,
    },
    TextStyle: {
        marginTop: 15,
        marginBottom: 66
    },
    Textcontainer: {
        width: '95%',
    },
    input: {
        marginTop: 17,
        backgroundColor: theme.colors.white,
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        margin: 5,
    },
    button: {
        backgroundColor: theme.colors.primary,
        width: 310,
        height: 49,
        borderRadius: 20,
        marginTop: 47,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 41,

    }



})
export default Register;
