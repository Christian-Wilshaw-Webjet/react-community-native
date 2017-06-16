import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Switch, Text, Dimensions } from 'react-native';
import Header from '../../../../components/header.js';
import UsersMarkers from '../../../../utils/usersMarkers';
import EventsMarkers from '../../../../utils/eventsMarkers';
import MapComponent from './components/mapComponent'

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 20;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

let switchPosition = false;
let usersMarkers = []
let eventsMarkers = []

class ReactMapScene extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };
    constructor (props) {
        super(props);
        this.state = {
            currentRegion: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            },
            lat: 0,
            long: 0,
            usersMarkers: [],
            eventsMarkers: [],
            currentMarkersShow: true,
            markersArray: []
        };
    }
    componentDidMount () {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({ currentRegion: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            } });
        }, (error) => {
            console.log(error);
        },
            {
                enableHighAccuracy: true, timeout: 20000, maximumAge: 10000
            });
        navigator.geolocation.watchPosition((position) => {
            this.setState({ currentRegion: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            } });
        });
    }
    componentWillMount () {
        UsersMarkers
          .getMarkers()
          .then((res) => {
              usersMarkers = res
          }, (error) => {
              console.log(error);
          }
        )
        EventsMarkers
          .getMarkers()
          .then((res) => {
              eventsMarkers = res
          }, (error) => {
              console.log(error);
          }
        );
    }
    render () {
        return (
            <View style={{ flex: 1 }}>
                <Header leftIcon="bars" navigatorLeft={() => this.props.navigation.navigate('DrawerOpen')} title="React Map" />
                <View style={styles.touchableElementStyle}>
                    <View style={styles.switchElementContainer}>
                        <Text style={[
                            styles.textStyle, {
                            }
                        ]}>
                          Switch Map
                        </Text>
                        <Switch onValueChange={(value) => {
                            switchPosition = !switchPosition;
                        }} value={switchPosition} />
                    </View>
                </View>
                <View style={styles.container}>
                    <MapComponent usersMarkers={usersMarkers}
                      eventsMarkers={eventsMarkers}
                      switchMap={switchPosition}
                      region={this.state.currentRegion}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    touchableElementStyle: {
        height: 50,
        width: window.width,
        backgroundColor: '#EEE',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        marginBottom: 10
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

export default ReactMapScene;
