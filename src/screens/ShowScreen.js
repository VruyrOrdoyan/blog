import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const { state } = useContext(Context);
    const blogPost = state.find((item) => item.id === id);
    return (
    <View>
        <Text style={styles.label}>Title: {blogPost.title}</Text>
        <Text style={styles.label}>Content: {blogPost.content}</Text>
    </View>);
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
              <Ionicons name="pencil" size={30} />
            </TouchableOpacity>
          )
    };
};

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default ShowScreen;