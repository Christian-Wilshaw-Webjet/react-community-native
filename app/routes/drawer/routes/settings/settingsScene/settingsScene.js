import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Switch, Dimensions } from 'react-native';
import Header from '../../../../../components/header.js';
import TouchableSettings from '../touchableSettings';
const window = Dimensions.get('window');

class SettingsScene extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };
    render () {
        return (
            <View style={{ flex: 1 }}>
                <Header leftIcon="bars" navigatorLeft={() => this.props.navigation.navigate('DrawerOpen')} title="React Settings" />
                <View style={styles.container}>
                    <View style={styles.touchableElementStyle}>
                        <View style={styles.switchElementContainer}>
                            <Text style={[
                                styles.textStyle, {
                                }
                            ]}>
                              Open website in App
                            </Text>
                            <Switch />
                        </View>
                    </View>
                    <TouchableSettings leftElement="User Info" navigator={() => this.props.navigation.navigate('UserInfo')} />
                    <TouchableSettings leftElement="General App Info" navigator={() => this.props.navigation.navigate('General')} />
                    <TouchableSettings leftElement="LogOut" navigator={() => this.props.navigation.navigate('Login')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: window.height
    },
    touchableElementStyle: {
        height: 50,
        width: window.width,
        backgroundColor: '#EEE',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10
    },
    switchElementContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: window.width - 40
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'Cochin'
    }
});
export default SettingsScene;