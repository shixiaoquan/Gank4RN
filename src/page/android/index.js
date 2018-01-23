/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: edmond Created:01/20/2018
 */

import React, {Component} from 'react'
import {View, Text, StatusBar, FlatList} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import uuidv1 from "uuid/v1";

import styles from './style'
import Header from "../../component/Header"
import Separator from "../../component/Separator";
import Constant from "../../Constant";
import AndroidItem from "../../component/AndroidItem";

const pagerSize = 10
let pagerNumber = 1

export default class Android extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            refreshing: false,
            isLoadingMore: false,
            nomoreData: false
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
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
                    ListFooterComponent={this.ListFooterComponent}
                    ItemSeparatorComponent={this.ItemSeparatorComponent}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                    onEndReachedThreshold={0.3}
                    onEndReached={this.onLoadMore}
                />
            </SafeAreaView>
        )
    }

    renderItem = ({item}) => <AndroidItem item={item} navigation={this.props.navigation}/>

    keyExtractor = () => uuidv1()

    ItemSeparatorComponent = () => {
        return <Separator/>;
    }

    ListFooterComponent = () => {
        return(
            <View style={{alignItems: 'center', paddingVertical: 15, backgroundColor: 'red'}}>
                {this.state.isLoadingMore && <Text>正在加载数据，请稍后</Text>}
                {this.state.nomoreData && <Text>别拽了，没有数据了</Text>}
            </View>
        )
    }

    onLoadMore = () => {
        this.setState({isLoadingMore: true})
        fetch(`${Constant.apibase}/${Constant.android}/${pagerSize}/${++pagerNumber}`)
            .then(response => response.json())
            .then(responseJson => {
                let _data = this.state.data
                _data = _data.concat(responseJson.results)
                this.setState({
                    data: _data,
                    isLoadingMore: false
                })
            })
            .catch(error => {
                console.error(error)
                this.setState({isLoadingMore: false})
            })
    }

    onRefresh = () => {
        pagerNumber = 1
        this.setState({refreshing: true})
        fetch(`${Constant.apibase}/${Constant.android}/${pagerSize}/${pagerNumber}`)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    data: responseJson.results,
                    refreshing: false
                })
            })
            .catch(error => {
                console.error(error)
                this.setState({refreshing: false})
            })
    }

    fetchData = () => {
        fetch(`${Constant.apibase}/${Constant.android}/${pagerSize}/1`)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({data: responseJson.results})
            })
            .catch(error => console.error(error))
    }
}
