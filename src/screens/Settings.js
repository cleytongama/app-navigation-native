import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Settings({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Screen Setting</Text>
            <Button
                onPress={() => navigation.navigate("Profile")}
                title="Navegar Profile" />
        </View>
    )
} 