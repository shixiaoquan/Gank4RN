/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: edmond Created:01/20/2018
 */

import {Dimensions, StyleSheet } from 'react-native'
const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webView:{
        width: width,
        // height: 200
    }
})

export default styles
