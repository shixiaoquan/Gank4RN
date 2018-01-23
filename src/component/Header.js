/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: edmond Created:01/20/2018
 */

import React, { Component } from 'react'
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerToggle')}>
                    <Image
                        source={require('../image/menu.png')}
                        style={styles.image}
                    />
                </TouchableOpacity>
                <Text style={styles.text}>
                    { this.props.title }
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        paddingLeft: 10,
        paddingRight: 40,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#E8296A'
    },
    image: {
        width: 30,
        height: 30,
    },
    text: {
        flex: 1,
        textAlign: 'center'
    }
})
