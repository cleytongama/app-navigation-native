import React from 'react';
import { View, Text, Button } from 'react-native';

const Details =  function ({navigation}){

    const itemId =  navigation.getParam('itemId', 'no-id')

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Details Screen</Text>
            <Button
                title="Voltar"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

Details.navigationOptions =  {
    title: "Details"
}

export default Details