import React, { useEffect, useState } from "react";
import {
    Dimensions,
    FlatList, ScrollView,
    Text,
    View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import { AppButton } from "@core";
import { PostItem } from "@component";
import { AddTaskName } from "@constants/navigationName";
import { PostEditModal } from "@component/postEditModal";
import { SET_POST } from "@constants/actionsType";

export function Home({ navigation }) {
    let store = useSelector(store => store.post);
    let dispatch = useDispatch();
    let [isVisible, setIsVisible] = useState(false);
    let [editIndex, setEditIndex] = useState(null);
    let [post] = useState(store.post);

    useEffect(() => {
        if (!post.length) {
            addPost();
        }
    }, []);

    let addPost = () => {
        let key = store.post.length;
        for (let i = 0; i < 8; i++) {
            post.push({
                id: key + i,
                title: "Name",
                description: "Description",
            });
        }
        dispatch({
            type: SET_POST,
            payload: post,
        });
    };

    let _renderPost = () => {
        return post.map((item, index) => {
            return <PostItem
                key={item.id}
                title={item.title}
                description={item.description}
                click={() => {
                    setEditIndex(index);
                    setIsVisible(true);
                }}
            />;
        });

    };

    return (
        <View style={styles.container}>
            <View style={styles.header_cont}>
                <Text style={styles.headerText}>Dashboard</Text>
                <AppButton
                    style={styles.add_btn}
                    text={"Add"}
                    onPress={() => navigation.navigate(AddTaskName)}
                />
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {_renderPost()}
            </ScrollView>
            <AppButton
                style={styles.more_btn}
                text={"More"}
                onPress={addPost}
            />
            <PostEditModal
                isVisible={isVisible}
                editBtn={(data) => {
                    post[editIndex].title = data.title;
                    post[editIndex].description = data.description;
                    dispatch({
                        type: "SET_POST",
                        payload: post,
                    });
                    setIsVisible(false);
                }}
            />
        </View>
    );

}
