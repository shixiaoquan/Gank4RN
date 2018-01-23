/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: edmond Created:01/20/2018
 */

import React, { Component } from 'react'
import {Image, StatusBar, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import styles from './style'
import Header from "../../component/Header"
import Constant from "../../Constant";

export default class About extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar
                    translucent={false}
                    hidden={false}
                    backgroundColor={Constant.themeColor}
                />
                <Image
                    style={styles.image}
                    source={require('../../image/zeroandsanji.jpeg')}
                    resizeMode={'contain'}
                />
                <TouchableOpacity
                    style={styles.contactView}
                    onPress={() => this.props.navigation.navigate(
                        'Detail',
                        {
                            url: 'https://www.jianshu.com/u/0c7932d77515'
                        }
                    )}
                >
                    <Image
                        style={styles.contactImage}
                        source={require('../../image/jianshu.jpeg')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.contactView}
                    onPress={() => this.props.navigation.navigate(
                        'Detail',
                        {
                            url: 'https://github.com/shixiaoquan'
                        }
                    )}
                >
                    <Image
                        style={[styles.contactImage, {width: 60, height: 60}]}
                        source={require('../../image/github.jpeg')}
                    />
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
