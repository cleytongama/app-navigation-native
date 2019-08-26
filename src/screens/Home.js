import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';

// import { Container } from './styles';

const Home = function (props) {
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#6a51ae"
            />
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>
                <Button
                    title="Navegar para detalhes"
                    onPress={() => props.navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'Qualquer coisa aqui'
                    })}
                />
            </View>
        </>
    );
}

Home.navigationOptions = function ({ navigation }) {
    return {
        title: "Home",
        headerRight: (
            <Button
                onPress={() => navigation.navigate('Modal')}
                title="Info"
                color="#fff"
            />
        ),
        headerBackTitle: "Teste"
    }
}

export default Home