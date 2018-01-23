/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: edmond Created:01/20/2018
 */

import React, { Component } from 'react'
import { View, Image, Dimensions, TouchableOpacity, Text, StyleSheet } from 'react-native'
import AuthorView from "./AuthorView";

const width = Dimensions.get('window').width

export default class AndroidItem extends Component {
    render() {
        const {item, navigation} = this.props
        return(
            <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate(
                    'Detail',
                    {
                        url: item.url || 'http://www.shixiaoquan.win'
                    }
                )}
            >
                <Text style={styles.desc}>{ item.desc }</Text>
                <AuthorView name={item.who} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        // borderRadius: 6,
        // borderColor: 'grey',
        // borderWidth: 0.5,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    desc: {
        fontSize: 18,
    }
})
