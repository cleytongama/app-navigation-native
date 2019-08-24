import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

const Home = function (props) {
    return (
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
    );
}

Home.navigationOptions =  {
    title: "Home"
}

export default Home