import React, { useState } from "react";
import {
    View,
    Text,
} from "react-native";
import Modal from "react-native-modal";
import { AppButton, AppInput } from "../../core";
import { styles } from "../../screens/customerScreens/addTask/styles";


export function  PostEditModal({editBtn, isVisible}) {
    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')
    let [error, setError] = useState('')
    let changeInput = (e, name) => {
        name(e)
        setError('')
    }

    let edit = () => {
        if(title && description){
            let data = {title, description}
            editBtn(data)
        }
        else{
            setError('Please fill in all required fields')
        }

    }

    return (
        <Modal
            isVisible={isVisible}
            style={{ margin: 0 }}
        >
            <View style={styles.container}>
                <Text style={styles.headerText}>Edit Post</Text>
                <AppInput
                    placeholder={'Title*'}
                    changeInput={(e) => changeInput(e, setTitle)}
                />
                <AppInput
                    placeholder={'Description*'}
                    changeInput={(e) => changeInput(e, setDescription)}
                />
                {error &&
                    <Text style={styles.error}>{error}</Text>
                }
                <AppButton
                    text={'Edit'}
                    onPress={edit}
                />
            </View>
        </Modal>
    )
}
