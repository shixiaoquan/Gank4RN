/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: edmond Created:01/20/2018
 */

import React, { Component } from 'react'
import { View, ImageBackground, Dimensions, TouchableOpacity, Text, StyleSheet } from 'react-native'
import AuthorView from "./AuthorView";

const width = Dimensions.get('window').width

export default class IOSItem extends Component {
    render() {
        const {item} = this.props
        // console.log('item.images',item.images)
        return(
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.props.navigation.navigate(
                    'Detail',
                    {
                        url: item.url || 'http://www.shixiaoquan.win'
                    }
                )}
            >
                <ImageBackground
                    style={styles.image}
                    source={item.images ? {uri: item.images[0]} : require('../image/lucy.jpg')}

                >
                    <View>
                        <Text>{item.desc}</Text>
                        <AuthorView name={item.who} />
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
    image: {
        width: width,
        height: width * 2 / 3,
        borderColor: 'transparent',
        justifyContent: 'flex-end',
        paddingBottom: 15,
        paddingHorizontal: 15
    },
    desc: {
        fontSize: 18,
    },
})
