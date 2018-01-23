/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: edmond Created:01/20/2018
 */

import React, { Component } from 'react'
import { Dimensions, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import AuthorView from "./AuthorView";

const imageUrl = 'http://i.17173cdn.com/2fhnvk/YWxqaGBf/cms3/IOoApLbmeivDCrw.jpg'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class WelfareItem extends Component {
    render() {
        // console.log('this.props.item.url:', imageUrl)
        const {item} = this.props
        return(
            <TouchableOpacity
                onPress={this.props.onPress}
                activeOpacity={1}
            >
                <ImageBackground style={styles.image} source={{uri: item.url}}>
                    <AuthorView name={item.who || '佚名'} color={'white'} />
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
    image: {
        width: width,
        height: height,
        flexDirection: 'column-reverse',
        paddingBottom: 50,
        alignItems: 'center'
    }
})
