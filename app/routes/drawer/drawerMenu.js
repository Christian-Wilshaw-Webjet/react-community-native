import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    StatusBar,
    View
} from 'react-native'
import { COLOR,  ThemeProvider, Toolbar, Drawer, Avatar } from 'react-native-material-ui'
import Container from './container'

const uiTheme = {
  palette: {
    primaryColor: '#B38381',
    accentColor: '#B38381'
  },
  toolbar: {
    container: {
      height: 70,
      paddingTop: 20,
    },
  },
  avatar: {
    constainer: {
      backgroundColor: '#333'
    }
  }
};

export default class DrawerMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: 'peopel',
    };
  }
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Container>
          <StatusBar translucent />
          <Toolbar
                    onLeftElementPress={() => this.props.navigation.navigate('DrawerClose')}
                    centerElement="Menu"
                  />
          <View style={styles.container}>
            <Drawer>
              <Drawer.Header style={{  container: { backgroundColor: '#B38381' },}}>
                <Text> ICON HERE </Text>
              </Drawer.Header>
              <Drawer.Section
                            style={{
                                label: {color: '#0000ff'}
                            }}
                            divider
                            items={[
                                {
                                    value: 'ReactWall',
                                    active: this.state.active == 'ReactWall',
                                    onPress: () => {
                                        this.setState({ active: 'ReactWall' });
                                        this.props.navigation.navigate('ReactWall');
                                      },
                                  },
                                {
                                    value: 'ReactMap',
                                    active: this.state.active == 'ReactMap',
                                    onPress: () => {
                                        this.setState({ active: 'ReactMap' });
                                        this.props.navigation.navigate('ReactMap');
                                      },
                                  },
                                {
                                    value: 'Best Practices',
                                    active: this.state.active == 'Best Practices',
                                    onPress: () => {
                                        this.setState({ active: 'Best Practices' });
                                        this.props.navigation.navigate('Best Practices');
                                      },
                                  },
                                {
                                    value: 'Tutorials',
                                    active: this.state.active == 'Tutorials',
                                    onPress: () => {
                                        this.setState({ active: 'Tutorials' });
                                        this.props.navigation.navigate('Tutorials');
                                      },
                                  },
                                {
                                    value: 'Articles',
                                    active: this.state.active == 'Articles',
                                    onPress: () => {
                                        this.setState({ active: 'Articles' });
                                        this.props.navigation.navigate('Articles');
                                      },
                                  },
                                {
                                    value: 'Events',
                                    active: this.state.active == 'Events',
                                    onPress: () => {
                                        this.setState({ active: 'Events' });
                                        this.props.navigation.navigate('Events');
                                      },
                                  },
                            ]}
                        />
            </Drawer>
          </View>
        </Container>
      </ThemeProvider>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B38381',
      },
    header: {
        backgroundColor: '#B38381',
      },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
  });
