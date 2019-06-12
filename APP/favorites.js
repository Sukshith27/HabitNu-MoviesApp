import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

export default class Favorites extends React.Component {
    constructor() {
        super();
        this.state = {
            dataSource: [],
        };
    }
    _renderItem = (item,index) => {
        return (
            <View key={index}>
                <Text>{item.Title}</Text>
            </View>
        )
    }

    favList = () => {
        <Text>exampl</Text>
    }

    render() {
        console.log(this.props.favoriteItems);
        let data = this.props.favoriteItems;

        let result = Object.keys(data).map(function(key) {
            return [Number(key), data[key]];
          });
        
        return(
            <View>
                <Text>From main</Text>
                <FlatList
                    data={result}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}