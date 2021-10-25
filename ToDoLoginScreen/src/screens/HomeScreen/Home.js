import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import theme from '../../components/theme';



const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>

            <View  >
                <Image
                    style={styles.upLogo}
                    source={require('../../assets/foto1.png')}
                />
            </View>

            <View style={{
                flex: 1,
                // backgroundColor: theme.colors.primary,
                margin: 40,
                width: 295
            }}>
                <Image
                    style={{ alignSelf: 'center' }}
                    source={require('../../assets/foto2.png')}
                />
                <Text style={styles.textstyle}>
                    Get things done with TODo
                </Text>
                <Text style={styles.text2}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the ,
                </Text>

                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('Register')}
                >

                    <Text style={styles.text3}> Get started</Text>

                </TouchableOpacity>

            </View>


        </View >

    );
}

const styles = StyleSheet.create({

    upLogo: {
        width: 200,
        height: 173,
    },
    textstyle: {
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 81,
    },
    text2: {
        color: theme.colors.text,
        textAlign: 'center',
        marginTop: 34,
        fontSize: 12,
    },
    button: {
        backgroundColor: theme.colors.primary,
        width: 310,
        height: 49,
        borderRadius: 5,
        marginTop: 47,
        justifyContent: 'center',
        alignItems: 'center',


    },
    text3: {
        fontSize: 18,
        color: theme.colors.white,
        fontWeight: 'bold',
    }
});

export default Home;