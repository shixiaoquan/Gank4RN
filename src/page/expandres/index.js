/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: edmond Created:01/20/2018
 */

import React, { Component } from 'react'
import { View, StatusBar, FlatList } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import uuidv1 from "uuid/v1";

import styles from './style'
import Header from "../../component/Header"
import Separator from "../../component/Separator";
import Constant from "../../Constant";
import ExpandResItem from "../../component/ExpandResItem";

export default class ExpandRes extends Component {
    constructor(props) {
        super(props)

        this.state={
            data: []
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar
                    translucent={false}
                    hidden={false}
                    backgroundColor={Constant.themeColor}
                />
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.ItemSeparatorComponent}
                />
            </SafeAreaView>
        )
    }

    renderItem = ({item}) => <ExpandResItem item={item} navigation={this.props.navigation} />

    keyExtractor = () => uuidv1()

    ItemSeparatorComponent = () => {
        return <Separator/>;
    }

    fetchData = () => {
        fetch(`${Constant.apibase}/${Constant.frontend}/10/1`)
            .then(response => response.json())
            .then(responseJson => {
                // console.log('responseJson:', responseJson)
                this.setState({data: responseJson.results})
            })
            .catch(error => console.error(error))
    }
}
