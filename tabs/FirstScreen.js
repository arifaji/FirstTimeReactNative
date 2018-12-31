import React from 'react';
import {Text, View, Button, Image} from 'react-native';

export default class FirstScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Tab1'
    }
    render(){
        return <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
            }
        }>
            <Text style={{fontSize:30}}>
                this is tab 1
            </Text>
        </View>
    }
}