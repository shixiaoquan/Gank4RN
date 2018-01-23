/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: edmond Created:01/20/2018
 */

import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    contactView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contactImage: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },
    contact: {
        fontSize: 16
    },
    image: {
        width: width ,
    }
})

export default styles
