/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: edmond Created:01/21/2018
 */

import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import uuidv1 from "uuid/v1";

export default class MyFlistList extends Component {
    constructor(props) {
        super(props)

        this.url = this.props.url
        this.pageNumber = this.props.pageNumber
        this.state={
            data: [],
            refreshing: false,
            showLoading: true,
            showNoData: false,
            showError: false
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        const { ref, renderItem, ItemSeparatorComponent, } = this.props
        return(
            <View style={styles.container}>
                <FlatList
                    ref={ ref }
                    keyExtractor={ this.keyExtractor }
                    data={ this.state.data }
                    renderItem={ renderItem }
                    ItemSeparatorComponent={ ItemSeparatorComponent }
                    onRefresh={ this.onRefresh }
                    refreshing={this.state.refreshing}
                />
            </View>
        )
    }

    keyExtractor = () => uuidv1()

    fetchData = () => {
        fetch(this.url)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({data: responseJson.results})
            })
    }

    onRefresh = () => {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
