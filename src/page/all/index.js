/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: edmond Created:01/20/2018
 */

import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './style'
import Header from "../../component/Header";

export default class All extends Component {
    constructor(props) {
        super(props)

        console.log('All props:', props)
    }

    componentWillReceiveProps(nextProps) {


        console.log('componentWillReceiveProps All props:', nextProps)
    }

    render() {
        return(
            <View style={styles.container}>
                <Header title={'All'} navigation={this.props.navigation} />
                <Text>All</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('DrawerToggle')}
                >
                    <Text>show Drawer</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
