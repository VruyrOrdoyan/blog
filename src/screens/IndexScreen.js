import React, { useContext, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const { state, deleteBlogPost, getBlogPosts} = useContext(Context);

    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        };
    }, []);

    return (
    <View>
        <FlatList 
            keyExtractor={(blogPost) => blogPost.id.toString()}
            data={state}
            renderItem={({item}) => {
                return (<View style={styles.row}>
                    <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                        <Feather style={styles.icon} name='trash'/>
                    </TouchableOpacity>
                </View>);
            }}
        />
    </View>);
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <Feather name="plus" size={30} />
            </TouchableOpacity>
          )
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'grey',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 20
    }
});

export default IndexScreen;