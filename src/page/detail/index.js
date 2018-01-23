/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: edmond Created:01/20/2018
 */

import React, { Component } from 'react'
import { View, WebView } from 'react-native'

import styles from './style'

export default class Detail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.container}>
                <WebView
                    style={styles.webView}
                    source={{uri: this.props.navigation.state.params.url}}
                    scalesPageToFit={true}
                />
            </View>
        )
    }
}
