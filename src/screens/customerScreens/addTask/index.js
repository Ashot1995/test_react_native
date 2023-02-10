import React, { useState } from "react";
import {
    Text,
    View
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { AppButton, AppInput } from "@core";

export function AddTask({navigation}) {
    let store = useSelector(store => store.post)
    let dispatch = useDispatch()
    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')
    let [error, setError] = useState('')
    let changeInput = (e, name) => {
        name(e)
        setError('')
    }

    let addPost = () => {
        if(title && description){
            store.post.push({
                id: new Date(),
                title,
                description
            })
            dispatch({
                type: "SET_POST",
                payload: store.post,

            })
            navigation.goBack()
        }else{
            setError('Please fill in all required fields')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>AddTask</Text>
            <AppInput
                placeholder={'Title*'}
                changeInput={(e) => changeInput(e, setTitle)}
            />
            <AppInput
                placeholder={'Description*'}
                changeInput={(e) => changeInput(e, setDescription)}
            />
            {error &&
                <Text>{error}</Text>
            }
            <AppButton
                text={'Add'}
                onPress={addPost}
            />
        </View>
    );

}
