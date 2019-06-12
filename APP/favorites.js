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
        console.log('item', item.item[0].Title);
        return (
            <View key={index} style = {Styles.container}>
                <Text style = {Styles.moviesText}>{item.item[0].Title}</Text>
            </View>
        )
    }


    render() {
        console.log(this.props.favoriteItems);
        let data = this.props.favoriteItems;

        let result = Object.keys(data).map(function(key) {
            return [data[key]];
          });
        
        console.log(result);
        return(
            <View>
                <FlatList
                    data={result}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

const Styles = StyleSheet.create({

    container: {
        flex: 1
    },
    moviesText: {
        margin: 30,
        fontWeight: "900"
    }
});