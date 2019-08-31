import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Modal extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>Modal Page</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Close"
                />
            </View>
        )
    }
}
