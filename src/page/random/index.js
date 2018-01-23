/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: edmond Created:01/20/2018
 */

import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './style'

export default class Random extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Random</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('DrawerToggle')}
                >
                    <Text>show Drawer</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
