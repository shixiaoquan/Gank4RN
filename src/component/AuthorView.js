/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: edmond Created:01/22/2018
 */

import React, {Component} from 'react'
import {View, Image, Text, StyleSheet} from "react-native";

export default class AuthorView extends Component {
    render() {
        return(
            <View style={styles.authorView}>
                <Image
                    style={styles.authorIcon}
                    source={require('../image/lucy.jpg')}
                />
                <Text style={[styles.authorName, {color: this.props.color || 'black'}]} >{this.props.name || '佚名'}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    authorView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    authorIcon: {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    authorName: {
        fontSize: 13,
        marginLeft: 10,
    }


})
