/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react'
import {StatusBar, Dimensions, View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import {StackNavigator, DrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

import All from './src/page/all'
import Welfare from './src/page/welfare'
import Android from './src/page/android'
import IOS from './src/page/ios'
import FrontEnd from './src/page/frontend'
import RestVideo from './src/page/restvideo'
import ExpandRes from './src/page/expandres'
import Random from './src/page/random'
import About from './src/page/about'
import Detail from "./src/page/detail";
import Constant from "./src/Constant";

const width = Dimensions.get('window').width

const AndroidStackNavigator = new StackNavigator(
    {
        Main: {
            screen: Android,
            navigationOptions: ({navigation}) => ({
                headerTitle: 'Android',
                headerBackTitle: 'Android',
                headerLeft: (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DrawerToggle')}
                    >
                        <Image
                            style={{width: 30, height: 30, marginLeft: 20}}
                            source={require('./src/image/menu.png')}
                        />
                    </TouchableOpacity>
                ),
                headerStyle: {backgroundColor: Constant.themeColor}
            })
        },
        Detail: {
            screen: Detail,
            navigationOptions: {
                headerStyle: {backgroundColor: Constant.themeColor}
            }
        }
    }
)

const IOSStackNavigator = new StackNavigator(
    {
        Main: {
            screen: IOS,
            navigationOptions: ({navigation}) => ({
                headerTitle: 'iOS',
                headerBackTitle: 'iOS',
                headerLeft: (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DrawerToggle')}
                    >
                        <Image
                            style={{width: 30, height: 30, marginLeft: 20}}
                            source={require('./src/image/menu.png')}
                        />
                    </TouchableOpacity>
                ),
                headerStyle: {backgroundColor: Constant.themeColor}
            })
        },
        Detail: {
            screen: Detail,
            navigationOptions: {
                headerStyle: {backgroundColor: Constant.themeColor}
            }
        }
    }
)

const FrontEndStackNavigator = new StackNavigator(
    {
        Main: {
            screen: FrontEnd,
            navigationOptions: ({navigation}) => ({
                headerTitle: '前端',
                headerBackTitle: '前端',
                headerLeft: (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DrawerToggle')}
                    >
                        <Image
                            style={{width: 30, height: 30, marginLeft: 20}}
                            source={require('./src/image/menu.png')}
                        />
                    </TouchableOpacity>
                ),
                headerStyle: {backgroundColor: Constant.themeColor}
            })
        },
        Detail: {
            screen: Detail,
            navigationOptions: {
                headerStyle: {backgroundColor: Constant.themeColor}
            }
        }
    }
)

const RestVideoStackNavigator = new StackNavigator(
    {
        Main: {
            screen: RestVideo,
            navigationOptions: ({navigation}) => ({
                headerTitle: '休息视频',
                headerBackTitle: '休息视频',
                headerLeft: (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DrawerToggle')}
                    >
                        <Image
                            style={{width: 30, height: 30, marginLeft: 20}}
                            source={require('./src/image/menu.png')}
                        />
                    </TouchableOpacity>
                ),
                headerStyle: {backgroundColor: Constant.themeColor}
            })
        },
        Detail: {
            screen: Detail,
            navigationOptions: {
                headerStyle: {backgroundColor: Constant.themeColor}
            }
        }
    }
)

const ExpandResStackNavigator = new StackNavigator(
    {
        Main: {
            screen: ExpandRes,
            navigationOptions: ({navigation}) => ({
                headerTitle: '拓展资源',
                headerBackTitle: '拓展资源',
                headerLeft: (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DrawerToggle')}
                    >
                        <Image
                            style={{width: 30, height: 30, marginLeft: 20}}
                            source={require('./src/image/menu.png')}
                        />
                    </TouchableOpacity>
                ),
                headerStyle: {backgroundColor: Constant.themeColor}
            })
        },
        Detail: {
            screen: Detail,
            navigationOptions: {
                headerStyle: {backgroundColor: Constant.themeColor}
            }
        }
    }
)

const AboutStackNavigator = new StackNavigator(
    {
        Main: {
            screen: About,
            navigationOptions: ({navigation}) => ({
                headerTitle: '我',
                headerBackTitle: '关于',
                headerLeft: (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DrawerToggle')}
                    >
                        <Image
                            style={{width: 30, height: 30, marginLeft: 20}}
                            source={require('./src/image/menu.png')}
                        />
                    </TouchableOpacity>
                ),
                headerStyle: {backgroundColor: Constant.themeColor}
            })
        },
        Detail: {
            screen: Detail,
            navigationOptions: {
                headerStyle: {backgroundColor: Constant.themeColor}
            }
        }
    }
)

const RootDrawer = DrawerNavigator(
    {
        Welfare: {
            screen: Welfare,
            navigationOptions: {
                drawerLabel: '福利',
                drawerIcon: ({ tintColor, focused }) => (
                    <Image
                        style={styles.drawerIcon}
                        source={
                            focused ? require('./src/image/welfare_s.png') : require('./src/image/welfare.png')
                        }
                    />
                ),
            },
        },
        Android: {
            screen: AndroidStackNavigator,
            navigationOptions: {
                drawerLabel: 'Android',
                drawerIcon: ({ tintColor, focused }) => (
                    <Image
                        style={styles.drawerIcon}
                        source={
                            focused ? require('./src/image/android_s.png') : require('./src/image/android.png')
                        }
                    />
                ),
            },
        },
        IOS: {
            screen: IOSStackNavigator,
            navigationOptions: {
                drawerLabel: 'IOS',
                drawerIcon: ({ tintColor, focused }) => (
                    <Image
                        style={styles.drawerIcon}
                        source={
                            focused ? require('./src/image/ios_s.png') : require('./src/image/ios.png')
                        }
                    />
                ),
            },
        },
        FrontEnd: {
            screen: FrontEndStackNavigator,
            navigationOptions: {
                drawerLabel: '前端',
                drawerIcon: ({ tintColor, focused }) => (
                    <Image
                        style={styles.drawerIcon}
                        source={
                            focused ? require('./src/image/frontend_s.png') : require('./src/image/frontend.png')
                        }
                    />
                ),
            },
        },
        RestVideo: {
            screen: RestVideoStackNavigator,
            navigationOptions: {
                drawerLabel: '休闲视频',
                drawerIcon: ({ tintColor, focused }) => (
                    <Image
                        style={styles.drawerIcon}
                        source={
                            focused ? require('./src/image/restvideo_s.png') : require('./src/image/restvideo.png')
                        }
                    />
                ),
            },
        },
        ExpandRes: {
            screen: ExpandResStackNavigator,
            navigationOptions: {
                drawerLabel: '拓展资源',
                drawerIcon: ({ tintColor, focused }) => (
                    <Image
                        style={styles.drawerIcon}
                        source={
                            focused ? require('./src/image/expandres_s.png') : require('./src/image/expandres.png')
                        }
                    />
                ),
            },
        },
        // All: {
        //     screen: All,
        //     navigationOptions: {
        //         drawerLabel: 'All',
        //         drawerIcon: ({ tintColor, focused }) => (
        //             <Text>*</Text>
        //         ),
        //     }
        // },
        // Random: {
        //     screen: Random,
        //     navigationOptions: {
        //         drawerLabel: 'Random',
        //         drawerIcon: ({ tintColor, focused }) => (
        //             <Text>*</Text>
        //         ),
        //     },
        // },
        About: {
            screen: AboutStackNavigator,
            navigationOptions: {
                drawerLabel: '关于',
                drawerIcon: ({ tintColor, focused }) => (
                    <Image
                        style={styles.drawerIcon}
                        source={
                            focused ? require('./src/image/about_s.png') : require('./src/image/about.png')
                        }
                    />
                ),
            },
        },
    },
    {
        drawerWidth: width * 3/ 4,
        drawerPosition: 'left',
        drawerBackgroundColor: '#fff',
        contentComponent: (props) => (
            <ScrollView>
                <View>
                    <Image
                        resizeMode={'contain'}
                        source={require('./src/image/lucy.jpg')}
                        style={styles.image}
                    />
                    <DrawerItems {...props} />
                </View>
            </ScrollView>
        ),
        contentOptions: {
            activeTintColor: '#e91e63',
            itemsContainerStyle: {
                marginVertical: 0,
            },
            iconContainerStyle: {
                opacity: 1
            }
        }

    }
);

const styles = StyleSheet.create({
    image: {
        width: width * (3 / 4),
        height: width * ((3 * 386) / (4 * 588)),
        // marginLeft: 10,
    },
    drawerIcon: {
        width: 20,
        height: 20,
    }
});



export default RootDrawer;
