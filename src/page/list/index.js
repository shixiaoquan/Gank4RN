/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: edmond Created:01/20/2018
 */

import React, { Component } from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import uuidv1 from 'uuid/v1'
import { SafeAreaView } from 'react-navigation'

import styles from './style'
import Header from "../../component/Header"
import WelfareItem from '../../component/WelfareItem'
import MyFlatList from '../../component/MyFlistList'
import Separator from "../../component/Separator";
import Constant from "../../Constant";

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.fetchData()
    }

    componentWillReceiveProps(nextProps) {


        console.log('componentWillReceiveProps Welfare props:', nextProps)
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Header title={'Welfare1'} navigation={this.props.navigation} />
                <FlatList
                    ref={ref => this.flatList = ref}
                    keyExtractor={this.keyExtractor}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.ItemSeparatorComponent}
                />
            </SafeAreaView>
        )
    }

    renderItem = ({ item, index }) => <WelfareItem item={item} />

    keyExtractor = () => uuidv1()

    ItemSeparatorComponent = () => {
        return <Separator/>;
    }

    fetchData = (type) => {
        fetch(`${Constant.apibase}${type}'/10/1'`)
            .then(response => response.json())
            .then(responseJson => {
                console.log('responseJson:', responseJson)
                this.setState({data: responseJson.results})
            })
            .catch(error => console.error(error))
    }
}
