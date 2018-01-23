/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: edmond Created:01/22/2018
 */

import React, { Component } from 'react'
import { View } from 'react-native'

export default class Separator extends Component {

    render() {
        return(
            <View style={{
                height: this.props.height || 1,
                backgroundColor: this.props.color || '#515151'}}
            />
        )
    }
}
