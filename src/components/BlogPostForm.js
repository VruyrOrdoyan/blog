import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (<View>
        <Text style={styles.label}>
            Edit Title
        </Text>
        <TextInput style={styles.input} value={title} onChangeText={t => setTitle(t)}/>
        <Text style={styles.label}>
            Edit Content
        </Text>
        <TextInput style={styles.input} value={content} onChangeText={c => setContent(c)}/>
        <Button title='Save Blog Post' onPress={() => {
                onSubmit(title, content);
            }}/>
    </View>);
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    input: {
        borderColor: '#000',
        borderWidth: 2,
        fontSize: 18,
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default BlogPostForm;