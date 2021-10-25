import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import theme from '../../components/theme';

const Login = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>

            <View>
                <Image
                    style={styles.upLogo}
                    source={require('../../assets/foto1.png')}
                />
            </View>

            <View style={styles.container}>
                <Image
                    style={styles.welcome}
                    source={require('../../assets/Welcome.png')}
                />
                <View style={styles.container}>
                    <Image
                        style={styles.Image}
                        source={require('../../assets/foto3.png')}
                    />
                    <View style={styles.Textcontainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter you email"
                        // keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.Textcontainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm password"
                            keyboardType="numeric"
                        // password="false"
                        />
                    </View>

                    <Text style={{ color: theme.colors.primary, marginTop: 36 }}
                        onPress={() => alert("başarılı")}>
                        Forgot password?
                    </Text>

                    <TouchableOpacity style={styles.button}
                        onPress={() => alert("başarıla giriş yaptınız ")}
                    >

                        <Text style={{ color: theme.colors.white, fontWeight: 'bold' }}> Get started</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Already have an account ?
                        </Text>

                        <Text style={{ color: theme.colors.primary }}
                            onPress={() => navigation.navigate('Register')}>
                            Sing up
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: theme.colors.primary,
        //SORU!!!!!!  marginTop: 22 &&  margin: 40,
        margin: 40,
        width: 295,
        marginTop: 22,
        alignItems: 'center',
    },
    upLogo: {
        width: 200,
        height: 173,
    },
    titletext: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
    welcome: {
        // left: 85,
        //  position: "relative",
        //top: 25,
    },
    Image: {
        marginTop: 10,
        // left: 50,
    },
    input: {
        marginTop: 30,
        backgroundColor: theme.colors.white,
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        margin: 5,
    },
    Textcontainer: {
        width: '95%',

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

export default Login
