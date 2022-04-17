import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

function LoginScreen() {
    return(
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.Header}>Welcome back to TalkTime</Text>
            <Text style={Styles.SubHeader}>You know how this works :)</Text>

            <View style= {Styles.Form}>
                <Text style={Styles.Text}>Enter your account credentials</Text>

                <TextInput placeholder='Email Address' placeholderTextColor={'white'} style={Styles.input} keyboardType='email-address'></TextInput>
                <TextInput placeholder='Your Password' placeholderTextColor={'white'} style={Styles.input} secureTextEntry={true}></TextInput>
                <TouchableOpacity style={Styles.continueButton}> 
                    <Text style={Styles.Text}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.bareButton}>
                    <Text style={Styles.subText}>Don't have an account?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
    },

    Header: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 25,
    },

    SubHeader: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
    },

    Form: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
    },

    Text: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
    },

    subText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
    },

    input: {
        height: 40,
        borderColor: '#fff',
        color: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 30,
        paddingLeft: 10,
    },

    continueButton: {
        alignSelf: 'center',
        height: 50,
        width: 125,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30,
        padding: 3
    },

    bareButton: {
        alignSelf: 'center',
    }

})

export default LoginScreen;