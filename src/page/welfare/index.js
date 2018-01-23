/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: edmond Created:01/20/2018
 */

import React, { Component } from 'react'
import { View, Image, FlatList, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native'
import uuidv1 from 'uuid/v1'
import { SafeAreaView } from 'react-navigation'

import styles from './style'
import Header from "../../component/Header"
import WelfareItem from '../../component/WelfareItem'
import MyFlatList from '../../component/MyFlistList'
import Separator from '../../component/Separator'
import Constant from '../../Constant'

export default class Welfare extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            zIndex: 0,
        }

        console.log('Welfare constructor')
    }

    componentDidMount() {
        this.fetchData()
        this.props.navigation.navigate('DrawerToggle')
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar
                    translucent={true}
                    hidden={true}
                    backgroundColor={'transparent'}
                />
                <TouchableOpacity
                    style={[styles.barView, {zIndex: this.state.zIndex}]}
                    onPress={() => this.props.navigation.navigate('DrawerToggle')}
                >
                    <Image
                        style={{width: 60, height: 60, borderRadius: 10}}
                        source={require('../../image/menu_s.png')}
                    />
                </TouchableOpacity>

                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.data}
                    horizontal={true}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.ItemSeparatorComponent}
                    onScroll={this.onScroll}
                />
            </View>
        )
    }

    renderItem = ({ item, index }) => <WelfareItem item={item} onPress={this.onPressItem} />

    onScroll = () => this.state.zIndex !== 0 && this.setState({zIndex: 0})

    onPressItem = () => this.state.zIndex !== 999 && this.setState({zIndex: 999})

    keyExtractor = () => uuidv1()

    ItemSeparatorComponent = () => {
        return <Separator/>;
    }

    fetchData = () => {
        fetch(`${Constant.apibase}/${Constant.welfare}/10/1`)
            .then(response => response.json())
            .then(responseJson => {
                // console.log('responseJson:', responseJson)
                this.setState({data: responseJson.results})
            })
            .catch(error => console.error(error))
    }
}
